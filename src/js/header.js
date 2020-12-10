function checkStickyHeader(e){    
    if(window.pageYOffset === 0){
        header.classList.remove('sticky');
        sticky = false;
    }else if(!sticky) {
        header.classList.add('sticky');
        sticky = true;
    }
}

const header = document.getElementsByTagName("header")[0];

let sticky = false;
checkStickyHeader();
window.addEventListener('scroll', checkStickyHeader);