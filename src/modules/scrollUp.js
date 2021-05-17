const scrollUp = () => {

    const upBtn = document.querySelector('.up');
    const sec = document.querySelector('.services-section')
    

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= sec.offsetTop) {
            upBtn.classList.add('up_active')
        } else if(document.documentElement.scrollTop < sec.offsetTop) {
            upBtn.classList.remove('up_active');
        }
    })


    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })




    //scrollToSections


    const headerWrapper = document.querySelector('.header-wrapper');
    const topMenu = document.querySelector('.top-menu');


    topMenu.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target.hash === '#services') {
            const heightEl = document.body.querySelector('#services');
            window.scrollTo({ top: heightEl.offsetTop - headerWrapper.clientHeight + 2, behavior: 'smooth' });
        }
        if (target.hash === '#faq') {
            const heightEl = document.body.querySelector('#faq');
            window.scrollTo({ top: heightEl.offsetTop - headerWrapper.clientHeight + 2, behavior: 'smooth' });
        }
        if (target.hash === '#contacts') {
            const heightEl = document.body.querySelector('#contacts');
            window.scrollTo({ top: heightEl.offsetTop - headerWrapper.clientHeight + 2, behavior: 'smooth' });
        }

    })


}

export default scrollUp;