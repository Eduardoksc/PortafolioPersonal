let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// EFECTO LETRA 

let typed = new Typed(".auto-input", {
    strings: ['Front-End Developer!', 'Diseñador Web!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
})

let navLinks = document.querySelectorAll('nav ul li a')
console.log(navLinks)
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }

            });
        }
    });

});

/*const navLinks2 = document.querySelectorAll('nav a');

navLinks.forEach(link => {
link.addEventListener('click', e => {
    e.preventDefault(); // Evita la acción predeterminada del enlace

    const targetId = link.getAttribute('href'); // Obtiene el ID de la sección objetivo
    const targetSection = document.querySelector(targetId); // Obtiene el elemento de la sección objetivo
    const targetPosition = targetSection.offsetTop; // Obtiene la posición vertical de la sección objetivo

    window.scrollTo({
      top: targetPosition, // La posición vertical de la sección objetivo
      behavior: 'smooth' // Hace que la página se desplace suavemente hacia la sección objetivo
    });
});
});*/

// Envio de email

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let body = 'name:' + name + '<br/> email:' + email + '<br/> subject:' +subject + '<br/> message' + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "eduardodirectortag@elasticemail.com",
        Password: "4CCE64788C775647F8EC617DF0834E46F24D",
        To: 'eduardodirectortag@gmail.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        message => alert(message)
    );
});




