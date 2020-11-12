require('./header.js');

const books = document.getElementById('libros-mensuales');
const moreBooks = document.getElementById('libros-mensuales-show-more');
const allBooks = document.getElementById('libros-mensuales-show-all');
moreBooks.addEventListener('click',()=>{
    books.classList.add('expanded');
    moreBooks.classList.add('hidden');
    allBooks.classList.remove('float-right');
})