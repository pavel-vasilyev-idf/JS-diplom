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


}

export default scrollUp;