//const dim = document.querySelector('.dim');
const styleLink = document.querySelector('#scr-style');

//dimensions and animation finished
let ww = getWidth(),
    wh = getheight(),
    isFinished = false,
    type;

//setting type
getViewType();

//populate dimensions
//dim.textContent = ww + ' w X ' + wh + ' h';

//finding display type
function getViewType() {

    type = ww < wh ? 'long' : 'wide';

    if(type !== 'long'){
        styleLink.href = 'assets/css/wide.css';
    }

    /* if(ww < wh) {
       if(ww < 560) {
           type = 'longS';
       } else if(ww >= 560 && ww < 800) {
        type = 'longM';
       } else {
        type = 'longL';
       }
    } else {
        if(ww < 740) {
            type = 'wideS';
        } else if(ww >= 740 && ww < 1120) {
            type = 'wideM';
        } else {
            type = 'wideL';
        }
    } */
}

function getWidth() {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    return width;
}

function getheight() {
    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight; 

    return height;
}
