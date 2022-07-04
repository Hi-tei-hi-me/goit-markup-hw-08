(() => {
  const refs = {
    body: document.body,
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    name: document.querySelector("#name"),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    setScrollbarWidth();
    refs.body.classList.add("no-scroll");
    refs.modal.classList.remove("is-hidden");
    focus(refs.name);
  }

  function closeModal() {
    refs.body.classList.remove("no-scroll");
    refs.modal.classList.add("is-hidden");
  }

  function focus(el) {
    setTimeout(() => {
      el.focus();
    }, 250);
  }

  function setScrollbarWidth() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      scrollbarWidth + "px"
    );
  }
})();
