const body = document.documentElement;
const anfibio = document.querySelectorAll('.clicavel');
const iframeModal = document.querySelector('#modal iframe');
for (var i = 0; i < anfibio.length; i++) {
    anfibio[i].onclick = function (event) {
        const anfibio = event.currentTarget.getAttribute("id");
        iframeModal.setAttribute('src', '');
        document.getElementById('modal').style.setProperty('display', 'block');
        body.className = 'no-click';
        setTimeout(function() {
            iframeModal.setAttribute('src', './assets/especies/' + anfibio + '/bio.html');
        }, 0);
    }
}

const fecharModal = document.querySelector('#modal .fechar');
fecharModal.onclick = function() {
    document.getElementById('modal').style.setProperty('display', 'none');
    body.className = '';

    iframeModal.contentWindow.pause();
}

const modal = document.querySelector('#modal');
modal.onclick = function(event) {
    if (event.target != iframeModal) {
        fecharModal.onclick();
    }
}