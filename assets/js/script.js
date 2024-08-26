document.addEventListener('DOMContentLoaded', () => {
    /*=============== NAVIGATION ===============*/
    const navBtn = document.getElementById('nav-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const sideNav = document.getElementById('sidenav');
    const modal = document.getElementById('modal');

    navBtn.addEventListener('click', () => {
        sideNav.classList.add('show');
        modal.classList.add('showModal');
    });

    cancelBtn.addEventListener('click', () => {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    })

    /*=============== SHOW MENU ===============*/

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            sideNav.classList.remove('show');
            modal.classList.remove('showModal');
        }
    });

    /*=============== SHOW SCROLL UP ===============*/ 
    const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        if (this.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
            scrollUp.classList.remove('active');
        } else {
            scrollUp.classList.remove('show-scroll');
            scrollUp.classList.add('active');
        }
    };
    window.addEventListener('scroll', scrollUp);
    // Verifica el scroll al cargar la página
    window.addEventListener('load', scrollUp);
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
})
sr.reveal(`.header-botton, .footer`);
sr.reveal(`.customers-container`, {delay: 400, origin: 'bottom'});
sr.reveal(`.book`, {interval: 100});
sr.reveal(`.services-container`, {origin: 'left'});
sr.reveal(`.rooms-conatiner`, {origin: 'right'});
