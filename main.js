let otherLinks = document.querySelector('.header .main-nav li:last-child');
let megaMenu = document.querySelector('.header .mega-menu');
otherLinks.onclick = function () {
       megaMenu.classList.toggle('show-up');
};
let spa = document.querySelectorAll('.the-progress span');
let numSpa = document.querySelectorAll('.skill > h3 > span');
let skillsSection = document.querySelector('.skills');
let started = false;
let video = document.querySelector('.videos .box ul li');
let overView = document.querySelector('.videos .overview .image');
let anvideo = document.querySelector('.malik');

let scrollToTop = document.querySelector('.scroll');

scrollToTop.onclick = function () {
       window.scroll({ top: 0, left: 0, behavior: 'smooth' });
};

window.onscroll = function () {
       if (scrollY >= 700) {
              scrollToTop.style.display = 'flex';
       } else {
              scrollToTop.style.display = 'none';
       }

       if (scrollY >= skillsSection.offsetTop) {
              spa.forEach((element) => {
                     element.style.width = element.dataset.width;
              });
              if (started == false) {
                     numSpa.forEach((element) => {
                            let count = setInterval(() => {
                                   element.innerHTML++;
                                   if (
                                          element.innerHTML ==
                                          element.dataset.num
                                   ) {
                                          clearInterval(count);
                                   }
                            }, 7);
                     });
                     started = true;
              }
       }
};
