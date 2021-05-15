const carousel = () => {

    const sliderWrapper = document.querySelector('.services-carousel');
    const slides = document.querySelectorAll('.services-elements .col-sm-6.col-md-4 .element.relative')
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    let i = 0; // номер текущей картинки, на экране

    arrowLeft.onclick = function(){
        slides[i].style.display = 'none';  // прячем текущую картину
        slides[i + 1] = slides[i]
        i++
    
        if(i >= slides.length){
            i = 0; // переменная i равна 0
        }
        slides[i].style.display = 'block';
    }


    arrowRight.onclick = function(){
        slides[i].style.display = 'none';
        i--;
        if(i < 0){
            i = slides.length - 1;
        }
        slides[i].style.display = 'block';
    }

    // /* конфигурация */
    // let width = 33.33333; // ширина картинки
    // let count = 3; // видимое количество изображений

    // let position = 0; // положение ленты прокрутки

    // arrowLeft.addEventListener('click', () => {
    //   // сдвиг влево
    //   position += (width * count);
    //   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    // //   position = Math.min(position, 0)
    //   sliderWrapper.style.marginLeft = `${position}px`;
    // })

    // arrowRight.addEventListener('click', () => {
    //   // сдвиг вправо
    //   position -= width * count;
    //   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    // //   position = Math.max(position, -width * (slides.length - count));
    //   sliderWrapper.style.marginRight = `${position}px`;
    // })


}


export default carousel;