import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    const cardDeleteButtonClassName = (
        `location__trash ${isOwn ? 'location__trash_visible' : 'location__trash_invisible'}`
    );

    const cardLikeButtonClassName = (
        `location__rate ${isLiked ? 'location__rate_marked' : ''}`
    );

    function handleImgClick() {
        props.onImgClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card);
    }


    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        <div className="location">
            <img
                onClick={handleImgClick}            
                src={String(props.card.link)}
                alt={`Фото ${props.card.name}`}
                className="location__image" />
            <button
                type="button"
                onClick={handleDeleteClick}
                className={cardDeleteButtonClassName}>
            </button>
            <div className="location__info">
                <h2 className="location__name">
                    {props.card.name}
                </h2>
                <div className="location__wrap">
                    <button
                        type="button"
                        onClick={handleLikeClick}
                        className={cardLikeButtonClassName}>
                    </button>
                    <span className="location__likes">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;

//https://images.unsplash.com/photo-1602112711460-9431b0cb6d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80