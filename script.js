const swiper = new Swiper('.work__stages-swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 400,
});
const secondSwiper = new Swiper('.our__works-swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000,
});

const thirdSwiper = new Swiper('.cooperation__swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.cooperation__swiper-next',
    prevEl: '.cooperation__swiper-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});


// ========accordion==========

const btn = document.querySelectorAll('.faqs__accordion')
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    let icon = document.querySelectorAll('.faqs-icon')
    let content = document.querySelectorAll('.faqs__answer')
    if (content[i].style.maxHeight) {
      content[i].style.maxHeight = null
      btn[i].style.marginBottom = '0'
      icon[i].style = `
      transform: rotate(360deg);
      `
    } else {
      content[i].style.maxHeight = null
      content[i].style.maxHeight = content[i].scrollHeight + 'px'
      btn[i].style.marginBottom = '40px'

      icon[i].style = `
      transform: rotate(180deg);
      `
    }
  })
}

// ========accordion==========


//============Swiper changes ================

const workNav = document.querySelectorAll('.work__stages-nav')
const number = document.querySelectorAll('.number')
const swiperNextBtn = document.querySelector('.work__stages-swiper__next'),
  swiperPrevBtn = document.querySelector('.work__stages-swiper__prev')
let count = 0

swiperPrevBtn.addEventListener('click', function () {
  if (count == 0) {
    count = 3
  } else {
    count--
  }
  for (let i = 0; i < number.length; i++) {
    workNav[i].classList.remove('active')
    number[i].classList.remove('number__active');
  }
  number[count].classList.add('number__active');
  workNav[count].classList.add('active')
})
swiperNextBtn.addEventListener('click', function () {
  count++
  for (let i = 0; i < number.length; i++) {
    number[i].classList.remove('number__active')
    workNav[i].classList.remove('active')
    if (count == 4) {
      count = 0
    }
  }
  number[count].classList.add('number__active');
  workNav[count].classList.add('active');

})

//============Swiper changes ================



//============Dropdown ================

const dropdownBtn = document.querySelector('.nav__dropdown-title')
const dropdownList = document.querySelector('.nav__dropdown-list')
const mediaDropdown = document.querySelector('.nav__dropdown-title__media')

dropdownBtn.addEventListener('click', function () {
  if (dropdownList.style.opacity == 0) {
    dropdownList.style = `
  opacity:1;
  z-index:1
  `
  } else {
    dropdownList.style = `
  opacity:0;
  z-index:-1;
  `
  }
})
mediaDropdown.addEventListener('click', function () {
  if (dropdownList.style.opacity == 0) {
    dropdownList.style = `
  opacity:1;
  z-index:1
  `
  } else {
    dropdownList.style = `
  opacity:0;
  z-index:-1;
  `
  }
})



//============Dropdown ================
