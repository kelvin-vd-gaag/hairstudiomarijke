document.getElementById("hamburger-menu").addEventListener("click", event =>{
   toggle_menu();
})

document.getElementById("overlay").addEventListener("click", event=>{
   toggle_menu();
})

function toggle_menu(){
    document.getElementById("overlay").classList.toggle("overlay__active");
    document.getElementById("hamburger-menu").classList.toggle("open");
    document.getElementById("mobile-menu").classList.toggle("active");
}