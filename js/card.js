import { creatListAdvertisement } from './data.js';

const card = document.querySelector('#card').content.querySelector('.popup');

const mapCanvas = document.querySelector('#map-canvas');

const advertisements = creatListAdvertisement();

const offerTypeInRU = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderFuture = (cardElement, features) => {
  const popupFeature = cardElement.querySelector('.popup__features');
  popupFeature.innerHTML = '';
  if (features && features.length) {
    features.forEach((item) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${item}`);
      popupFeature.append(featureItem);
    });
  }
};

const renderPhoto = (cardElement, photos) => {
  const popupPhotos = cardElement.querySelector('.popup__photos');
  const popupPhoto = cardElement.querySelector('.popup__photo');
  if (!(photos && photos.length)) {
    return popupPhotos.remove();
  }
  photos.forEach((photo) => {
    const photoTemp = popupPhoto.cloneNode(true);
    photoTemp.setAttribute('src', photo);
    popupPhotos.append(photoTemp);
  });
  popupPhoto.remove();
};

const renderDiscription = (cardElement, description) => {
  const popupDescription = cardElement.querySelector('.popup__description');
  if (!(description && description.length)) {
    return popupDescription.remove();
  }
  popupDescription.textContent = description;
};

const renderAvatar = (cardElement, avatar) => {
  const popupAvatar = cardElement.querySelector('.popup__avatar');
  if (avatar) {
    return popupAvatar.setAttribute('src', avatar);
  }
  popupAvatar.remove();
};

const renderTitle = (cardElement, title) => {
  const popupTitle = cardElement.querySelector('.popup__title');
  if (!title) {
    return popupTitle.remove();
  }
  popupTitle.textContent = title;
};

const renderAddress = (cardElement, address) => {
  const popupAddress = cardElement.querySelector('.popup__text--address');
  if (!address) {
    return popupAddress.remove();
  }
  popupAddress.textContent = address;
};

const renderPrice = (cardElement, price) => {
  const popupPrice = cardElement.querySelector('.popup__text--price');
  if (!price) {
    return popupPrice.remove();
  }
  popupPrice.firstChild.textContent = `${price} `;
};

const renderType = (cardElement, type) => {
  const popupType = cardElement.querySelector('.popup__type');
  if (!type) {
    return popupType.remove();
  }
  popupType.textContent = offerTypeInRU[type];
};
const renderCapacity = (cardElement, rooms, guests) => {
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  if (!(rooms && guests)) {
    return popupCapacity.remove();
  }
  popupCapacity.textContent = `${rooms} комнаты для ${guests} гостей`;
};
const renderTime = (cardElement, checkin, checkout) => {
  const popupTime = cardElement.querySelector('.popup__text--time');
  if (!(checkin && checkout)) {
    return popupTime.remove();
  }
  popupTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
};

const creatAdvertisement = ({ offer, author }) => {
  const cardElement = card.cloneNode(true);
  renderAvatar(cardElement, author.avatar);
  renderTitle(cardElement, offer.title);
  renderAddress(cardElement, offer.address);
  renderPrice(cardElement, offer.price);
  renderType(cardElement, offer.type);
  renderCapacity(cardElement, offer.rooms, offer.guests);
  renderTime(cardElement, offer.checkin, offer.checkout);

  renderFuture(cardElement, offer.features);
  renderPhoto(cardElement, offer.photos);
  renderDiscription(cardElement, offer.description);
  return cardElement;
};

mapCanvas.append(creatAdvertisement(advertisements[0]));
