document.getElementById("hamburger-menu").addEventListener("click", event =>{
    document.getElementById("hamburger-menu").classList.toggle("open");
    document.getElementById("mobile-menu").classList.toggle("active");
    document.getElementById("overlay").classList.toggle('overlay__active')
})