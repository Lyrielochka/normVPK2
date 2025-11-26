document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".layout-links");

  burger?.addEventListener("click", () => {
    links?.classList.toggle("open");
  });

  links?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });

  const form = document.querySelector("[data-register-form]");
  const message = document.querySelector("[data-register-message]");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!message) return;

    message.hidden = false;
    message.textContent = "Иди подумай ещё, дружок-пирожок";
    message.classList.add("register__message--error");

    message.classList.remove("register__message--shake");
    void message.offsetWidth; // restart animation
    message.classList.add("register__message--shake");
  });
});
