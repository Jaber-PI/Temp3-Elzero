
// Page Scroller 
const scroller = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
    let scrollerWidth = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    scroller.style.width = scrollerWidth + "%";
  });







