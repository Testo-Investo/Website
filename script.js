// Testo-Investo – One-Page Brand Site

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Jahr im Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Nav: Rand einblenden sobald gescrollt wird
const siteNav = document.getElementById("siteNav");
const onScroll = () => siteNav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobiles Menü
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Ticker: Inhalt duplizieren für nahtlose Endlosschleife
const tickerTrack = document.querySelector(".ticker-track");
if (tickerTrack) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
}

// Scroll-Reveal + Zähler + Portfolio-Balken via IntersectionObserver
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  if (prefersReducedMotion || !Number.isFinite(target)) {
    el.textContent = target;
    return;
  }
  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      el.classList.add("visible");

      el.querySelectorAll("[data-count]").forEach(animateCount);

      // Balken auf Zielbreite fahren (max. Gewichtung = volle Breite)
      if (el.classList.contains("holdings")) {
        const holdings = el.querySelectorAll(".holding");
        const maxWeight = Math.max(
          ...Array.from(holdings, (h) => Number(h.dataset.weight))
        );
        holdings.forEach((holding) => {
          const fill = holding.querySelector(".holding-fill");
          const weight = Number(holding.dataset.weight);
          fill.style.width = `${(weight / maxWeight) * 100}%`;
        });
      }

      observer.unobserve(el);
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Newsletter: reine Front-End-Bestätigung (kein Backend angebunden)
const newsletterForm = document.getElementById("newsletterForm");
const newsletterConfirm = document.getElementById("newsletterConfirm");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = newsletterForm.querySelector("input[type=email]");
  if (!input.value.trim()) return;
  input.value = "";
  newsletterConfirm.hidden = false;
});
