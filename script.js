const site = window.SITE;
const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const formatDate = (date) => {
  const [year, month] = date.split("-");
  return month ? `${MONTHS[Number(month) - 1]} ${year}` : year;
};

const placeholder = (label = "Foto folgt") => `
  <div class="ph">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>
    </svg>
    <span>${escapeHtml(label)}</span>
  </div>`;

const media = (src, alt, label, eager = false) =>
  src
    ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" ${eager ? "" : 'loading="lazy"'} decoding="async">`
    : placeholder(label);

/* ---------- Profile ---------- */
document.querySelectorAll("[data-bind]").forEach((el) => {
  el.textContent = site.profile[el.dataset.bind] ?? "";
});
document.getElementById("heroMedia").innerHTML = media(site.profile.heroImage, `${site.profile.name} – Hero`, "", true);
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Stats ---------- */
document.getElementById("stats").innerHTML = site.stats
  .map(
    (s) => `
    <div class="stat">
      <strong data-count="${Number(s.value)}" data-suffix="${escapeHtml(s.suffix)}">0${escapeHtml(s.suffix)}</strong>
      <span>${escapeHtml(s.label)}</span>
    </div>`
  )
  .join("");

/* ---------- Timeline ---------- */
document.getElementById("timeline").innerHTML = site.timeline
  .map(
    (t) => `
    <li class="tl-item reveal">
      <div class="tl-text">
        <span class="tl-year">${escapeHtml(t.year)}</span>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.text)}</p>
      </div>
      <div class="tl-media">${media(t.image, `${t.year} – ${t.title}`, `Foto ${t.year}`)}</div>
    </li>`
  )
  .join("");

/* ---------- Competitions ---------- */
document.getElementById("comps").innerHTML = site.competitions
  .map(
    (c, i) => `
    <li class="comp reveal" style="transition-delay:${i * 80}ms">
      <span class="comp-no">${String(i + 1).padStart(2, "0")}</span>
      <span class="comp-year">${escapeHtml(c.year)}</span>
      <strong class="comp-name">${escapeHtml(c.name)}</strong>
      <span class="comp-div">${escapeHtml(c.division)}</span>
      <span class="comp-place">Platz ${escapeHtml(c.place)}</span>
    </li>`
  )
  .join("");

/* ---------- Shootings ---------- */
const shootingsEl = document.getElementById("shootings");
const shootingPhotos = site.shootings.map((sh) =>
  sh.photos.map((p) => ({ ...p, date: sh.year, tag: sh.title }))
);

shootingsEl.innerHTML = site.shootings
  .map(
    (sh, si) => `
    <article class="shoot">
      <header class="shoot-head reveal">
        <span class="shoot-year">${escapeHtml(sh.year)}</span>
        <div>
          <h3>${escapeHtml(sh.title)} ${escapeHtml(sh.year)}</h3>
          ${sh.text ? `<p>${escapeHtml(sh.text)}</p>` : ""}
        </div>
      </header>
      <div class="collage${sh.layout ? ` collage--${escapeHtml(sh.layout)}` : ""} reveal">
        ${sh.photos
          .map(
            (p, pi) => `
          <button type="button" class="c-item" data-shoot="${si}" data-index="${pi}" aria-label="${escapeHtml(p.caption)} – vergrößern">
            <img src="${escapeHtml(p.src)}" alt="${escapeHtml(p.caption)}" loading="lazy" decoding="async"${p.focus ? ` style="object-position:${escapeHtml(p.focus)}"` : ""}>
            <span class="c-cap">${escapeHtml(p.caption)}</span>
          </button>`
          )
          .join("")}
      </div>
    </article>`
  )
  .join("");

/* ---------- Before / After ---------- */
const { before, after } = site.comparison;
document.getElementById("compareBefore").innerHTML =
  media(before.src, `Vorher ${before.label}`, "Vorher-Foto") + `<span class="compare-label">${escapeHtml(before.label)}</span>`;
document.getElementById("compareAfter").innerHTML =
  media(after.src, `Nachher ${after.label}`, "Nachher-Foto") + `<span class="compare-label">${escapeHtml(after.label)}</span>`;

const compare = document.getElementById("compare");
document.getElementById("compareRange").addEventListener("input", (e) => {
  compare.style.setProperty("--pos", `${e.target.value}%`);
});

/* ---------- Gallery ---------- */
const gallery = [...site.gallery].sort((a, b) => b.date.localeCompare(a.date));
const years = [...new Set(gallery.map((g) => g.date.slice(0, 4)))];
const galleryEl = document.getElementById("gallery");
const filtersEl = document.getElementById("filters");
let visible = gallery;

