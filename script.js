let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// scrollreveal
ScrollReveal ({
    reset: true,
    distance: '80px', 
    duration: 1000, 
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .education-box, .skills-box', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .title ', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


//typed js

const typed = new Typed ('.multiple-text',  { 
    strings: ['Software Engineer', 'Programmer', 'UI-UX Designer'],
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 2000, 
    loop: true
});



//google sheets for contact me
const scriptURL = 'https://script.google.com/macros/s/AKfycbwwwN_n1cc3_c0BLlSFCXnzgBGrESVKprZVPZS6YuR-_jnmbeosN6wqsxBl_cKwqiW1/exec';
const form = document.forms['My-Portfolio-contact-me'];
const btnSend = document.querySelector('.btn-send');
const btnLoading = document.querySelector('.btn-loading');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    btnSend.classList.toggle('hidden');
    btnLoading.classList.toggle('hidden');

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnSend.classList.toggle('hidden');
            btnLoading.classList.toggle('hidden');
            console.log('Success!', response);

            // Tambahkan alert di sini
            alert('We have received your message');
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Tambahkan alert untuk kesalahan di sini jika diperlukan
            alert('An error occurred while submitting the form.');
        });
});
