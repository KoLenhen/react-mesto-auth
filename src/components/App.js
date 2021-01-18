import React, { useEffect, useState, useCallback } from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import InfoTooltip from './InfoTooltip';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import { checkToken } from '../utils/auth';
import * as auth from '../utils/auth.js';



function App() {
  const history = useHistory();
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isCardPopupOpen, setCardSPopupState] = useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = useState(false);
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [isUserSaving, setIsUserSaving] = useState(false);
  const [isCardDeleting, setIsCardDeleting] = useState(false);
  const [isPlaceAdding, setIsPlaceAdding] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [cardToDel, setCardToDel] = useState({});
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [tooltipType, setTooltipType] = useState('');
  const [currentUserEmail, setCurrentUserEmail] = useState('');

  useEffect(() => {
    setIsCardsLoading(true);
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => { alert(error) })
      .finally(() => {
        setIsCardsLoading(false);
      });
  }, []);

  useEffect(() => {
    api.getInitialProfile()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => { alert(error) });
  }, []);

  // popup closing by ESC
  useEffect(() => {
    function handleEscClose(event) {
      if (event.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  // popup closing by overlay
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupState(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupState(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setCardSPopupState(!isCardPopupOpen);
    setSelectedCard(card);
  }

  function handleCardDeleteReq(card) {
    setCardToDel(card);
    setIsDelCardPopupOpen(!isDelCardPopupOpen);
  }

  function handleTooltipOpen() {
    setIsInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  }

  function closeAllPopups() {
    setEditProfilePopupState(false);
    setAddPlacePopupState(false);
    setEditAvatarPopupState(false);
    setCardSPopupState(false);
    setIsDelCardPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(data) {
    setIsUserSaving(true);
    api.setProfile(data)
      .then(
        (data) => {
          setCurrentUser(data);
          closeAllPopups();
        })
      .catch((error) => { alert(error) })
      .finally(() => {
        setIsUserSaving(false);
      });
  }

  function handleUpdateAvatar(data) {
    api.setProfileAvatar(data)
      .then(
        (data) => {
          setCurrentUser(data);
          closeAllPopups();
        })
      .catch((error) => { alert(error) });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((error) => { alert(error) });
  }

  function handleAddPlaceSubmit(data) {
    setIsPlaceAdding(true);
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => { alert(error) })
      .finally(() => {
        setIsPlaceAdding(false);
      });
  }

  function handleCardDelete(event) {
    event.preventDefault();
    setIsCardDeleting(true);
    api.delCard(cardToDel._id)
      .then(() => {
        const newCards = cards.filter((c) => c !== cardToDel);
        setCards(newCards);
        setIsDelCardPopupOpen(false);
      })
      .catch((error) => { alert(error) })
      .finally(() => {
        setIsCardDeleting(false);
      });
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/sign-in');
  }

  const handleTokenCheck = useCallback(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        checkToken(jwt)
          .then((res) => {
            if (res) {
              setCurrentUserEmail(res.data.email);
              setLoggedIn(true);
              history.push('/');
            }
          })
      }
    }
  },
    [history, setLoggedIn, setCurrentUserEmail]
  )

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token) {
      handleTokenCheck();
    }
  }, [handleTokenCheck]);

  function handleLogin(values) {
    if (!values.email || !values.password) {
      return;
    }
    auth.authorize(values)
      .then((data) => {
        if (data) {
          setLoggedIn(true);
          history.push('/');
        }
      })
      .catch(err => console.log(err));
  }

  function handleRegister(values, resetForm) {
    auth.register(values)
      .then((res) => {
        if (res) {
          handleTooltipOpen();
          setTooltipMessage('Вы успешно зарегистрировались!');
          setTooltipType('positive');
          history.push('/sign-in');
          resetForm();
        }
        else {
          setTooltipMessage('Что-то пошло не так! Попробуйте ещё раз.');
          setTooltipType('negative');
          handleTooltipOpen();
        }
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Header
        loggedIn={loggedIn}
        logOut={handleLogOut}
        userEmail={currentUserEmail}
      />
      <Switch>
        <Route path="/sign-up">
          <Register
            onTooltipOpen={handleTooltipOpen}
            message={setTooltipMessage}
            type={setTooltipType}
            handleRegister={handleRegister}
          />
        </Route>
        <Route path="/sign-in">
          <Login
            handleLogin={handleLogin}
          />
        </Route>
        <ProtectedRoute
          path="/"
          component={Main}
          loggedIn={loggedIn}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onImgClick={handleCardClick}
          isCardsLoading={isCardsLoading}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteReq}
          cards={cards}
        />
      </Switch>
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        onClick={handleOverlayClick}
        isUserSaving={isUserSaving}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        onClick={handleOverlayClick}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        onClick={handleOverlayClick}
        isPlaceAdding={isPlaceAdding}
      />
      <DeleteCardPopup
        isOpen={isDelCardPopupOpen}
        onClose={closeAllPopups}
        handleSubmit={handleCardDelete}
        onClick={handleOverlayClick}
        isCardDeleting={isCardDeleting}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isCardPopupOpen}
        onClose={closeAllPopups}
        onClick={handleOverlayClick}
      />
      <InfoTooltip
        type={tooltipType}
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        onClick={handleOverlayClick}
        message={tooltipMessage}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;

