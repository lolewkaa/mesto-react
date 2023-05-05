import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';




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
    <ImagePopup
    card={selectedCard}
    isOpen={isImagePopupOpen}
    onClose={closeAllPopups}
    />
     
      </div>
  );
}

export default App;
