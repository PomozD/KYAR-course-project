//срабатывание функции при клике по элементу и изменение стилей
document.getElementById('iconmenu').onclick = function burger(){
    document.getElementById('containerPhone').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';
    // Создаем медиа условие, проверяющее страницу на ширину не более 768 пикселей
const mediaQueryonIPad = window.matchMedia('(max-width: 768px)')
if (mediaQueryonIPad.matches) {
    document.getElementById('helpingHeadPhoto').style.marginTop = '15px';
    document.getElementById('divForHeadtext1Helping').style.top = '43%';
        }
        // Создаем медиа условие, проверяющее страницу на ширину не более 376 пикселей
const mediaQueryonPhone = window.matchMedia('(max-width: 376px)')
if (mediaQueryonPhone.matches) {
    document.getElementById('helpingHeadPhoto').style.marginTop = '10px';
    document.getElementById('divForHeadtext1Helping').style.top = '31%';
}
    }
//срабатывание функции при клике по элементу и изменение стилей
document.getElementById('CrossPhone').onclick = function crossPhone(){
    document.getElementById('containerPhone').style.display = 'none';
    document.getElementById('navbar').style.display = 'flex';
// Создаем медиа условие, проверяющее страницу на ширину не более 768 пикселей
    const mediaQueryoffIPad = window.matchMedia('(max-width: 768px)')
if (mediaQueryoffIPad.matches) {
    document.getElementById('helpingHeadPhoto').style.marginTop = '0px';
    document.getElementById('divForHeadtext1Helping').style.top = '19%';
}
// Создаем медиа условие, проверяющее страницу на ширину не более 376 пикселей
const mediaQueryoffPhone = window.matchMedia('(max-width: 376px)')
if (mediaQueryoffPhone.matches) {
    document.getElementById('helpingHeadPhoto').style.marginTop = '0px';
    document.getElementById('divForHeadtext1Helping').style.top = '15%';
}
    } 