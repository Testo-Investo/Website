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

// Kleine Vorschau-Version eines Fotos (wird mit tools/make_thumbs.py erzeugt): foto.jpg -> foto.thumb.webp
const thumbOf = (src) => src.replace(/\.(jpe?g|png|webp)$/i, ".thumb.webp");

// <img>-Tag; mit thumb=true wird die Vorschau geladen und bei Fehlen automatisch das Original
const img = (src, alt, { eager = false, focus = "", thumb = false } = {}) => {
  const file = thumb ? thumbOf(src) : src;
  const fallback = thumb ? ` onerror="this.onerror=null;this.src='${escapeHtml(src)}'"` : "";
  return `<img src="${escapeHtml(file)}" alt="${escapeHtml(alt)}" ${eager ? "" : 'loading="lazy"'} decoding="async"${focus ? ` style="object-position:${escapeHtml(focus)}"` : ""}${fallback}>`;
};

const media = (src, alt, label, eager = false, focus = "", thumb = false) =>
  src ? img(src, alt, { eager, focus, thumb }) : placeholder(label);

/* ---------- Profile ---------- */
document.querySelectorAll("[data-bind]").forEach((el) => {
  el.textContent = site.profile[el.dataset.bind] ?? "";
});
document.getElementById("heroMedia").innerHTML = media(site.profile.heroImage, `${site.profile.name} – Hero`, "", true);
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Spotlight ---------- */
const spotEl = document.getElementById("topform");
const sp = site.spotlight;
if (sp && sp.src) {
  spotEl.innerHTML = `
    <button type="button" class="spot-media reveal" aria-label="${escapeHtml(sp.caption)} – vergrößern">
      <img src="${escapeHtml(sp.src)}" alt="${escapeHtml(sp.caption)}" loading="lazy" decoding="async"${sp.focus ? ` style="object-position:${escapeHtml(sp.focus)}"` : ""}>
      ${sp.date ? `<span class="spot-date">${escapeHtml(sp.date)}</span>` : ""}
    </button>
    <div class="spot-text reveal">
      <p class="eyebrow">${escapeHtml(sp.eyebrow)}</p>
      <div class="spot-value">${Number(sp.value)}<small>${escapeHtml(sp.unit)}</small></div>
      <h2>${escapeHtml(sp.title)}</h2>
      <p class="section-lead">${escapeHtml(sp.text)}</p>
      <a href="#story" class="btn btn-ghost">Wie es dazu kam ↓</a>
    </div>`;
} else {
  spotEl.remove();
}

