require('./header.js');

const books = document.getElementById('libros-mensuales-grid');
const moreBooks = document.getElementById('libros-mensuales-show-more');
const allBooks = document.getElementById('libros-mensuales-show-all');
if(moreBooks && books){
    moreBooks.addEventListener('click',()=>{
        books.classList.add('expanded');
        moreBooks.classList.add('hidden');
        if(allBooks) allBooks.classList.remove('float-right');
    })
}


function isVisible(el) {
    const windowBottom = window.innerHeight || document.documentElement.clientHeight;    
    const rect = el.getBoundingClientRect();
    return rect.bottom >= 0 && rect.top <= windowBottom;
}

function parallax(){           
    const scrollSections = document.querySelectorAll('[scroll-section]:not(.active)');
    scrollSections.forEach(scrollSection => {
        if(isVisible(scrollSection)) {
            scrollSection.classList.add('active');
        }
    });
}
parallax();
window.addEventListener('scroll', parallax);