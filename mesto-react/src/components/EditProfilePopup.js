import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({isOpen, onClose}) {
    return(
        <PopupWithForm 
        title='Редактировать профиль'
        name='user'
        isOpen={isOpen}
        onClose={onClose}
        textSubmit='Сохранить'
        >
        <input 
        id="name-input" 
        type="text" 
        className="form__item form__item_type_name" 
        minLength="2" 
        maxLength="40" 
        name="name" 
        required 
        placeholder="Введите ваше имя" />
        <span className="form__item-error name-input-error"></span>
        <input 
        id="job-input" 
        type="text" 
        className="form__item form__item_type_job" 
        minLength="2" 
        maxLength="200" 
        name="about" 
        required 
        placeholder="Расскажите, чем занимаетесь" />
        <span className="form__item-error job-input-error"></span>
           
        </PopupWithForm>
    )
}