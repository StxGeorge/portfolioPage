const intro = document.querySelector('.intro'),
      screen = document.querySelector('.screen'),
      innerLens = document.querySelector('.lens-inner'),
      outerLens = document.querySelector('.lens-outer'),
      focClick = new Audio('./assets/sound/camClick2.mp3'),
      snapsMe = document.querySelectorAll('.snap-pic'),
      goBtn = document.querySelector('.intro-btn');

//adding event listeners
goBtn.addEventListener('click', function(){

    focClick.play();
    focusLens();
    focusMe();
    setTimeout(function(){takeSnaps();}, 800);
    

});

//adding functions for focusing the lens
function focusLens() {
    //console.log('focuses');
    setTimeout(function(){
        reticle(outerLens, '60deg');
        reticle(innerLens, '-60deg', true, "0.7");
     }, 100);

     setTimeout(function(){
        reticle(outerLens, '-20deg');
        reticle(innerLens, '20deg', true, "0.85");
     }, 600);
    
}

function reticle(elem, angle, close = false, scale = 1){
    //console.log('focuses', elem);
    elem.style.transform = "rotate(" + angle + ")";

    if(close) {
        elem.style.transform = "scale(" + scale + ")";
    }

    elem.style.transition = "ease-in 500ms";
}

//bringing first image to focus
function focusMe(){
    console.log('on focus');
    
    //first focus step
    setTimeout(function(){focusElem(snapsMe[0], "300");}, 100);
    setTimeout(function(){focusElem(snapsMe[0], "200", "4px");}, 400);
    setTimeout(function(){focusElem(snapsMe[0], "500");}, 700);
}

function focusElem(elem, delay = 0, shift = 0){
    elem.style.filter = "blur(" + shift + ")";
    elem.style.transition = "ease-in " + delay + "ms";
}

//taking the snapshots
function takeSnaps(){

    //loping through the snaps
    for (let i = 1; i < 4; i++) {
        
        //console.log(snapsMe[i]);
        setTimeout(function(){
            toggle(snapsMe[i - 1]);
            toggle(snapsMe[i]);
            screen.style.backgroundColor = "rgba(174, 209, 245, 0.4)";
            setTimeout(function() {
                screen.style.backgroundColor = "transparent";
            }, 100);

        }, 600 * i);

        
    }
}
