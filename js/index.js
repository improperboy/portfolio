
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
