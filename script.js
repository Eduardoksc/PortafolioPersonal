let MenuBtn = document.getElementById('MenuBtn') 

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// EFECTO LETRA 

let typed = new Typed(".auto-input",{
    strings:['FullStack Developer!', 'Diseñador Web!'],
    typeSpeed: 20,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

