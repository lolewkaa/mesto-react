import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose}) {
    return(
        <PopupWithForm 
        title='Новое место'
        name='place'
        isOpen={isOpen}
        onClose={onClose}
        textSubmit='Создать'
        >
       <input 
       id="card-input" 
       type="text" 
       className="form__item form__item_type_place"  
       name="place" 
       minLength="2" 
       maxLength="30" 
       placeholder="Описание" 
       required />
            <span className="form__item-error card-input-error"></span>
            <input 
            id="link-input" 
            type="url" 
            className="form__item form__item_type_link" 
            name="link" 
            placeholder="Введите ссылку на изображение" 
            required />
            <span className="form__item-error link-input-error"></span>
        </PopupWithForm>
    )
}