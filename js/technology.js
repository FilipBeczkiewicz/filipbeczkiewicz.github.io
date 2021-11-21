const technology = [{
    name: "Launch vehicle",
    imagesMobile: "/jpgs/image-launch-vehicle-landscape.jpg" ,
    imagesDesktop: "/jpgs/image-launch-vehicle-portrait.jpg",
    description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    name: "Spaceport",
    imagesMobile: "/jpgs/image-spaceport-landscape.jpg",
    imagesDesktop: "/jpgs/image-spaceport-portrait.jpg",
    description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    name: "Space capsule",
    imagesMobile: "/jpgs/image-space-capsule-landscape.jpg",
    imagesDesktop: "/jpgs/image-space-capsule-portrait.jpg",
    description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  },
]

const img = document.querySelector('.technology__img img')
const imgContainer = document.querySelector('.technology__img')
const naame = document.querySelector('.technology__content h3')
const desc = document.querySelector('.technology__content .content__desc')
const technologyBtn1 = document.querySelector('#technology__1')
const technologyBtn2 = document.querySelector('#technology__2')
const technologyBtn3 = document.querySelector('#technology__3')
const about = document.querySelector('.technology__btns')
const btns = document.querySelectorAll('.technology__btn')
let index = 0;

let windowWidth = window.screen.width;



function displayRocket() {
  img.src = technology[index].imagesDesktop;
  naame.textContent = technology[index].name;
  desc.textContent = technology[index].description;
  
  if(windowWidth < 1400) {
    img.src = technology[index].imagesMobile
  } else {
    img.src = technology[index].imagesDesktop;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  index = 0;
  displayRocket()
})

technologyBtn1.addEventListener('click', () => {
  index = 0
  displayRocket()
})

technologyBtn2.addEventListener('click', () => {
  index = 1;
  displayRocket()
})

technologyBtn3.addEventListener('click', () => {
  index = 2
  displayRocket()
})

about.addEventListener("click", function (e) {
  // remove selected from other buttons

  if (e.target.id) {
    btns.forEach(function (btn) {
      btn.classList.remove("technology__btn-active");
    });
    e.target.classList.add("technology__btn-active");
  }
});


