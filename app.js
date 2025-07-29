function abrirModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal__img");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarModal();
});

window.addEventListener("click", function (e) {
    const modal = document.getElementById("modal");
    if (e.target === modal) cerrarModal();
});

