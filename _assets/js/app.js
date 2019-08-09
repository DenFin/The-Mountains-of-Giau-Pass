const bgBlur = document.querySelector(".bgBlur")
const giaupassIntro = document.getElementById("giaupassIntro")

let scrolling = false;
let windowHeight = window.innerHeight;
let documentHeight = document.body.offsetHeight;
let scrollTop;

this.addEventListener("scroll", () => {
    scrolling = true;
});

setInterval( () => {
    if(scrolling) scrolling = false;
    scrollTop = window.scrollY;
    if(scrollTop > windowHeight/6){
        bgBlur.classList.add("active");
        giaupassIntro.classList.add("scroll");
      } else {
        bgBlur.classList.remove("active");
        giaupassIntro.classList.remove("scroll");
      }
}, 250)