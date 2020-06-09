'use strict';

var titles = ['Милая квартирка', 'Уютная квартира в центре', 'Ваш оазис в центре города', 'Квартира вашей мечты',
  'Все, о чем вы мечтали', 'Комфорт и уют за небольшие деньги', 'Вид из окна вас сразит', 'Экономно, уютно'];
var prices = [5000, 2000, 6000, 8000, 7500, 30000, 7500, 100000];
var types = ['palace', 'flat', 'bungalo', 'house'];
var rooms = [1, 2, 3, 100];
var guests = [3, 2, 1, 0];
var checkin = ['12.00', '13.00', '14.00'];
var checkout = ['12.00', '13.00', '14.00'];
var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var descriptions = ['Удобная квартира в центре', 'Большая уютная квартира', 'Небольшая уютная квартира в Токио',
  'Удобное местоположение', 'В самом центре Токио', 'Прекрасный вид из окна', 'Просторная современная квартира',
  'Небольшой уютный уголок'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var ads = [ for(var i = 0; i < 8; i++) {
  var ad = {
    author: 'img/avatar/user0' + i + '.png',
    title: getRandomArrValue(titles),
    price: getRandomNumber(prices),
    address: x(getRandomNumber()), y(getRandomNumber(130,160)),
    type: getRandomArrValue(types),
    room: getRandomNumber(rooms),
    guest: getRandomNumber(guests),
    checkin: getRandomArrValue(checkin),
    checkout: getRandomArrValue(checkout),
    features: getRandomArrValue(features),
    description: getRandomArrValue(descriptions),
    photo: getRandomArrValue(photos),

  }
  adsData.push(ad);
}
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
  pinElement.querySelector('.map__pin').style = ad.address(x + 20, y - 44);
  pinElement.querySelector('.map__pin').img = ad.author;
  pinElement.querySelector('.map__pin').alt = ad.title;
  return pinElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < ads.length; i++) {
  fragment.appendChild(renderAd(ads[i]));
}
mapPins.appendChild(fragment);
