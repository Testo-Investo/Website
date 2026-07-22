document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = "Wird gesendet …";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      formStatus.textContent = "Danke für deine Nachricht! Wir melden uns in Kürze.";
      contactForm.reset();
    } else {
      formStatus.textContent = "Da ist etwas schiefgelaufen. Bitte versuch es später erneut.";
    }
  } catch (error) {
    formStatus.textContent = "Da ist etwas schiefgelaufen. Bitte versuch es später erneut.";
  }
});
