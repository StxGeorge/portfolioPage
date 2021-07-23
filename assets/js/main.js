

//console.log('hello');

//---------------------miscellanoeus functions 

//toggle visibility
function toggle(elem, sty){
    elem.classList.toggle(sty);
}

//toggle listed elements 
function toggleList(list, sty){
    list.forEach((elem) => {
        elem.classList.toggle(sty);
    }); 
}


window.onload = function(){
    console.log('loaded');
    //focusLens();
}; 