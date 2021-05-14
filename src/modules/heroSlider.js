//slider

const heroSlider = () => {
	const slider = document.querySelector('.top-slider');
	const slide = document.querySelectorAll('.item');
	const tableActive = document.querySelectorAll('.table');


	let currentSlide = 0; //Номер слайда, начинаем с нуля. Значение будет меняться
	let interval = 0;
	
	const prevSlide = (elemSlide,elemTable, index,strClass) => {
		elemSlide[index].classList.remove(strClass);
		elemTable[index].classList.remove(strClass);
	};

	const nextSlide = (elemSlide,elemTable, index,strClass) => {
		elemSlide[index].classList.add(strClass);
		elemTable[index].classList.add(strClass);
	};

	//автозапуск слайдов
	const autoPlaySlide = () => {
		prevSlide(slide, tableActive, currentSlide, 'active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, tableActive, currentSlide, 'active');

	};

	//старт слайдера
	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};


	startSlide(3000);
	

}

export default heroSlider;