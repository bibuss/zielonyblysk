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

function updateStatus(element, message, state) {
  if (!element) return;
  element.textContent = message;
  element.classList.remove('success', 'error');
  if (state) {
    element.classList.add(state);
  }
}

async function sendFormData(form) {
  if (!window.fetch) {
    throw new Error('fetch not supported');
  }

  const endpoint = form.dataset.endpoint || DEFAULT_ENDPOINT;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      form: form.dataset.form || 'contact',
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

document.querySelectorAll('form[data-form]').forEach((form) => {
  const statusElement = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');

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

    updateStatus(statusElement, 'Wysyłanie danych...', undefined);

    try {
      await sendFormData(form);
      updateStatus(
        statusElement,
        form.dataset.successMessage || 'Dziękujemy! Formularz został wysłany.',
        'success'
      );
      form.reset();
    } catch (error) {
      console.error('Nie udało się wysłać formularza', error);
      updateStatus(
        statusElement,
        form.dataset.errorMessage || 'Ups! Coś poszło nie tak. Spróbuj ponownie.',
        'error'
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      delete submitButton.dataset.loading;
    }
  });
});
