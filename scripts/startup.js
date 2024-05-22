let myButton = document.querySelector('#myBtn');
let modalContent = document.querySelector('.modal-content');
let backdrop = document.querySelector('.backdrop')
let close = document.querySelector('.close')

myButton.addEventListener('click', openModal);
close.addEventListener('click', closeModal)
document.addEventListener('click', function (element) {
    if(element.target === backdrop) {
        closeModal();
    }
});
document.addEventListener('keydown', function (key) {
    if(key.key === 'Escape') {
        closeModal();
    }
})

function openModal() {
    backdrop.style.display = 'block'
}

function closeModal() {
    backdrop.style.display = 'none';
}

function escapeModal() {

}

document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
    items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    let dots = document.querySelectorAll(".dot");
    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            dots[idx].classList.remove("active");
            if (idx === index) {
                item.classList.add("active");
                dots[idx].classList.add("active");
            }
        });
    }
    document.querySelector(".prev").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
    });
    document.querySelector(".next").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });
});