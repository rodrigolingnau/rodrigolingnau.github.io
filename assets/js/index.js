document.styleSheets[0].addRule('#wrapper::before', 'top: 0px;', 1);

document.onscroll = function() {
    document.styleSheets[0].cssRules[1].style.top = window.scrollY*1/7 + 'px';
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