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

const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const stats = document.querySelectorAll('.stat');

if (stats.length) {
  const prefersReducedMotion = reduceMotionQuery.matches;

  const animateStat = (stat) => {
    const target = Number(stat.dataset.target || 0);
    const numberElement = stat.querySelector('.stat-number');
    const suffixElement = stat.querySelector('.stat-suffix');

    if (!numberElement || Number.isNaN(target)) {
      return;
    }

    if (prefersReducedMotion) {
      numberElement.textContent = target;
      if (suffixElement && suffixElement.textContent.trim() === '' && stat.dataset.suffix) {
        suffixElement.textContent = stat.dataset.suffix;
      }
      return;
    }

    const duration = 1500;
    const start = performance.now();

    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      numberElement.textContent = current.toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        numberElement.textContent = target.toString();
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => observer.observe(stat));
}

const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialCards.length > 1 && !reduceMotionQuery.matches) {
  let activeIndex = 0;
  testimonialCards[activeIndex].classList.add('active');

  setInterval(() => {
    testimonialCards[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % testimonialCards.length;
    testimonialCards[activeIndex].classList.add('active');
  }, 5000);
}

const calcForm = document.querySelector('.calc-form');
const calcResult = document.getElementById('calc-result');

if (calcForm && calcResult) {
  calcForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(calcForm);
    const area = Number(formData.get('area')) || 0;
    const type = formData.get('type');
    const frequency = formData.get('frequency');

    if (!area || area < 20) {
      calcResult.textContent = 'Podaj metraż większy niż 20 m², aby otrzymać wycenę.';
      return;
    }

    const baseRates = {
      regular: 4,
      deep: 5.2,
      office: 4.5,
    };

    const frequencyMultipliers = {
      single: 1,
      monthly: 0.94,
      weekly: 0.88,
    };

    const visitsPerMonth = {
      single: 1,
      monthly: 2,
      weekly: 4,
    };

    const baseRate = baseRates[type] || baseRates.regular;
    const frequencyMultiplier = frequencyMultipliers[frequency] || 1;
    const visits = visitsPerMonth[frequency] || 1;

    const netPerVisit = Math.round(area * baseRate);
    const monthlyEstimate = Math.round(netPerVisit * visits * frequencyMultiplier);

    const formatter = new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0,
    });

    calcResult.textContent = `Szacunkowa cena to ${formatter.format(netPerVisit)} za wizytę i ${formatter.format(
      monthlyEstimate
    )} przy wskazanej częstotliwości.`;
  });
}
