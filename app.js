// const sections = document.querySelectorAll('section');
// const sectBtns = document.querySelectorAll('.controls');
// const sectBtn = document.querySelector('.control');
// const allSections = document.querySelectorAll('.main-content');

// const pageTransitions = () => {
//  //Button click active class
//  for(let i = 0; i < sectBtn.length; i++) {
//   sectBtn[i].addEventListener('click', function() {
//     let currentBtn = document.querySelectorAll('.active-btn');
//     currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//     this.className += 'active-btn';
// })
// }
// }

// pageTransitions();
// use a IIFE 
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();