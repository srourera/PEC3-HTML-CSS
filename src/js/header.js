function checkStickyHeader(e){    
    if(window.pageYOffset === 0){
        header.classList = `${constantClasses} bg-opacity-50`;
        sticky = false;
    }else if(!sticky) {
        header.classList = `${constantClasses} py-3 bg-opacity-100`;
        sticky = true;
    }
}

const header = document.getElementsByTagName("header")[0];
const constantClasses = `${header.classList}`;

let sticky = false;
checkStickyHeader();
window.addEventListener('scroll', checkStickyHeader);