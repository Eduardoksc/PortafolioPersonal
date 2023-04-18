let MenuBtn = document.getElementById('MenuBtn') 

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// EFECTO LETRA 

let typed = new Typed(".auto-input",{
    strings:['Front-End Developer!', 'Diseñador Web!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
})

