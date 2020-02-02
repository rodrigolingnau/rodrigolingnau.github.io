var images = [
    "assets/img/marca_animada/frame-01.png",
    "assets/img/marca_animada/frame-02.png",
    "assets/img/marca_animada/frame-03.png",
    "assets/img/marca_animada/frame-04.png",
    "assets/img/marca_animada/frame-05.png",
    "assets/img/marca_animada/frame-06.png",
    "assets/img/marca_animada/frame-07.png",
    "assets/img/marca_animada/frame-08.png",
    "assets/img/marca_animada/frame-09.png",
    "assets/img/marca_animada/frame-10.png",
    "assets/img/marca_animada/frame-11.png",
    "assets/img/marca_animada/frame-12.png",
    "assets/img/marca_animada/frame-13.png",
    "assets/img/marca_animada/frame-14.png",
    "assets/img/marca_animada/frame-15.png",
    "assets/img/marca_animada/frame-16.png",
    "assets/img/marca_animada/frame-17.png",
    "assets/img/marca_animada/frame-18.png",
    "assets/img/marca_animada/frame-19.png",
    "assets/img/marca_animada/frame-20.png",
    "assets/img/marca_animada/frame-21.png",
    "assets/img/marca_animada/frame-22.png",
    "assets/img/marca_animada/frame-23.png",
    "assets/img/marca_animada/frame-24.png",
    "assets/img/marca_animada/frame-25.png",
    "assets/img/marca_animada/frame-26.png",
    "assets/img/marca_animada/frame-27.png",
    "assets/img/marca_animada/frame-28.png",
    "assets/img/marca_animada/frame-29.png",
    "assets/img/marca_animada/frame-30.png",
    "assets/img/marca_animada/frame-31.png",
    "assets/img/marca_animada/frame-32.png",
    "assets/img/marca_animada/frame-33.png",
    "assets/img/marca_animada/frame-34.png",
    "assets/img/marca_animada/frame-35.png",
    "assets/img/marca_animada/frame-36.png",
];
var frameHeight = 30;
var currentFrame = 0;
document.styleSheets[0].addRule('#wrapper::before', 'top: 0px;', 1);

document.onscroll = function(e) {
    currentFrame = parseInt(window.scrollY/frameHeight);
    if (currentFrame > 36) {
        document.styleSheets[0].cssRules[1].style.top = ((window.scrollY - (frameHeight*35))*1/7) + 'px';
        document.querySelector('.imagesequence img').src = images[35];
        document.querySelector('#main').style.position = 'static';
        document.querySelector('#content').classList.remove('fixed');
        document.querySelector('header').style.height = 'auto';
        document.querySelector('html').style.top = (frameHeight*35) + 'px';
    } else {
        document.querySelector('.imagesequence img').src = images[currentFrame];
        document.querySelector('#main').style.position = 'fixed';
        document.querySelector('header').style.height = '10000px';
        document.querySelector('#content').classList.add('fixed');
        document.querySelector('html').style.top = '0';
    }
}

var navA = document.querySelectorAll('nav li a');
for (var i = 0; i < navA.length; i++) {
    if (navA[i].getAttribute("href").indexOf("#") != -1) {
        navA[i].onclick = function (event) {
            var href = event.currentTarget.getAttribute("href");
            document.querySelector(href).scrollIntoView({behavior: "smooth", block: "center"});
            event.preventDefault();
            event.stopPropagation();
            document.querySelector('nav ul').classList.remove("show");
        }
    }
}