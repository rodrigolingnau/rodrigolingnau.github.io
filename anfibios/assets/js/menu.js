
document.querySelector('nav ul').onclick = function() {
    if (this.classList.contains("show")) {
        this.classList.remove("show");
    } else {
        this.classList.add("show");
    }
}