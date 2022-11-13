const header = document.querySelector('#header')
const navHeight = header.offsetHeight

/* toggle */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*click and close menu*/
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//SCROLL SHADOW//

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* SWIPER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWraperSize: true
    }
  }
})

/* SCROLLREVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links.,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*BACK TO TOP */
function backtotop() {
  const backToTop = document.querySelector('.backtotop')
  if (window.scrollY >= navHeight) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA*/
const sections = document.querySelectorAll('main section[id')
function menuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/*WHEN SCROLL */
window.addEventListener('scroll', function () {
  changeHeader()
  backtotop()
  menuCurrentSection()
})
