

//console.log('hello');
function populateCont(list, elem, bg){
    //console.log(param);
    list.forEach(function(item){

        //creating elements
        let card = makeElem('div', 'card-box'),
            itemBg = makeElem('img', 'card-bg'),
            cardTitle = makeElem('h1', 'card-title'),
            cardContent = makeElem('h3', 'card-content'),
            cardComment = makeElem('h2', 'card-comment');

        //adding content
        itemBg.src = (type !== 'long')?  item.backgroundW : item.background;
        itemBg.classList.add('hidden');

        cardTitle.textContent = item.title;
        insBeforeEnd(card, cardTitle);

        cardContent.textContent = item.content;
        insBeforeEnd(card, cardContent);

        cardComment.textContent = item.comment;
        insBeforeEnd(card, cardComment);

        insBeforeEnd(elem, card);
        insBeforeEnd(bg, itemBg);
    });
}

//---------------------miscellanoeus functions 
//creating elements
function makeElem(elem, classname){
    let box = document.createElement(elem);
    box.classList.add(classname);
    return box; 
}

//giving elements sizes
function giveSize (elem, x, y, bg = false) {
    let listed = document.querySelectorAll(elem);
    listed.forEach(function(it){
        it.style.width = x + "px";
        it.style.height = y + "px";
        if(bg) it.style.backgroundSize = x + "px " + y + "px";
    });
}

function insBeforeEnd(el, itm){

    el.insertAdjacentElement('beforeend', itm);
}

//get coords
function getCoords(ele){
    let coordsArr = ele.getBoundingClientRect();

    console.log(coordsArr);

    return coordsArr;
}

//center pic vertically
function centerPicV(par, rat, elem){
    let height = par * rat;

    let topEdge = (wh - height) / 2;

    //console.log(height);

    elem.style.top = topEdge.toString() + 'px';

}

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