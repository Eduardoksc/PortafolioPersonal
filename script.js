let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})