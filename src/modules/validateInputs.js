const validateInputs = () => {
	const formName = document.querySelectorAll('[name=fio]'),
		formPhone = document.querySelectorAll('[name=tel]');

	let error = new Set();

	const validateNumberInputs = () => {
		calcInputs.forEach(el => {
			el.value = el.value.replace(/[^\d]/g, '');
		})
	};

	const validateLetterInputs = (input) => {
		input.value = input.value.replace(/[^а-яё0-9\.\,\:\-\!\? ]/gi, '');
	};

	const inputsHandler = (e) => {
		if (e.target.matches('.calc-item')) {
			validateNumberInputs();
		}
		if (e.target.matches('[name=fio]')) {
			e.target.value = e.target.value.replace(/[^а-яё\-\+\ ]/gi, '');
		}
		if (e.target.matches('#form2-message')) {
			validateLetterInputs(e.target);
		}
		if (e.target.matches('[name=user_email]')) {
			e.target.value = e.target.value.replace(/[^a-z0-9\@\_\-\.\!\~\*\']/gi, '');
		}
		// if (e.target.matches('[name=tel]')) {
        //     e.target.value = e.target.value.replace(/[^\d\(\)\-\+]/g, '');
        //     if (e.target.value.length > 10) {
        //         e.target.value = e.target.value.substring(0, 11)
        //     }
        // }
	}

	const trim = (input) => {
		input.value = input.value.replace(/\s+/g, ' ');
		input.value = input.value.replace(/\-+/g, '-');

		let inputToExp = new RegExp("ReGeX" + input.value + "ReGeX");
		if (/^[/ /-]/.test(inputToExp)) {
			input.value = input.value.replace(/^[/ /-]/, '')
		}
		if (/[/ /-]$/.test(inputToExp)) {
			input.value = input.value.replace(/[/ /-]$/, '')
		}
	}

	const capitalize = (input) => {
		let inputValue = input.value
		return inputValue.split(' ').map(item =>
			item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
	}

	const controlInputs = (input, exp, message = 'Введите корректные данные') => {
		if (!input.value.match(exp)) {
			error.add(input.value)
			input.value = '';
		} 
	}

	formName.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			el.value = capitalize(el);
			controlInputs(el, /[а-яё]{2,}/gi);
		})
	})

	// formMessage.forEach(el => {
	// 	el.addEventListener('blur', () => {
	// 		trim(el);
	// 		el.value = capitalize(el);
	// 		controlInputs(el, /[а-яё]{2,}/gi);
	// 	})
	// })

	// formEmail.forEach(el => {
    //     el.addEventListener('blur', () => {
    //         el.value = el.value.replace(/\s/g, '');
    //         controlInputs(el, /\w+@\w+.\w{2,3}/g);
    //     })
    // })

	formPhone.forEach(el => {
		el.addEventListener('blur', () => {
			trim(el);
			controlInputs(el, /\+?([-()]*\d){7,10}/g);
		})
	})





	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i != -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type == "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
	
	// use
	
	maskPhone('[name=tel]');

	window.addEventListener('input', inputsHandler);
}

export default validateInputs;