const btnMenu = document.querySelector('.btn-menu');
const menuMobile = document.querySelector('.menu-mobile');

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();

  menuMobile.classList.toggle('invisible');
})