// nav function
const btn = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__links');
btn.addEventListener('click', () => {
  menu.classList.toggle('nav__links-active')
  btn.classList.toggle('nav__hamburger-active')
})








