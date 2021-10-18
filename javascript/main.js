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

var date = new Date();
//Get the day of the week in a number
var number = date.getDay();

let opening_hours =  [
    //Monday
    'Vandaag open van: 09:00 tot 21:00',
    //Tuesday
    'Vandaag open van: 09:00 tot 21:00',
    //Wednesday
    'Vandaag gesloten',
    //Thursday
    'Vandaag open van: 09:00 tot 21:00',
    //Friday
    'Vandaag open van: 09:00 tot 21:00',
    //Saturday
    'Vandaag gesloten',
    //Sunday
    'Vandaag gesloten',
]

//opening_hours[number - 1] as the week starts at day 1 but array counting starts with 0
document.getElementById("opening-hours").innerHTML += opening_hours[number - 1]