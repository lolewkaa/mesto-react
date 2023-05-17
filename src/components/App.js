import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { api } from "../utils/Api";
import {CurrentUserContext} from '../contexts/CurrentUserContext'



function App() {

  function handleAddPlaceSubmit(newCard) {
    api.postNewCard(newCard).then((res) => {
      setCards([res, ...cards]);
      closeAllPopups()
    }).catch((error) => console.log(`Ошибка: ${error}`));
  }
  
  function handleUpdateAvatar(avatar) {
    api.changeAvatar(avatar).then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    }).catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleUpdateUser(user) {
    api.changeUserInfo(user).then((res) => {
      setCurrentUser(res)
      closeAllPopups()
    }).catch((error) => console.log(`Ошибка: ${error}`));
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLike(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((error) => console.log(`Ошибка: ${error}`));
}


  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([dataUser, resCard]) => {
 setCurrentUser(dataUser)
 setCards(resCard)
}, )
.catch((error) => console.log(`Ошибка: ${error}`));
  },[])

  const [selectedCard, setSelectedCard] = React.useState({})

   function handleCardDelete(card) {
    api.deleteCard(card._id).then(()=>{
      setCards(cards => cards.filter((c) => c._id !== card._id))
    }).catch((error) => console.log(`Ошибка: ${error}`));
   }

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
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
    <Header/>
    <Main
    onEditAvatar={handleEditAvatarClick}
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onCardClick={handleCardClick}
    onCardLike={handleCardLike}
    onCardDelete={handleCardDelete}
    cards={cards}
    
    />
    <Footer/>
    <EditProfilePopup
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    onUpdateUser={handleUpdateUser}
    />
    <EditAvatarPopup
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    onUpdateAvatar={handleUpdateAvatar}
    />
    <AddPlacePopup
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    onAddPlace={handleAddPlaceSubmit}
    />
    <ImagePopup
    card={selectedCard}
    isOpen={isImagePopupOpen}
    onClose={closeAllPopups}
    />
     
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
