document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('#wrapper > section');
    const links = document.querySelectorAll('#menu-links a');
    divs.forEach((el) => {
        if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('header__nav-item-active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('header__nav-item-active')
                }
            });
        }
    });
}

// window.addEventListener('scroll', function() {
//    let log =  document.getElementById('showScroll');
//    console.log(pageYOffset + 'px');
   
//   });

////responsive menu


function responsivMenu() {
    let responsiveBtn = document.querySelector('.responsiv-menu');
    responsiveBtn.addEventListener('click', function (event) {
    
    let menuLinks = document.querySelector('#menu-links');
    menuLinks.classList.toggle('header__nav-active');
    responsiveBtn.classList.toggle('menu__transform');
    document.querySelectorAll('.header__nav-item').forEach(element => {
        element.addEventListener('click', function () {
            menuLinks.classList.remove('header__nav-active');
            responsiveBtn.classList.remove('menu__transform');
    });
    })
    
});
}

responsivMenu();

// responsiveBtn.onclick = function(event) {
//     let target = event.target
//     console.log(target);
    
    
// }



///phone
let phoneContainer = document.querySelector('.slider__list')
let phoneBtn = document.querySelector('.slider__phone-btn img');
let phoneOff = document.querySelector('.slide__phone-off');
let phoneBt = document.querySelector('.slider__phone-bt img');
let phoneOf = document.querySelector('.slide__phone-of');

// phoneBtn.addEventListener('click', function (e) {
//   console.log(e.target);
  
//     phoneOff.classList.toggle('slide__phone-on');
// })



// phoneBt.onclick = function(e) {
//     phoneOf.classList.toggle('slide__phone-on');
// }



///portfolio link
const portfolioItems = document.querySelectorAll('.portfolio__img')

let portfolioLink = document.querySelectorAll('.portfolio__link');
portfolioLink.forEach( function(el) {
    
    el.addEventListener('click', function(e) {
        const lastPortfolioItem = document.querySelector('.portfolio__img:last-child')
        let parent = lastPortfolioItem.parentElement
        portfolioLink.forEach(el => {
            el.classList.remove('active');
            
        });
        e.target.classList.add('active');
        parent.prepend(lastPortfolioItem)
    })
    
});



///img active
let portfolioImg = document.querySelectorAll('.portfolio__img img');

portfolioImg.forEach(element => {
    element.onclick = function imgActive() {
        portfolioImg.forEach(element => {
            element.classList.remove('portfolio__img-active')
        });
        this.classList.add('portfolio__img-active')
        
    };
});



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




// slider

let sliderlist = document.querySelector('.slider__list')
let slides = document.querySelectorAll('.slider__items');
let slid = document.querySelector('.slider__items');
let next = document.querySelector('.slider__arrow-right');
let prew = document.querySelector('.slider__arrow-left');





// var slideIndex = 0;
// showSlides(slideIndex);


next.addEventListener('click', function() {
    let d = sliderlist.firstElementChild;
    let clone = d.cloneNode(true)
    sliderlist.removeChild(d);
    sliderlist.appendChild(clone);
   
})


prew.addEventListener('click', function() {
    let d = sliderlist.firstElementChild;
    let clone = d.cloneNode(true)
    sliderlist.removeChild(d);
    sliderlist.appendChild(clone);
})


// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


// function showSlides(n) {
//     let slides = document.querySelectorAll('.slider__items');
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('animate-slide');
//     }
 
//     slides[slideIndex - 1].classList.add('animate-slide');
// }

