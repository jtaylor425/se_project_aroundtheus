class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
  }
  open(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener("keyup", closeModalOnEscape);
    modal.addEventListener("click", closeModalOnClick);
  }

  close(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener("keyup", closeModalOnEscape);
    modal.removeEventListener("click", closeModalOnClick);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      const modal = document.querySelector(".modal_opened");
      closeModal(modal);
    }
  }

  setEventListeners(e) {
    if (e.target.classList.contains("modal_opened")) {
      closeModal(e.target);
    }
  }
}
