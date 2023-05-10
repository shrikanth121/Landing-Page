var backdrop = document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal button');
var toogleButton= document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
// console.log(backdrop);
// backdrop.style.display = 'block';

for(var i=0; i<selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click',function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open'); 
    closeModal();
});

function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display='none';
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');   
}

toogleButton.addEventListener('click', function(){
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open'); 
});