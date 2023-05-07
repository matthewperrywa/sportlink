import React from 'react';
import ReactDOM from 'react-dom/client';
import App2 from "./App2"
import L from 'leaflet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

function insertGame(title, level, location, day, time, description){
  document.getElementById('xyz').innerHTML += '<div class="card"><h3>' + title + '</h3><p>Who: ' + level + '<br>Where: ' + location + '<br>When: ' + day + ' @ ' + time + '<br>What: ' + description + '<br><br>Current Attendance: 1</p><button class="btn2">Hosting</button></div>';
}

class Game {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor (coords, title, skill, date, time){
      this.coords = coords;
      this.title = title;
      this.skill = skill;
      this.date = date;
      this.time = time;
  }
}

const game1 = new Game([39, -12], 'Basketball', 'Competitive', 10, 10);
console.log(game1);

const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit__btn');
const inputTitle = document.querySelector('.form__input--title');
const inputSkill = document.querySelector('.form__input--skill');
const inputDate = document.querySelector('.form__input--date');
const inputTime = document.querySelector('.form__input--time');
const inputLocation = document.querySelector('.form__input--location');
const inputDescription = document.querySelector('.form__input--location');


class App {
  #map;
  #mapEvent;

  constructor(){
      this.getPosition();
      submitBtn.addEventListener('click', this.newGame.bind(this));
  }

  getPosition() {
      if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.loadMap.bind(this), function(){
            alert('Could not retrieve position')
          })
      }
  }

  loadMap(pos) {
          console.log(pos);
          const {latitude} = pos.coords;
          const {longitude} = pos.coords;
          console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
  
          const coords = [latitude, longitude];
    
          this.#map = L.map('map').setView(coords, 10);
    
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.#map);
  
          //handling clicks on map
          this.#map.on('click', this.showForm.bind(this))
  }

  showForm(mapE) {
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputTitle.focus();
  }

  newGame(e) {
      e.preventDefault();

      //Get data from form
      const skill = inputSkill.options[inputSkill.selectedIndex].value;
      const title = inputTitle.value;
      const date = inputDate.value;
      const time = inputTime.value;
      const location = inputLocation.value;
      const description = inputDescription.value
      const {lat, lng} = this.#mapEvent.latlng;
      console.log(title, skill, date, time, location, description);


      //Check if data is valid

      //Add new object to game array

      //Render game on map as marker
      L.marker([lat, lng])
          .addTo(this.#map)
          .bindPopup(
              L.popup({
              maxWidth: 100,
              minWidth: 50,
              autoClose: false,
              closeOnClick: false, 
              }))
          .setPopupContent(inputTitle.value) 
          .openPopup();

      //Render game on list 
      
      insertGame(inputTitle.value, inputSkill.value, inputLocation.value, inputDate.value, inputTime.value, inputDescription.value)

  }
}

const app = new App();

// submitBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(inputTitle.value ,inputSkill.value ,inputDate.value ,inputTime.value);
// })

const sectionHost = document.querySelector('#section--host');
sectionHost.addEventListener('click', function(e){
  e.preventDefault();
  const hostCoords = sectionHost.getBoundingClientRect();

  // //scrolling
  // window.scrollTo(
  //   hostCoords.left + window.pageXOffset, 
  //   hostCoords.top + window.pageYOffset
  //   );

    window.scrollTo({
      left: hostCoords.left + window.pageXOffset, 
      top: hostCoords.top + window.pageYOffset,
      behavior: 'smooth',
    })
})

const sectionJoin = document.querySelector('#section--join');
sectionJoin.addEventListener('click', function(e){
  e.preventDefault();
  const joinCoords = sectionJoin.getBoundingClientRect();

  window.scrollTo({
    left: joinCoords.left + window.pageXOffset, 
    top: joinCoords.top + window.pageYOffset,
    behavior: 'smooth',
  })
})

const sectionAbout = document.querySelector('#section--about');
sectionAbout.addEventListener('click', function(e){
  e.preventDefault();
  const aboutCoords = sectionAbout.getBoundingClientRect();

  window.scrollTo({
    left: aboutCoords.left + window.pageXOffset, 
    top: aboutCoords.top + window.pageYOffset,
    behavior: 'smooth',
  })
})

const sectionEndorsement = document.querySelector('#section--endorsement');
sectionEndorsement.addEventListener('click', function(e){
  e.preventDefault();
  const endorsementCoords = sectionEndorsement.getBoundingClientRect();

  window.scrollTo({
    left: endorsementCoords.left + window.pageXOffset, 
    top: endorsementCoords.bottom + window.pageYOffset,
    behavior: 'smooth',
  })
})