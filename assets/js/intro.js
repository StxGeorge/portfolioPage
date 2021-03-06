const intro = document.querySelector('.intro'),
      screenCam = document.querySelector('.screen'),
      innerLens = document.querySelector('.lens-inner'),
      outerLens = document.querySelector('.lens-outer'),
      focClick = new Audio('./assets/sound/camClick2.mp3'),
      snapsMe = document.querySelectorAll('.snap-pic'),
      snapsDiv = document.querySelector('.snaps'),
      introText = document.querySelectorAll('.intro-text'),
      goBtn = document.querySelector('.intro-btn'),
      contBtns = document.querySelectorAll('.cont-btn'),
      navBar = document.querySelector('.nav'),
      navMenu = document.querySelector('.nav-menu'),
      arrow = document.querySelector('.arrow'),
      footer = document.querySelector('.footer');

//adding event listeners
goBtn.addEventListener('click', function(){

    playIntro();
    
});

arrow.addEventListener('click', function(){
    toggle(navBar, 'wide');
    toggle(navMenu, 'collapsed');
    toggle(arrow, 'reversed');
})

//intro function
function playIntro(){

    focClick.play();
    focusLens();
    focusMe();
    setTimeout(function(){takeSnaps();}, 800);
    setTimeout(function(){
        toggle(screenCam, 'hidden');
        toggle(goBtn, 'hidden');
        shapeshift();
        toggleList(introText, 'faded');
        toggle(navBar, 'faded');
        //toggle(footer, 'compressed');
        contBtns.forEach(function(btn){
            let name = btn.id;
            toggle(btn, 'hidden');
            btn.addEventListener('click', function(){routeContent(name);});
        })
    }, 3500);

}

//setting intro finish

//change portrait shape 
function shapeshift() {
    snapsDiv.style.border = '4px solid #C3AED6';
    snapsDiv.style.borderRadius = '100%';
    snapsDiv.style.height = '32vh';
    snapsDiv.style.width = '32vh';
    snapsDiv.style.overflow = 'clip';

    shiftPics();
    
}
//move and set portrait
function shiftPics(){
    snapsDiv.style.transform = 'translate(15vw, 8vh)';

    snapsMe.forEach((elem) => {
        elem.classList.add('shifted');
    }); 
}

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
            toggle(snapsMe[i - 1], 'hidden');
            toggle(snapsMe[i], 'hidden');
            screenCam.style.backgroundColor = "rgba(174, 209, 245, 0.4)";
            setTimeout(function() {
                screenCam.style.backgroundColor = "transparent";
            }, 100);

        }, 600 * i);

        
    }
}

