

console.log('hello');

//---------------------miscellanoeus functions 

//toggle visibility
function toggle(elem){
    elem.classList.toggle('hidden');
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