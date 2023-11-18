var i = 0;
var images = [];


images[0] = 'img/banner1.jpg';
images[1] = 'img/banner2.jpg';
images[2] = 'img/banner3.jpg';

function changeImg () {
    document.slide.src = images[i]

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

function changeImgBack (direction) {
    document.slide.src = images[i]
    if (direction === 'forward') {
        i = (i < images.length - 1) ? i + 1 : 0;
    } else {
        i = (i > 0) ? i - 1 : images.length - 1;
    }
}

window.onload = changeImg;