filtersEl.innerHTML = ["Alle", ...years]
  .map((y, i) => `<button type="button" class="chip" data-year="${y}" aria-pressed="${i === 0}">${y}</button>`)
  .join("");

const renderGallery = () => {
  galleryEl.innerHTML = visible
    .map(
      (g, i) => `
      <button type="button" class="g-item" data-index="${i}" style="animation-delay:${Math.min(i, 8) * 50}ms"
        aria-label="${escapeHtml(g.caption)}, ${formatDate(g.date)} – vergrößern">
        ${media(g.src, g.caption, formatDate(g.date))}
        ${g === gallery[0] ? '<span class="g-new">Neu</span>' : ""}
        <span class="g-meta">
          <span><strong>${escapeHtml(g.caption)}</strong><small>${formatDate(g.date)}</small></span>
          ${g.tag ? `<span class="g-tag">${escapeHtml(g.tag)}</span>` : ""}
        </span>
      </button>`
    )
    .join("");
};

filtersEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === chip));
  const year = chip.dataset.year;
  visible = year === "Alle" ? gallery : gallery.filter((g) => g.date.startsWith(year));
  renderGallery();
});

renderGallery();

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lbMedia = document.getElementById("lbMedia");
const lbCaption = document.getElementById("lbCaption");
let current = 0;
let lbList = [];

const showImage = (index) => {
  current = (index + lbList.length) % lbList.length;
  const g = lbList[current];
  lbMedia.innerHTML = media(g.src, g.caption, "Foto folgt", true);
  lbCaption.innerHTML = `<strong>${escapeHtml(g.caption)}</strong> · ${formatDate(g.date)}${g.tag ? ` · ${escapeHtml(g.tag)}` : ""}`;
};

galleryEl.addEventListener("click", (e) => {
  const item = e.target.closest(".g-item");
  if (!item) return;
  lbList = visible;
  showImage(Number(item.dataset.index));
  lightbox.showModal();
});

shootingsEl.addEventListener("click", (e) => {
  const item = e.target.closest(".c-item");
  if (!item) return;
  lbList = shootingPhotos[Number(item.dataset.shoot)];
  showImage(Number(item.dataset.index));
  lightbox.showModal();
});

document.getElementById("lbClose").addEventListener("click", () => lightbox.close());
document.getElementById("lbPrev").addEventListener("click", () => showImage(current - 1));
document.getElementById("lbNext").addEventListener("click", () => showImage(current + 1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showImage(current - 1);
  if (e.key === "ArrowRight") showImage(current + 1);
});

let touchX = null;
lightbox.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
lightbox.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) showImage(current + (dx < 0 ? 1 : -1));
  touchX = null;
});

/* ---------- Lifts ---------- */
const liftCard = (name, start, now, max, unit = "kg") => `
    <article class="lift reveal">
      <h3>${escapeHtml(name)}</h3>
      <div class="lift-now">${now}<small>${unit}</small></div>
      <div class="lift-bar"><i style="--w:${(now / max) * 100}%"></i></div>
      <div class="lift-delta"><span>Start: ${start} ${unit}</span><b>+${now - start} ${unit}</b></div>
    </article>`;

const maxLift = Math.max(0, ...site.lifts.map((l) => l.now));
document.getElementById("lifts").innerHTML =
  liftCard("Körpergewicht", site.weight.start, site.weight.now, site.weight.now) +
  site.lifts.map((l) => liftCard(l.name, l.start, l.now, maxLift)).join("");

/* ---------- Contact ---------- */
const links = [];
if (site.profile.instagram) {
  links.push(`<a class="btn btn-primary" href="${escapeHtml(site.profile.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>`);
}
if (site.profile.email) {
  links.push(`<a class="btn btn-ghost" href="mailto:${escapeHtml(site.profile.email)}">E-Mail schreiben</a>`);
}
document.getElementById("contactLinks").innerHTML =
  links.join("") || `<span class="btn btn-ghost" aria-disabled="true">Links folgen in Kürze</span>`;

/* ---------- Navigation ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
  if (!e.target.closest("a")) return;
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

/* ---------- Scroll animations ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const countUp = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix;
  const fmt = (n) => n.toLocaleString("de-DE") + suffix;
  if (reduceMotion) {
    el.textContent = fmt(target);
    return;
  }
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / 1600, 1);
    el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("in");
      if (entry.target.dataset.count) countUp(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal, .lift, [data-count]").forEach((el) => observer.observe(el));
