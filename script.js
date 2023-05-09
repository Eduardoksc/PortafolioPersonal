// BOTÓN RESPOSIVE

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// EFECTO LETRA 

let typed = new Typed(".auto-input", {
    strings: ['Desarrollador Web Full-Stack !', 'Diseñador Web', 'Analista de Datos!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
})

// EFECTO DE NAVEGACIÓN ACTIVA 

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


// Limpiar el formulario despues de enviado el mesaje 

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Aquí iría el código para enviar los datos a Formspree

    try {
        // Aquí iría el código para enviar los datos a Formspree
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            // Aquí se limpiarían los campos del formulario si el envío fue exitoso
            form.reset();
            alert('¡Gracias por tu mensaje!');
        } else {
            alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        }
    } catch (error) {
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
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

// var btn = document.getElementById('btn');
// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let subject = document.getElementById('subject').value;
//     let message = document.getElementById('message').value;
//     let body = 'name:' + name + '<br/> email:' + email + '<br/> subject:' +subject + '<br/> message' + message;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "eduardodirectortag@elasticemail.com",
//         Password: "4CCE64788C775647F8EC617DF0834E46F24D",
//         To: 'eduardodirectortag@gmail.com',
//         From: email,
//         Subject: subject,
//         Body: body,
//     }).then(
//         message => alert(message)
//     );
// });




