const carousel = () => {

    const sliderWrapper = document.querySelector('.services-carousel');
    const slides = document.querySelectorAll('.services-elements .col-sm-6.col-md-4 .element.relative')
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    
    /* конфигурация */
    let width = 33.33333; // ширина картинки
    let count = 3; // видимое количество изображений

    let list = sliderWrapper;
    let listElems = slides;

    let position = 0; // положение ленты прокрутки

    arrowLeft.onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + '%';
    };

    arrowRight.onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + '%';
    };

}


export default carousel;