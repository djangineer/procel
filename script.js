const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    primaryNav.classList.toggle("is-open", !isExpanded);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const clientsMarquee = document.querySelector(".clients-marquee");
const clientsToggle = document.querySelector(".clients-toggle");

if (clientsMarquee && clientsToggle) {
  clientsToggle.addEventListener("click", () => {
    const isPaused = clientsMarquee.classList.toggle("is-paused");
    clientsToggle.setAttribute("aria-pressed", String(isPaused));
    clientsToggle.textContent = isPaused ? "Resume logo scroll" : "Pause logo scroll";
  });
}

const contactForm = document.querySelector("#contact-form");
const contactFormFeedback = document.querySelector("#contact-form-feedback");
const contactFormFallback = document.querySelector("#contact-form-fallback");

if (contactForm && contactFormFeedback && contactFormFallback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const topic = String(formData.get("topic")).trim();
    const message = String(formData.get("message")).trim();
    const subject = `Website enquiry: ${topic}`;
    const body = [
      `Full Name: ${name}`,
      `Email Address: ${email}`,
      `Enquiry Type: ${topic}`,
      "",
      "Message:",
      message,
    ].join("\n");
    const mailto = `mailto:info@proceltechservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    contactFormFallback.href = mailto;
    contactFormFeedback.textContent = "Your email app should open with the message ready. Select Send there to deliver it.";
    window.location.href = mailto;
  });
}
