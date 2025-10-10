const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.main-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-active');
  menu.classList.toggle('is-active');
})
