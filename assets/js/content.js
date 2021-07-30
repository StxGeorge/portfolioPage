const rockWindow = document.querySelector('.rock-window'),
      sectionBg = document.querySelector('.section-bg'),
      clients = document.querySelector('#clients'),
      longPicRatio = 1.452;



//content on display etc

let onScreen,
    currentSegment,
    currentBacks;



//route content function
function routeContent(route){
    switch (route) {
        case 'cli-btn':
            type == 'long'? rockWindow.src = 'assets/pics/content/rockWindow/long/rwmain.png' : rockWindow.src = 'assets/pics/content/rockWindow/wide/rwmainw.png';
            toggle(rockWindow, 'hidden');
            toggle(intro, 'hidden');
            toggle(clients, 'hidden');
            let coords = getCoords(rockWindow),
                firstBg = makeElem('img', 'card-bg'),
                picWidth;

            picWidth = coords.right - coords.left;
            type == 'long'? firstBg.src = 'assets/pics/content/rockWindow/long/rw-mb.jpg' : rockWindow.src = 'assets/pics/content/rockWindow/wide/city1.png';
            insBeforeEnd(sectionBg, firstBg);
            centerPicV(picWidth, longPicRatio, rockWindow);
            giveSize('.section-bg', picWidth, (picWidth * longPicRatio));
            centerPicV(picWidth, longPicRatio, sectionBg);
            populateCont(content.rockWindow, clients, sectionBg);
            giveSize('#clients', picWidth, (picWidth * longPicRatio));
            centerPicV(picWidth, longPicRatio, clients);
            giveSize('.card-box', picWidth, (picWidth * longPicRatio));
            giveSize('.card-bg', picWidth, (picWidth * longPicRatio));
            currentSegment = document.querySelectorAll('.card-segment');
            currentBacks = document.querySelectorAll('.card-bg');

            clients.addEventListener('scroll', function(){

                let range = getCoords(rockWindow),
                    b = 1,
                    inRange;
                
                for (let i = 0; i < currentSegment.length; i+=3) {
                     
                    if (('title' + b) === currentSegment[i].id) {

                        let positionNow = getCoords(currentSegment[i]);

                        if(positionNow.bottom < range.bottom && positionNow.top > (range.top - 5)) {
                            console.log(currentSegment[i].textContent);
                        };

                        //inRange
                        
                        //console.log(range);
                    }

                    b++;
                }
            })            
            break;
        case 'dev-btn':
            //populateCont(route);
            console.log('devs');
            break;
        default:
            break;
    }
}


