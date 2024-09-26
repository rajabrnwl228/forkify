'use strict'
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];
        console.log(coords);

        const map = L.map('map').setView(coords, 10);

        // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

            L.marker(coords).addTo(map)
            .bindPopup({
                maxwidth: 250,
                minwidth: 100,
                autoclose: false,
                closeOnClick: false,
            }).setPopupContent('Main Branch')
            .openPopup();
        
        map.on('click', function (mapEvent) {
            console.log(mapEvent);
            const { lat, lng } = mapEvent.latlng;
            L.marker([lat,lng]).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.').openPopup();
        });
        
        
        
        
    }, function () {
        alert('Could not get the position!');
    })
}

const recentProgram = [];
class recent {
  #desc;
  #location;
  #date;
  constructor(desc, location, date) {
    this.#desc = desc;
    this.#location = location;
    this.#date = date;
  }
  _getDescription() {
    return this.#desc;
  }
  _getLocation() {
    return this.#location;
    
  }
  _getDate() {
    return this.#date;
  }
}
const recent1 = new recent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, commodi dolore temporeducimus blanditiis', 'sector-2, Dhanbad, Jharkhand', '12 May 2024');
const recent2 = new recent('Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, commodi dolore temporeducimus blanditiis', 'sector-5, Bokaro, Jharkhand', '12 April 2024');
recentProgram.push(recent1);
recentProgram.push(recent2);
recentProgram.forEach(program => console.log(program));