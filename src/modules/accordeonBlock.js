const accordeonBlock = () => {

    const accordeon = document.querySelector('.accordeon');
    const accordeonTitle = accordeon.querySelectorAll('.title');
    const accordeonContent = accordeon.querySelectorAll('.element-content');

    const toggleAccordeon = (index) => {
        for (let i = 0; i < accordeonContent.length; i++) {
            if (index === i) {
                accordeonTitle[i].parentElement.classList.add('active')
                accordeonContent[i].classList.add('element-content_active')
            } else {
                accordeonTitle[i].parentElement.classList.remove('active')
                accordeonContent[i].classList.remove('element-content_active')
            }
        }
    }

    accordeon.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('title')) {
            accordeonTitle.forEach( (item, i) => {
                // item[0].classList.add('element-content_active')
                if(item === target) {
                    toggleAccordeon(i);
                }
            })
        }
    })

}

export default accordeonBlock;
