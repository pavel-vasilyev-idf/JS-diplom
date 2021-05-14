const scrollUp = () => {

    const upBtn = document.querySelector('.up');
    
    let sec = document.querySelector('.services-section')
    
    console.log(sec.scrollHeight);
    console.log(sec.scrollHeight);

    let a;

    document.body.addEventListener('scroll', () => {

        a = document.documentElement.scrollTop;

        // if (document.documentElement.scrollTop >= sec.scrollHeight) {
        //     upBtn.classList.add('up_active')
        // } else if(document.documentElement.scrollTop < sec.scrollHeight) {
        //     upBtn.classList.remove('up_active')
        // }
    })



}

export default scrollUp;