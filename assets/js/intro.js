const intro = document.querySelector('.intro'),
      innerLens = document.querySelector('.lens-inner'),
      outerLens = document.querySelector('.lens-outer'),
      focClick = new Audio('./assets/sound/camClick.mp3'),
      goBtn = document.querySelector('.intro-btn');

//adding event listeners
goBtn.addEventListener('click', function(){
    focusLens();
});

//adding functions for focusein the lens
function focusLens() {
    //console.log('focuses');
    setTimeout(function(){
        reticle(outerLens, '60deg');
        reticle(innerLens, '-60deg', true);
     }, 100);

     setTimeout(function(){
        reticle(outerLens, '-10deg');
        reticle(innerLens, '10deg', true);
     }, 700);

    focClick.play();
    
}

function reticle(elem, angle, close = false){
    //console.log('focuses', elem);
    elem.style.transform = "rotate(" + angle + ")";

    if(close) {
        elem.style.transform = "scale(0.80)";
    }

    elem.style.transition = "ease-in-out 500ms";
}
