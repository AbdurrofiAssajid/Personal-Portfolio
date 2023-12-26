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
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .education-box, .skills-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .title ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


//typed js
const typedMultipleText = new Typed('.multiple-text', {
    strings: [ "Abdurrofi'i Assajid", " a Software Engineer", " a Programmer", " a UI-UX Designer"],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 1000,
    loop: true
});



const typedTextElement = document.getElementById('typed-text');


if (typeof typedText === 'undefined') {
    // Set up Typed.js
    const options = {
        strings: [ 'if you are curious about me', 'Click the "read more " button below ! '],
        typeSpeed: 60, // typing speed in milliseconds
        backSpeed: 10,
         // backspacing speed in milliseconds
        loop: true, // loop the animation
    };

    // Declare 'typedText' using let to avoid block-scoping issues
    let typedText = new Typed(typedTextElement, options);
}

//google sheets for contact me

const form = document.getElementById('My-Portfolio-contact-me');
const btnSend = document.getElementById('btnSend');
const btnLoading = document.getElementById('loadingBtn');
const scriptURL = 'https://script.google.com/macros/s/AKfycbwwwN_n1cc3_c0BLlSFCXnzgBGrESVKprZVPZS6YuR-_jnmbeosN6wqsxBl_cKwqiW1/exec';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Menyembunyikan tombol "btn-send" dan menampilkan tombol "btn-loading"
    btnSend.classList.add('d-none');
    btnLoading.classList.remove('d-none');

    try {
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });

        // Menyembunyikan tombol "btn-loading"
        btnLoading.classList.add('d-none');

        console.log('Success!', response);

        // Tambahkan alert di sini
        window.confirm('We have received your message') 
            form.reset();
        
        form.reset();

        // Menampilkan kembali tombol "btn-send" setelah alert muncul
        btnSend.classList.remove('d-none');
    } catch (error) {
        console.error('Error!', error.message);
        // Tambahkan alert untuk kesalahan di sini jika diperlukan
        alert('An error occurred while submitting the form.');

        // Kembalikan tampilan tombol ke awal jika terjadi kesalahan
        btnSend.classList.remove('d-none');
        btnLoading.classList.add('d-none');
    }
});


//ucapan terimakasih
function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "")
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hey " + person + "! Thank you for visiting, enjoy your day";
      // Add an alert here
      alert(text);
    }
    document.getElementById("demo").innerHTML = text;
  }