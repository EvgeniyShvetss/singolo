
///menu
let nav = document.querySelector('.header__nav');
let barLink = document.querySelectorAll('.header__nav-item');

for (let i = 0; i < barLink.length; i++) {
    barLink[i].onclick = navItem;
};

function navItem() {
    for (let i = 0; i < barLink.length; i++) {
        barLink[i].classList.remove('header__nav-item-active');
    }
    this.classList.add('header__nav-item-active');
};


///phone

let phoneBtn = document.querySelector('.slider__phone-btn');
let phoneOff = document.querySelector('.slide__phone-off');
let phoneBt = document.querySelector('.slider__phone-bt');
let phoneOf = document.querySelector('.slide__phone-of');

phoneBtn.onclick = function() {
    phoneOff.classList.toggle('slide__phone-on');
}

phoneBt.onclick = function() {
    phoneOf.classList.toggle('slide__phone-on');
}



///img active
let portfolioImg = document.querySelectorAll('.portfolio__img img');

portfolioImg.forEach(element => {
    element.onclick = imgActive;
});

 
function imgActive() {
    portfolioImg.forEach(element => {
        element.classList.remove('portfolio__img-active')
    });
    this.classList.add('portfolio__img-active')
    
};

////form
let formBtn = document.querySelector('.form__btn');
let modal = document.querySelector('.modal-active');
let modalBtn = document.querySelector('.modal__btn');
let modalSubject = document.querySelector('.modal__subject');
let modalDesc = document.querySelector('.modal__description');
let inputName = document.querySelector('#name');
let inputEmail = document.querySelector('#email');
let inputSubject = document.querySelector('#subject');
let textarea = document.querySelector('#textarea');

formBtn.onclick = function () {
    let inputSubValue = inputSubject.value;
    if(inputSubValue === ''){
        inputSubValue = 'Without subject';
    }
    modalSubject.innerHTML = inputSubValue;

    let inputDescValue = textarea.value;
    if(inputDescValue === '') {
        inputDescValue = 'Without description';
    }
    modalDesc.innerHTML = inputDescValue;
    if (inputName.value !== '' && inputEmail.value !== '') {
        modal.classList.add('modal-show');
    } else {
        modal.classList.remove('modal-show');
    };
    
};

modalBtn.onclick = function() {
    modal.classList.remove('modal-show');
};

modal.onclick = function() {
    modal.classList.remove('modal-show');
};

///portfolio link

let portfolioLink = document.querySelectorAll('.portfolio__link');
portfolioLink.forEach( function(el) {
    
    el.addEventListener('click', function(e) {
        portfolioLink.forEach(el => {
            el.classList.remove('active')
        });
        e.target.classList.add('active')
    })
    
});


// function remove(){
//     let imageInside = document.querySelectorAll('.image__inside');
//     imageInside.forEach(function(el){
//         el.addEventListener('click', function(e){
//             (e.target.classList.contains('display-none')) ? e.target.classList.remove('display-none') : e.target.classList.add('display-none');
//         })
//     })
//     }
//     remove();
