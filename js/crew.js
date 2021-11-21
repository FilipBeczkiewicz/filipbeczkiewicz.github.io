const btn = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__links');
btn.addEventListener('click', () => {
  menu.classList.toggle('nav__links-active')
  btn.classList.toggle('nav__hamburger-active')
})

const crew = [{
    id: 'douglas',
    name: 'Douglas Hurley',
    images: "/jpgs/image-douglas-hurley.png",
    role: 'Commander',
    bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. one of the best enginerr.'
  },
  {
    id: 'mark',
    name: 'Mark Worth',
    images: "/jpgs/image-mark-shuttleworth.png",
    role: 'Mission Specialist',
    bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    id: 'victor',
    name: 'Victor Glover',
    images: "/jpgs/image-victor-glover.png",
    role: 'Pilot',
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    id: 'anousheh',
    name: "Anousheh Ansari",
    images: "/jpgs/image-anousheh-ansari.png",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

const img = document.querySelector('.crew__img-box img')
const job = document.querySelector('.crew__content-staff .job')
const naame = document.querySelector('.crew__content-staff h3')
const desc = document.querySelector('.crew__content-staff .desc')
const douglas = document.querySelector('#douglas')
const mark = document.querySelector('#mark')
const victor = document.querySelector('#victor')
const anousheh = document.querySelector('#anousheh')
const about = document.querySelector('.crew__content-buttons')
const btns = document.querySelectorAll('.crew__content-buttons span')

let index = 3;

document.addEventListener('DOMContentLoaded', () => {
  displayPerson()
})


function displayPerson() {
  img.src = crew[index].images;
  job.textContent = crew[index].role;
  naame.textContent = crew[index].name;
  desc.textContent = crew[index].bio;
}

douglas.addEventListener('click', () => {
  index = 0;
  displayPerson()
})

mark.addEventListener('click', () => {
  index = 1;
  displayPerson()
})

victor.addEventListener('click', () => {
  index = 2;
  displayPerson()
})

anousheh.addEventListener('click', () => {
  index = 3;
  displayPerson()
})

about.addEventListener("click", function (e) {
  // remove selected from other buttons

  if (e.target.id) {
    btns.forEach(function (btn) {
      btn.classList.remove("crew__btn-active");
    });
    e.target.classList.add("crew__btn-active");
  }
});