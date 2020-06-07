'use strict';
var avatar = ['img/avatars/user01.png', 'img/avatar/user02.png', 'img/avatar/user03.png', 'img/avatar/user04.png',
  'img/avatar/user05.png', 'img/avatar/user06.png', 'img/avatar/user07.png', 'img/avatar/user08.png'];
var title = ['Милая квартирка', 'Уютная квартира в центре', 'Ваш оазис в центре города', 'Квартира вашей мечты',
  'Все, о чем вы мечтали', 'Комфорт и уют за небольшие деньги', 'Вид из окна вас сразит', 'Экономно, уютно'];
var address = ['600, 350', '200, 300', '100, 300', '400, 200', '500, 400', '200, 400', '300, 600', '600, 100'];
var price = [5000, 2000, 6000, 8000, 7500, 30000, 7500, 100000];
var type = ['palace', 'flat', 'bungalo', 'house'];
var rooms = [1, 2, 3, 100];
var guests = [3, 2, 1, 0];
var checkin = ['12.00', '13.00', '14.00'];
var checkout = ['12.00', '13.00', '14.00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var description = ['Удобная квартира в центре', 'Большая уютная квартира', 'Небольшая уютная квартира в Токио',
  'Удобное местоположение', 'В самом центре Токио', 'Прекрасный вид из окна', 'Просторная современная квартира',
  'Небольшой уютный уголок'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel4.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel5.jpg', 'http://o0.github.io/assets/images/tokyo/hotel6.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel7.jpg', 'http://o0.github.io/assets/images/tokyo/hotel8.jpg'];
var loco = ['50, 140', '100, 260', '90, 400', '250, 500', '50, 400', '300, 450', ' 220, 350', '320, 180'];
var ads = [
  {
    author: avatar[0],
    offer: [title[0], address[0], price[0], type[0], rooms[0], guests[0], checkin[0], checkout[0],
      features[[0, 1, 2]], description[0], photos[0], loco[0]]
  },
  {
    author: avatar[1],
    offer: [title[1], address[1], price[1], type[1], rooms[2], guests[2], checkin[1], checkout[1],
      features[[0, 1, 2, 4, 5]], description[1], photos[1], loco[1]]
  },
  {
    author: avatar[2],
    offer: [title[2], address[2], price[2], type[3], rooms[1], guests[1], checkin[2], checkout[2],
      features[[0, 1, 2, 3, 4]], description[2], photos[2], loco[2]]
  },
  {
    author: avatar[3],
    offer: [title[3], address[3], price[3], type[0], rooms[0], guests[0], checkin[1], checkout[2],
      features[[0, 1, 2, 5]], description[3], photos[3], loco[3]]
  },
  {
    author: avatar[4],
    offer: [title[4], address[4], price[4], type[1], rooms[2], guests[2], checkin[0], checkout[2],
      features[[0, 1, 2]], description[4], photos[4], loco[4]]
  },
  {
    author: avatar[5],
    offer: [title[5], address[5], price[5], type[2], rooms[1], guests[1], checkin[0], checkout[0],
      features[[1, 2, 4, 5]], description[5], photos[5], loco[5]]
  },
  {
    author: avatar[6],
    offer: [title[6], address[6], price[6], type[0], rooms[1], guests[0], checkin[1], checkout[0],
      features[[0, 1, 2, 3]], description[6], photos[6], loco[6]]
  },
  {
    author: avatar[7],
    offer: [title[7], address[7], price[7], type[2], rooms[0], guests[2], checkin[2], checkout[2],
      features[[0, 1, 2, 3]], description[7], photos[7], loco[7]]
  },
];

var adsMap = document.querySelector('.map');
adsMap.classList.remove('map--faded');

var mapPins = document.querySelector('.map__pins');
var pin = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

var renderAd = function (ad) {
  var pinElement = pin.cloneNode(true);
  pinElement.querySelector('.map__pin').textContent = ad.name;
  pinElement.querySelector('.map__pin').style = ad.offer[12];
  pinElement.querySelector('.map__pin').img = ad.author;
  pinElement.querySelector('.map__pin').alt = ad.offer[1];
  return pinElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < ads.length; i++) {
  fragment.appendChild(renderAd(ads[i]));
}
mapPins.appendChild(fragment);