/* ---------- Über mich ---------- */
const about = site.about;
if (about) {
  document.getElementById("aboutTitle").textContent = about.title;
  document.getElementById("aboutLead").textContent = about.lead;
  document.getElementById("aboutFacts").innerHTML = about.facts
    .map((f) => `<div class="about-fact reveal"><strong>${escapeHtml(f.value)}</strong><span>${escapeHtml(f.label)}</span></div>`)
    .join("");
  document.getElementById("aboutCards").innerHTML = about.cards
    .map(
      (c) => `
      <article class="about-card reveal">
        <p class="eyebrow">${escapeHtml(c.eyebrow)}</p>
        ${c.value ? `<div class="about-value">${escapeHtml(c.value)}</div>` : ""}
        ${c.title ? `<h3>${escapeHtml(c.title)}</h3>` : ""}
        ${c.chips ? `<ul class="about-chips">${c.chips.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ""}
        <p>${escapeHtml(c.text)}</p>
      </article>`
    )
    .join("");
} else {
  document.getElementById("ueber-mich").remove();
}

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
    <li class="tl-item${t.image ? "" : " tl-item--solo"} reveal">
      <div class="tl-text">
        <span class="tl-year">${escapeHtml(t.year)}</span>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.text)}</p>
      </div>
      ${t.image ? `<div class="tl-media">${media(t.image, `${t.year} – ${t.title}`, "", false, t.focus, true)}</div>` : ""}
    </li>`
  )
  .join("");

/* ---------- Competitions ---------- */
const compsEl = document.getElementById("comps");
// Pro Wettkampf höchstens 3 Vorschauen; alle Fotos gibt es in der Großansicht
const MAX_COMP_THUMBS = 3;
const compPhotos = site.competitions.map((c) =>
  (c.photos || []).map((p) => ({ ...p, date: c.year, tag: [c.name, c.division].filter(Boolean).join(" · ") }))
);

compsEl.innerHTML = site.competitions
  .map(
    (c, i) => `
    <li class="comp${String(c.place) === "1" ? " comp--winner" : ""} reveal" style="transition-delay:${i * 80}ms">
      <span class="comp-no">${String(i + 1).padStart(2, "0")}</span>
      <span class="comp-year">${escapeHtml(c.year)}</span>
      <strong class="comp-name">${escapeHtml(c.name)}</strong>
      ${c.division ? `<span class="comp-div">${escapeHtml(c.division)}</span>` : ""}
      ${c.place ? `<span class="comp-place">${String(c.place) === "1" ? "🏆 " : ""}Platz ${escapeHtml(c.place)}</span>` : ""}
      ${
        compPhotos[i].length
          ? `<div class="comp-photos${c.layout ? ` comp-photos--${escapeHtml(c.layout)}` : ""}">${compPhotos[i]
              .slice(0, MAX_COMP_THUMBS)
              .map((p, pi, shownList) => {
                const rest = compPhotos[i].length - shownList.length;
                const isLast = pi === shownList.length - 1 && rest > 0;
                return `
            <button type="button" class="comp-photo" data-comp="${i}" data-index="${pi}"
              aria-label="${isLast ? `Alle ${compPhotos[i].length} Fotos ansehen` : `${escapeHtml(p.caption)} – vergrößern`}">
              ${img(p.src, p.caption, { focus: p.focus, thumb: true })}
              ${isLast ? `<span class="comp-more">+${rest}</span>` : ""}
            </button>`;
              })
              .join("")}</div>`
          : ""
      }
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
            ${img(p.src, p.caption, { focus: p.focus, thumb: true })}
            <span class="c-cap">${escapeHtml(p.caption)}</span>
          </button>`
          )
          .join("")}
      </div>
    </article>`
  )
  .join("");

/* ---------- Before / After ---------- */
const comparesEl = document.getElementById("compares");
comparesEl.innerHTML = site.comparisons
  .map(
    (c) => `
    <figure class="compare-block reveal">
      ${c.title ? `<figcaption class="compare-title">${escapeHtml(c.title)}</figcaption>` : ""}
      <div class="compare${c.portrait ? " compare--portrait" : ""}">
        <div class="compare-layer compare-after">${media(c.after.src, `Nachher ${c.after.label}`, "Nachher-Foto")}<span class="compare-label">${escapeHtml(c.after.label)}</span></div>
        <div class="compare-layer compare-before">${media(c.before.src, `Vorher ${c.before.label}`, "Vorher-Foto")}<span class="compare-label">${escapeHtml(c.before.label)}</span></div>
        <div class="compare-handle" aria-hidden="true"><span>⟷</span></div>
        <input class="compare-range" type="range" min="0" max="100" value="50" aria-label="Vorher-Nachher-Vergleich ${escapeHtml(c.title || "")} verschieben">
      </div>
    </figure>`
  )
  .join("");

comparesEl.addEventListener("input", (e) => {
  if (!e.target.classList.contains("compare-range")) return;
  e.target.closest(".compare").style.setProperty("--pos", `${e.target.value}%`);
});

/* ---------- Gallery ---------- */
const gallery = [...site.gallery].sort((a, b) => b.date.localeCompare(a.date));
// "Neu"-Badge nur für Fotos der letzten 3 Monate
const newSince = (() => {
  const d = new Date();
  d.setMonth(d.getMonth() - 3);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
})();
const years = [...new Set(gallery.map((g) => g.date.slice(0, 4)))];
const galleryEl = document.getElementById("gallery");
const filtersEl = document.getElementById("filters");
let visible = gallery;

filtersEl.innerHTML = ["Alle", ...years]
  .map((y, i) => `<button type="button" class="chip" data-year="${y}" aria-pressed="${i === 0}">${y}</button>`)
  .join("");

// Anfangs 9 Bilder (großes erstes + 8 kleine = volle Reihen), dann je 8 weitere
const FIRST_PAGE = 9;
const NEXT_PAGE = 8;
const moreBtn = document.getElementById("galleryMore");
let shown = 0;

const galleryItem = (g, i, delay) => `
      <button type="button" class="g-item" data-index="${i}" style="animation-delay:${Math.min(delay, 8) * 50}ms"
        aria-label="${escapeHtml(g.caption)}, ${formatDate(g.date)} – vergrößern">
        ${media(g.src, g.caption, formatDate(g.date), false, "", true)}
        ${g === gallery[0] && g.date.length > 4 && g.date >= newSince ? '<span class="g-new">Neu</span>' : ""}
        <span class="g-meta">
          <span><strong>${escapeHtml(g.caption)}</strong><small>${formatDate(g.date)}</small></span>
          ${g.tag ? `<span class="g-tag">${escapeHtml(g.tag)}</span>` : ""}
        </span>
      </button>`;

const updateMoreBtn = () => {
  const rest = visible.length - shown;
  moreBtn.hidden = rest <= 0;
  moreBtn.textContent = `Mehr anzeigen (${rest} weitere)`;
};

// Zeigt Bilder bis "upTo" an; append=true hängt nur die neuen an (ohne die alten neu zu animieren)
const renderGallery = (upTo, append = false) => {
  const start = append ? shown : 0;
  const end = Math.min(upTo, visible.length);
  const html = visible.slice(start, end).map((g, k) => galleryItem(g, start + k, k)).join("");
  if (append) galleryEl.insertAdjacentHTML("beforeend", html);
  else galleryEl.innerHTML = html;
  shown = end;
  updateMoreBtn();
};

moreBtn.addEventListener("click", () => {
  const firstNew = shown;
  renderGallery(shown + NEXT_PAGE, true);
  galleryEl.querySelector(`[data-index="${firstNew}"]`)?.focus({ preventScroll: true });
});

filtersEl.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === chip));
  const year = chip.dataset.year;
  visible = year === "Alle" ? gallery : gallery.filter((g) => g.date.startsWith(year));
  renderGallery(FIRST_PAGE);
});

renderGallery(FIRST_PAGE);

/* ---------- Lightbox ---------- */
const lightbox = document.getElementById("lightbox");
const lbMedia = document.getElementById("lbMedia");
const lbCaption = document.getElementById("lbCaption");
let current = 0;
let lbList = [];

const showImage = (index) => {
  current = (index + lbList.length) % lbList.length;
  const single = lbList.length < 2;
  document.getElementById("lbPrev").hidden = single;
  document.getElementById("lbNext").hidden = single;
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

compsEl.addEventListener("click", (e) => {
  const item = e.target.closest(".comp-photo");
  if (!item) return;
  lbList = compPhotos[Number(item.dataset.comp)];
  showImage(Number(item.dataset.index));
  lightbox.showModal();
});

spotEl.addEventListener("click", (e) => {
  if (!e.target.closest(".spot-media")) return;
  lbList = [{ src: sp.full || sp.src, caption: sp.caption, date: sp.date.slice(-4), tag: sp.eyebrow }];
  showImage(0);
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
      <div class="lift-delta"><span>Start: ${start} ${unit}</span><b>${now >= start ? "+" : "−"}${Math.abs(now - start)} ${unit}</b></div>
    </article>`;

const maxLift = Math.max(0, ...site.lifts.map((l) => l.now));
document.getElementById("lifts").innerHTML =
  liftCard("Körpergewicht seit 2004", site.weight.start, site.weight.now, site.weight.now) +
  (site.diet ? liftCard(site.diet.label, site.diet.start, site.diet.now, site.diet.start) : "") +
  site.lifts.map((l) => liftCard(l.name, l.start, l.now, maxLift)).join("");

/* ---------- Contact ---------- */
const links = [];
if (site.profile.instagram) {
  links.push(`<a class="btn btn-primary" href="${escapeHtml(site.profile.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>`);
}
if (site.profile.email) {
  const primary = site.profile.instagram ? "btn-ghost" : "btn-primary";
  links.push(`<a class="btn ${primary}" href="mailto:${escapeHtml(site.profile.email)}">E-Mail schreiben</a>`);
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
