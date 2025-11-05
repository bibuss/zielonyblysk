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

const forms = document.querySelectorAll('form[data-endpoint]');

forms.forEach((form) => {
  const statusMessage = form.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!submitButton) {
      form.submit();
      return;
    }

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Wysyłanie...';

    if (statusMessage) {
      statusMessage.textContent = '';
      statusMessage.classList.remove('error', 'visible');
    }

    const formData = new FormData(form);
    const payload = {};

    formData.forEach((value, key) => {
      payload[key] = value;
    });

    try {
      const response = await fetch(form.dataset.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();

      if (statusMessage) {
        statusMessage.textContent =
          form.dataset.successMessage ||
          'Dziękujemy! Twoja wiadomość została wysłana.';
        statusMessage.classList.remove('error');
        statusMessage.classList.add('visible');
      }
    } catch (error) {
      if (statusMessage) {
        statusMessage.textContent =
          form.dataset.errorMessage ||
          'Nie udało się wysłać formularza. Spróbuj ponownie później.';
        statusMessage.classList.add('error', 'visible');
      }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;

      if (statusMessage && !statusMessage.classList.contains('error')) {
        setTimeout(() => {
          statusMessage.classList.remove('visible');
          statusMessage.textContent = '';
        }, 6000);
      }
    }
  });
});
