const btn = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');

btn.addEventListener('click', () => {
   popupWrapper.style.display = 'block';
});


popupClose.addEventListener('click', () => {
    popupWrapper.style.display = 'none'; 
})

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none'; 
})