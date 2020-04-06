document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll("#wrapper > section");
  const links = document.querySelectorAll("#menu-links a");
  divs.forEach((el) => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach((a) => {
        a.classList.remove("header__nav-item-active");
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("header__nav-item-active");
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
  let responsiveBtn = document.querySelector(".responsiv-menu");
  responsiveBtn.addEventListener("click", function (event) {
    let menuLinks = document.querySelector("#menu-links");
    menuLinks.classList.toggle("header__nav-active");
    responsiveBtn.classList.toggle("menu__transform");
    document.querySelectorAll(".header__nav-item").forEach((element) => {
      element.addEventListener("click", function () {
        menuLinks.classList.remove("header__nav-active");
        responsiveBtn.classList.remove("menu__transform");
      });
    });
  });
}

responsivMenu();



///phone
function phoneAnimate() {
    const phoneLeft = document.querySelector('.slider__phone-left img')
    const phoneRight = document.querySelector('.slider__phone-right img')
    
    let phoneOff = document.querySelector(".slide__phone-off");
    let phoneOf = document.querySelector(".slide__phone-of");
    
    phoneLeft.addEventListener("click", function () {
    
        phoneOff.classList.toggle("slide__phone-on");
    });
    

    phoneRight.onclick = function (e) {
        phoneOf.classList.toggle("slide__phone-on");
    };
}

phoneAnimate();



///portfolio link
const portfolioItems = document.querySelectorAll(".portfolio__img");

let portfolioLink = document.querySelectorAll(".portfolio__link");
portfolioLink.forEach(function (el) {
  el.addEventListener("click", function (e) {
    const lastPortfolioItem = document.querySelector(
      ".portfolio__img:last-child"
    );
    let parent = lastPortfolioItem.parentElement;
    portfolioLink.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    parent.prepend(lastPortfolioItem);
  });
});

///img active
let portfolioImg = document.querySelectorAll(".portfolio__img img");

portfolioImg.forEach((element) => {
  element.onclick = function imgActive() {
    portfolioImg.forEach((element) => {
      element.classList.remove("portfolio__img-active");
    });
    this.classList.add("portfolio__img-active");
  };
});

////form
let formBtn = document.querySelector(".form__btn");
let modal = document.querySelector(".modal-active");
let modalBtn = document.querySelector(".modal__btn");
let modalSubject = document.querySelector(".modal__subject");
let modalDesc = document.querySelector(".modal__description");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputSubject = document.querySelector("#subject");
let textarea = document.querySelector("#textarea");

formBtn.onclick = function () {
  let inputSubValue = inputSubject.value;
  if (inputSubValue === "") {
    inputSubValue = "Without subject";
  }
  modalSubject.innerHTML = inputSubValue;

  let inputDescValue = textarea.value;
  if (inputDescValue === "") {
    inputDescValue = "Without description";
  }
  modalDesc.innerHTML = inputDescValue;
  if (inputName.value !== "" && inputEmail.value !== "") {
    modal.classList.add("modal-show");
  } else {
    modal.classList.remove("modal-show");
  }
};

modalBtn.onclick = function () {
  modal.classList.remove("modal-show");
};

modal.onclick = function () {
  modal.classList.remove("modal-show");
};

// slider

function createSlider({ animationTime, autoplay, autoplayTime, container }) {
  let sliderlist = container.querySelector(".slider__list");
  let slides = container.querySelectorAll(".slider__item");
  let firstSlide = slides[0];
  const slideWidth = sliderlist.clientWidth;
  const slidesCount = slides.length;
  const trackWidth = slideWidth * slidesCount + slideWidth * 2;
  let next = container.querySelector(".slider__arrow-right");
  let prev = container.querySelector(".slider__arrow-left");

  const firstSlideCopy = firstSlide.cloneNode(true);
  const lastSlideCopy = slides[slidesCount - 1].cloneNode(true);
  const slideTrack = document.createElement("div");

  slideTrack.classList.add("slide-track");

  firstSlideCopy.classList.add("slide-copy");
  lastSlideCopy.classList.add("slide-copy");

  sliderlist.prepend(lastSlideCopy);
  sliderlist.append(firstSlideCopy);

  while (sliderlist.children.length > 0) {
    const slideElement = sliderlist.children[0];
    slideElement.style.width = slideWidth + "px";
    slideTrack.append(slideElement);
  }

  sliderlist.append(slideTrack);
  slideTrack.style.width = trackWidth + "px";

  slideTrack.style.transform = `translate3d(-${slideWidth}px, 0px, 0px)`;

  let currentSlide = 0;

  next.addEventListener("click", function (e) {
    next.classList.add("disabled");
    setTimeout(() => {
      next.classList.remove("disabled");
    }, 800);

    animated = true;
    slideTo(currentSlide + 1);
  });

  prev.addEventListener("click", function () {
    prev.classList.add("disabled");
    setTimeout(() => {
      prev.classList.remove("disabled");
    }, 800);
    slideTo(currentSlide - 1);
  });

  if (autoplay) {
    setInterval(() => {
      slideTo(currentSlide + 1);
    }, autoplayTime);
  }

  function slideTo(index) {
    currentSlide = index;

    slideTrack.style.transition = `all ${animationTime / 1000}s`;
    const distance = -slideWidth - slideWidth * currentSlide;

    slideTrack.style.transform = `translate3d(${distance}px, 0px, 0px)`;
    setTimeout(() => {
      slideTrack.style.transition = "";
    }, animationTime);

    if (currentSlide === -1 || currentSlide === slidesCount) {
      currentSlide = currentSlide === slidesCount ? 0 : slidesCount - 1;
      setTimeout(() => {
        const distance = -slideWidth - slideWidth * currentSlide;
        slideTrack.style.transform = `translate3d(${distance}px, 0px, 0px)`;
      }, animationTime);
    }
  }
}

createSlider({
  animationTime: 600,
  // autoplay: true,
  // autoplayTime: 4000,
  container: document.getElementById("slider"),
});
