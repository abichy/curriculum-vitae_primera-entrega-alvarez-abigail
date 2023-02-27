let selections = document.querySelectorAll("selection");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let heigth = sec.offsetHeigth;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id +']').classList.add(active);

            })    
        }
    })
}

ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home .content, .heading', { origin: top }) ;
ScrollReveal().reveal('.home .img, .services-container, .cv-box, .contacto-form', { origin: bottom}) ;