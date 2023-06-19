let header = document.querySelector(".header");
let sticky = header.offsetTop;

window.onscroll = () => {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    }else{
       header.classList.remove("sticky");
    }
}

// placeholder text change 

let search = document.querySelector("#search");
let brakePoint = window.matchMedia("(max-width:500px)");

function myFunction(brakePoint){
    if(brakePoint.matches){
        search.placeholder = "Search Pixabay"
    }else{
        search.placeholder ="Search for all images on Pixabay"
    }
}
myFunction(brakePoint);
brakePoint.addListener(myFunction);


// scrollbar btn first
const scrollContainer = document.querySelector(".scroll-container");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");


scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft -=20; // Adjust the scroll amount as desired
  });
  
  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollLeft +=20; // Adjust the scroll amount as desired
  });

//   scrollbar btn second 

const scrollContainer2 = document.querySelector("#scroll-container2");
const scrollLeftBtn2 = document.querySelector("#scroll-left2");
const scrollRightBtn2 = document.querySelector("#scroll-right2");


scrollLeftBtn2.addEventListener('click', () => {
    scrollContainer2.scrollLeft -=20; // Adjust the scroll amount as desired
  });
  
  scrollRightBtn2.addEventListener('click', () => {
    scrollContainer2.scrollLeft +=20; // Adjust the scroll amount as desired
  });


// nav menu js 

const menuBtn = document.querySelector(".fa-bars");
const menu = document.querySelector(".header-menu");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {
    if(menuBtn.classList.contains("fa-bars")){
        menuBtn.classList.replace("fa-bars", "fa-xmark");
        menu.classList.add("open");
        header.classList.add("header-dark");
    }else{
        menuBtn.classList.replace("fa-xmark","fa-bars");
        menu.classList.remove("open");
        header.classList.remove("header-dark");
    }
})


// show scroll top btn 

addEventListener("scroll", () => {
    const scrollTop = document.querySelector("#scroll-top");
      if(this.scrollY >=430) scrollTop.classList.add("scroll-top")
      else scrollTop.classList.remove("scroll-top");
})
