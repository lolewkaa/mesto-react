import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({isOpen, onClose}) {
return(
    <PopupWithForm 
      title='Обновить аватар'
      name='avatar'
      isOpen={isOpen}
      onClose={onClose}
      textSubmit='Сохранить'
      >
    <input 
      id="avatar-input"
      type="url" 
      className="form__item form__item_type_avatar" 
      name="avatar" 
      placeholder="Ссылка на аватар" 
      required />
    <span className="form__item-error avatar-input-error"></span>

    
    </PopupWithForm>
)
}
