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
