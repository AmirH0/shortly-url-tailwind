const bar = document.querySelector('.menu_bar');
const menu = document.getElementById('menu');



bar.addEventListener('click', () => {
    menu.classList.toggle('hidden'),
    menu.classList.toggle('flex')
})