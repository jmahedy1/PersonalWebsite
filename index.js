var today = new Date();
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-words");
var nav = document.getElementById("dark-mode-nav");

if(today.getHours() > 17) {
    bg.style.backgroundColor="#4C6079";
    
    for(let word of words){
        word.style.color = "white";
    }

    nav.classList.remove("navbar-light");
    nav.classList.remove("bg-light");
    nav.classList.add("navbar-dark");
    nav.classList.add("bg-dark");
}