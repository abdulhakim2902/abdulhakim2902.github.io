const menuBar = document.querySelector('.header-right-menu');
let navBar =document.querySelector('.header-right-show')



menuBar.onclick = () => {
    navBar.style.display = 'flex';
};

navBar.onmouseleave = () => {
    navBar.style.display = 'none';
}