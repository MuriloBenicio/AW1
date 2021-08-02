//abre e fecha o menu quando clicar no ícone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('new .toggle')

for (const element of toggle){
    element.addEventListener ('click', function(){
        nav.classList.toggle('show')
    })
}

//quando clicar em um dos itens do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener ('click', function(){
        navHeight.classList.remove('show')
    })
}

//mudar o header da página quando der scroll
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight

    if (window.scrolly >= navHeight){
        //scroll é maior que a altura do header
       header.classlist.add ('scroll')
    }else{
        //scroll é maior que a altura do header
       header.classlist.remove ('scroll')
    }
}

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
})

const swiper = new Swiper{{
    slidesPerView: 1,
    pagination: {
        el: 'swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
}}


const scrollReveal = ScrollReveal{{
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
}}


scrollReveal.reveal{
    '#home .image #home .text,
    #about .image #about .text
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer. social
    ',
    {interval: 100}
}

//Botão voltar para o topo
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')

    if(window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
}

//when scroll
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
})