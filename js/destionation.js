const destinations = [{
  id: "moon",
  name: "Moon",
  images: "/jpgs/image-moon.png",
  description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  distance: "384,400 km",
  travel: "3 days"
},
{
  id: "mars",
  name: "Mars",
  images: "/jpgs/image-mars.png",
  description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  distance: "225 mil. km",
  travel: "9 months"
},
{
  id: "europa",
  name: "Europa",
  images: "/jpgs/image-europa.png",
  description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  distance: "628 mil. km",
  travel: "3 years"
},
{
  id: "titan",
  name: "Titan",
  images: "/jpgs/image-titan.png",
  description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  distance: "1.6 bil. km",
  travel: "7 years"
}
]


const planetImg = document.querySelector(".planets__img img")
const planetName = document.querySelector('.planet__content h2')
const planetDescription = document.querySelector('.planet__content p')
const planetDistance = document.querySelector('.distance h3')
const planetTravel = document.querySelector('.travel h3')
const moonBtn = document.querySelector('.moon')
const marsBtn = document.querySelector('.mars')
const europaBtn = document.querySelector('.europa')
const titanBtn = document.querySelector('.titan')
const btns = document.querySelectorAll(".btn")
const about = document.querySelector(".planet__buttons")

let index = 0

function displayPlanet() {

planetImg.src = destinations[index].images;
planetName.textContent = destinations[index].name;
planetDescription.textContent = destinations[index].description;
planetDistance.textContent = destinations[index].distance;
planetTravel.textContent = destinations[index].travel;
}

moonBtn.addEventListener('click', () => {
index = 0;
displayPlanet();
})

marsBtn.addEventListener('click', () => {
index = 1;
displayPlanet();
})

europaBtn.addEventListener('click', () => {
index = 2;
displayPlanet();
})

titanBtn.addEventListener('click', () => {
index = 3;
planetImg.src = destinations[index].images;
planetName.textContent = destinations[index].name;
planetDescription.textContent = destinations[index].description;
planetDistance.textContent = destinations[index].distance;
planetTravel.textContent = destinations[index].travel;
displayPlanet();
})

about.addEventListener("click", function (e) {
const id = e.target.dataset.id;
if (id) {
  // remove selected from other buttons
  btns.forEach(function (btn) {
    btn.classList.remove("active-btn");
  });
  e.target.classList.add("active-btn");
}
});