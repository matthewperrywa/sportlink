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

const game1 = new Game([39, -12], 'Basketball', 'Competative', 10, 10);
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
        const skill = inputSkill.value;
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
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false, 
                }))
            .setPopupContent('Currently Hosted Game') 
            .openPopup();

        //Render game on list 

        //clear input string
        inputTitle.value = inputTime.value = inputDate.value = inputSkill.value = '';
    }
}

const app = new App();

// submitBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(inputTitle.value ,inputSkill.value ,inputDate.value ,inputTime.value);
// })

