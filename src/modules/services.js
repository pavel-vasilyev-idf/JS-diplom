const services = () => {

	const servicesElements = document.querySelector('.services-elements');

	const openModal = (event) => {
		const target = event.target;
		const parent = target.parentNode
		const imageWrapper = parent.children[1]
		imageWrapper.classList.add('img-wrapper_active');
	}
	const closeModal = (event) => {
		const target = event.target;
		const parent = target.parentNode
		const imageWrapper = parent.children[1]
		imageWrapper.classList.remove('img-wrapper_active');
	}


	servicesElements.addEventListener('mouseover', openModal)
	servicesElements.addEventListener('mouseout', closeModal)



	//caurusel

	



};

export default services;