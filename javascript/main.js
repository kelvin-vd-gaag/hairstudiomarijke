// $(document).ready(function(){
//     $('#nav-icon4').click(function(){
//         $(this).toggleClass('open');
//     });
// });


document.getElementById("nav-icon4").addEventListener("click", event =>{
    document.getElementById("nav-icon4").classList.toggle("open");
    document.getElementById("mobile-menu").classList.toggle("active");
})