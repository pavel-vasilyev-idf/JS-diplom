const carousel = () => {

    const sliderWrapper = document.querySelector('.services-carousel');
    const slides = document.querySelectorAll('.services-elements .col-sm-6.col-md-4 .element.relative')
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');


    /* конфигурация */
    let width = 150; // ширина картинки
    let count = 3; // видимое количество изображений

    let position = 0; // положение ленты прокрутки

    arrowLeft.addEventListener('click', () => {
      // сдвиг влево
      position += (width * count);
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      console.log('position: ', position);
      sliderWrapper.style.marginLeft = position + 'px';
    })

    arrowRight.addEventListener('click', () => {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (slides.length - count));
      sliderWrapper.style.marginLeft = position + 'px';
    })


}


export default carousel;