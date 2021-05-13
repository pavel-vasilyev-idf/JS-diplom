const modalCallback = () => {
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');



    const handlerCallback = (event) => {
		const target = event.target;

		const displayCallback = () => {
			modalCallback.classList.toggle('_active');
			modalOverlay.classList.toggle('_active');
		};

		if (target.closest('.callback-btn') ||
			(!target.closest('.modal-callback') &&
			modalCallback.classList.contains('_active')) || (target.closest('.modal-close'))) {
                event.preventDefault();
			    displayCallback();
		}
	};

	document.body.addEventListener('click', handlerCallback);

};

export default modalCallback;