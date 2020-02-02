var body = document.documentElement;
var anfibio = document.querySelectorAll('.clicavel');
var iframeModal = document.querySelector('#modal iframe');
for (var i = 0; i < anfibio.length; i++) {
    anfibio[i].onclick = function (event) {
        var anfibio = event.currentTarget.getAttribute("id");
        iframeModal.setAttribute('src', '');
        document.getElementById('modal').style.setProperty('display', 'block');
        body.className = 'no-click';
        setTimeout(function() {
            iframeModal.setAttribute('src', './assets/especies/' + anfibio + '/bio.html');
        }, 0);
    }
}

var fecharModal = document.querySelector('#modal .fechar');
fecharModal.onclick = function() {
    document.getElementById('modal').style.setProperty('display', 'none');
    body.className = '';

    iframeModal.contentWindow.pause();
}

var modal = document.querySelector('#modal');
modal.onclick = function(event) {
    if (event.target != iframeModal) {
        fecharModal.onclick();
    }
}