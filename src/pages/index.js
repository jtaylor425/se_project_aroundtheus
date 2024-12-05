import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { initialCards, config } from "../utils/Constants.js";

/*Variables*/

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const profileTitleInput = document.querySelector("#title-input");
const profileDescriptionInput = document.querySelector("#description-input");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const profileEditForm = profileEditModal.querySelector(".modal__form");

/*Linked Classes*/
const popupWithEditProfileForm = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit,
  console.log(handleProfileEditSubmit)
);

const popupWithAddCardForm = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);

profileEditBtn.addEventListener("click", () => {
  popupWithEditProfileForm.open();
});

addNewCardButton.addEventListener("click", () => {
  popupWithAddCardForm.open();
});

const popupWithImage = new PopupWithImage("#preview-image-modal");

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".cards__list"
);
section.renderItems();

const userInfo = new UserInfo({
  nameElement: ".profile__title",
  jobElement: ".profile__description",
});

popupWithEditProfileForm.setEventListeners();
popupWithAddCardForm.setEventListeners();
popupWithImage.setEventListeners();

function handleImageClick(data) {
  popupWithImage.open({ name: data.name, link: data.link });
}

function getCardElement(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

function renderCard(cardData) {
  console.log(cardData);
  const cardElement = getCardElement(cardData);
  section.addItem(cardElement);
}

/*Event Handlers*/

function handleProfileEditSubmit({ title, description }) {
  console.log(title, description);
  userInfo.setUserInfo({
    name: title,
    description: description,
  });
  console.log(userInfo.getUserInfo());
  popupWithEditProfileForm.close();
}

function handleAddCardFormSubmit(inputValue) {
  const cardData = {
    name: inputValue.title,
    link: inputValue.url,
  };
  renderCard(cardData);
  addCardFormElement.reset();
  addFormValidator.disableButton();
  popupWithAddCardForm.close();
}

//Validation

const editFormValidator = new FormValidator(config, profileEditForm);

const addFormValidator = new FormValidator(config, addCardFormElement);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
