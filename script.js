const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open') ? 'true' : 'false'
    );
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scrolling with Lenis if available
if (window.Lenis) {
  const lenis = new Lenis({
    duration: 1.1,
    smoothTouch: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

const DEFAULT_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
const FORM_QUEUE_KEY = 'zielonyblyskFormQueue';

function isOnline() {
  if (typeof navigator === 'undefined' || typeof navigator.onLine === 'undefined') {
    return true;
  }

  return navigator.onLine;
}

function updateStatus(element, message, state) {
  if (!element) return;
  element.textContent = message;
  element.classList.remove('success', 'error', 'queued', 'pending');
  if (state) {
    element.classList.add(state);
  }
}

function getFormPayload(form) {
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  return {
    ...payload,
    form: form.dataset.form || 'contact',
    submittedAt: new Date().toISOString(),
  };
}

async function sendPayload(endpoint, payload) {
  if (!window.fetch) {
    throw new Error('fetch not supported');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

function loadQueue() {
  if (typeof window === 'undefined' || !window.localStorage) return [];

  try {
    const raw = localStorage.getItem(FORM_QUEUE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn('Nie udało się wczytać kolejki formularzy', error);
    return [];
  }
}

function saveQueue(queue) {
  if (typeof window === 'undefined' || !window.localStorage) return;

  try {
    localStorage.setItem(FORM_QUEUE_KEY, JSON.stringify(queue));
  } catch (error) {
    console.warn('Nie udało się zapisać kolejki formularzy', error);
  }
}

function queueSubmission(entry) {
  if (typeof window === 'undefined' || !window.localStorage) return false;

  const queue = loadQueue();
  queue.push(entry);
  saveQueue(queue);
  return true;
}

async function flushQueue() {
  if (!isOnline()) {
    return;
  }

  const queue = loadQueue();
  if (!queue.length) {
    return;
  }

  const remaining = [];

  for (const entry of queue) {
    try {
      await sendPayload(entry.endpoint, {
        ...entry.payload,
        retried: true,
      });
    } catch (error) {
      console.error('Nie udało się ponownie wysłać formularza', error);
      remaining.push(entry);
    }
  }

  saveQueue(remaining);
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    flushQueue();
  });
}

flushQueue();

document.querySelectorAll('form[data-form]').forEach((form) => {
  const statusElement = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const endpoint = form.dataset.endpoint || DEFAULT_ENDPOINT;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
      return;
    }

    if (!submitButton) {
      return;
    }

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Wysyłanie...';
    submitButton.dataset.loading = 'true';

    updateStatus(statusElement, 'Wysyłanie danych...', 'pending');

    const payload = getFormPayload(form);

    try {
      await sendPayload(endpoint, payload);
      updateStatus(
        statusElement,
        form.dataset.successMessage || 'Dziękujemy! Formularz został wysłany.',
        'success'
      );
      form.reset();
      flushQueue();
    } catch (error) {
      console.error('Nie udało się wysłać formularza', error);
      const isOffline = !isOnline() || error.name === 'TypeError';
      if (isOffline && queueSubmission({ endpoint, payload })) {
        updateStatus(
          statusElement,
          'Brak połączenia. Zapisaliśmy zgłoszenie i wyślemy je automatycznie po odzyskaniu internetu.',
          'queued'
        );
      } else {
        updateStatus(
          statusElement,
          form.dataset.errorMessage || 'Ups! Coś poszło nie tak. Spróbuj ponownie.',
          'error'
        );
      }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      delete submitButton.dataset.loading;
    }
  });
});
