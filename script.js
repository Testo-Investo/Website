document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".more-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.previousElementSibling;
    const expanded = text.classList.toggle("expanded");
    text.classList.toggle("collapsed", !expanded);
    button.textContent = expanded ? "Weniger anzeigen" : "Mehr anzeigen";
  });
});

document.querySelectorAll(".replies-toggle").forEach((button) => {
  const originalLabel = button.textContent;
  button.addEventListener("click", () => {
    const isShown = button.dataset.shown === "true";
    button.dataset.shown = String(!isShown);
    button.textContent = isShown ? originalLabel : "Antworten ausblenden";
  });
});

document.querySelectorAll(".comment-input").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("input");
    if (!input.value.trim()) return;
    input.value = "";
    input.placeholder = "Kommentar gesendet ✔️";
    setTimeout(() => {
      input.placeholder = "Schreib einen Kommentar …";
    }, 2000);
  });
});
