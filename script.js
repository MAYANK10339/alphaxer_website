// ===================================================
// AlphaXER Launcher Website - Interactive Script
// Smooth Canvas Particles, Accordions, Modals & SEO micro-interactions
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. STAR & PARTICLES CANVAS BACKGROUND
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particleCount = Math.min(width > 768 ? 60 : 30, 80);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  // 2. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 3. LICENSE & LEGAL MODAL
  const licenseModal = document.getElementById('license-modal');
  const openLicenseBtns = document.querySelectorAll('.open-license-btn');
  const closeLicenseBtn = document.getElementById('close-license-btn');

  openLicenseBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (licenseModal) licenseModal.classList.add('active');
    });
  });

  if (closeLicenseBtn && licenseModal) {
    closeLicenseBtn.addEventListener('click', () => {
      licenseModal.classList.remove('active');
    });
  }

  // 4. BUSINESS CONTACT MODAL
  const contactModal = document.getElementById('contact-modal');
  const openContactBtns = document.querySelectorAll('.open-contact-btn');
  const closeContactBtn = document.getElementById('close-contact-btn');

  openContactBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (contactModal) contactModal.classList.add('active');
    });
  });

  if (closeContactBtn && contactModal) {
    closeContactBtn.addEventListener('click', () => {
      contactModal.classList.remove('active');
    });
  }

  // Close modals on clicking overlay
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });

  // 5. COPY EMAIL TO CLIPBOARD
  window.copyEmail = function(btnElement) {
    const email = 'mayankmandrai9@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = btnElement.innerText;
      btnElement.innerText = 'Copied to Clipboard!';
      btnElement.style.background = '#10b981';
      setTimeout(() => {
        btnElement.innerText = originalText;
        btnElement.style.background = '';
      }, 2500);
    });
  };

  // 6. INTERACTIVE LOADER SWITCHER IN SHOWCASE
  const loaderTabs = document.querySelectorAll('.mock-loader-card');
  const loaderBadge = document.getElementById('showcase-loader-badge');
  const loaderDesc = document.getElementById('showcase-loader-desc');

  loaderTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      loaderTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const loader = tab.dataset.loader;
      if (loader === 'neoforge') {
        if (loaderBadge) loaderBadge.innerText = 'NEOFORGE 1.21.1';
        if (loaderBadge) loaderBadge.className = 'feature-badge bg-orange-500/20 text-orange-400 border-orange-500/30';
        if (loaderDesc) loaderDesc.innerText = 'Full NeoForge 21.1.65 environment with native title screen Mods menu and Create mod support.';
      } else {
        if (loaderBadge) loaderBadge.innerText = 'FABRIC 1.21.1';
        if (loaderBadge) loaderBadge.className = 'feature-badge';
        if (loaderDesc) loaderDesc.innerText = 'Ultra-lightweight modular engine with Sodium, Iris Shaders, and zero input latency.';
      }
    });
  });
});
