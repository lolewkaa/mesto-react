import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupWithImage from './PopupWithImage';
function App() {
  const [selectedCard, setSelectedCard] = React.useState({})

  const [isImagePopupOpen, setisImagePopupOpen] = React.useState(false)
  function handleCardClick(card) {
    setisImagePopupOpen(true)
    setSelectedCard(card)
  }
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false)
  function handleEditProfileClick() {
    setIsProfilePopupOpen(true)
  }
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setIsProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setisImagePopupOpen(false)
  }
  
  return (
    <div className="page">
    <Header/>
    <Main
    onEditAvatar={handleEditAvatarClick}
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onCardClick={handleCardClick}
    
    />
    <Footer/>
    <EditProfilePopup
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    />
    <EditAvatarPopup
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    />
    <AddPlacePopup
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    />
    <PopupWithImage
    card={selectedCard}
    isOpen={isImagePopupOpen}
    onClose={closeAllPopups}
    />
      {/* <div className="popup popup_type_user">
        <div className="popup__container">
          <form className="form form_type_profile" name="profile" noValidate>
            <button className="popup__button popup__button_type_user" type="reset">
              <img className="popup__img-close" src="<%=require('./images/CloseIcon.svg')%>" alt="Кнопка 'Закрыть'" />
            </button>
            <h2 className="form__title">Редактировать профиль</h2>
            <input id="name-input" type="text" className="form__item form__item_type_name" minLength="2" maxLength="40" value="" name="name" required placeholder="Введите ваше имя" />
            <span className="form__item-error name-input-error"></span>
            <input id="job-input" type="text" className="form__item form__item_type_job" minLength="2" maxLength="200" value="" name="about" required placeholder="Расскажите, чем занимаетесь" />
            <span className="form__item-error job-input-error"></span>
            <fieldset className="form__handlers">
              <button className="form__button-save form__submit" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div> */}
      {/* <div className="popup popup_type_place">
        <div className="popup__container">
          <form className="form form_type_place" name="place">
            <button className="popup__button popup__button_type_place" type="reset">
              <img className="popup__img-close" src="<%=require('./images/CloseIcon.svg')%>" alt="Кнопка 'Закрыть'" />
            </button>
            <h2 className="form__title">Новое место</h2>
            <input id="card-input" type="text" className="form__item form__item_type_place" value="" name="place" minLength="2" maxLength="30" placeholder="Описание" required />
            <span className="form__item-error card-input-error"></span>
            <input id="link-input" type="url" className="form__item form__item_type_link" value="" name="link" placeholder="Введите ссылку на изображение" required />
            <span className="form__item-error link-input-error"></span>
            <fieldset className="form__handlers">
              <button className="form__button-save form__submit" type="submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </div> */}
      {/* {/* <div className="popup popup_type_image">
        <div className="popup__container-image">
          <button className="popup__button popup__button_type_image" type="reset">
            <img className="popup__img-close" src="<%=require('./images/CloseIcon.svg')%>" alt="Кнопка 'Закрыть'" />
          </button>
          <img className="popup__image" src="#" alt="Фотография пользователя" />
          <h2 className="popup__title"></h2>
        </div>
      </div><div className="popup popup_type_delete">
        <div className="popup__container">
          <div className="form">
            <button className="popup__button popup__button_type_delete" type="reset">
              <img className="popup__img-close" src="<%=require('./images/CloseIcon.svg')%>" alt="Кнопка 'Закрыть'" />
            </button>
            <h2 className="form__title">Вы уверены?</h2>
            <fieldset className="form__handlers">
              <button className="form__button-save form__submit" type="submit">Да</button>
            </fieldset>
          </div>
        </div> 
      </div> */}
      {/* <div className="popup popup_type_avatar">
        <div className="popup__container">
          <form className="form form_type_avatar" name="avatar">
            <button className="popup__button popup__button_type_avatar" type="reset">
              <img className="popup__img-close" src="<%=require('./images/CloseIcon.svg')%>" alt="Кнопка 'Закрыть'" />
            </button>
            <h2 className="form__title">Обновить аватар</h2>
            <input id="avatar-input" type="url" className="form__item form__item_type_avatar" value="" name="avatar" placeholder="Ссылка на аватар" required />
            <span className="form__item-error avatar-input-error"></span>
            <fieldset className="form__handlers">
              <button className="form__button-save form__submit" type="submit">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div> */}
      </div>
  );
}

export default App;
