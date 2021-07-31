let navToggle = document.querySelector('.toggle');
let menuToggle = document.querySelector('.nav-main');

navToggle.addEventListener("click", () => {
    menuToggle.classList.toggle('active');
    navToggle.classList.toggle('active');
})
