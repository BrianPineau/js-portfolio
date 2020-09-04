let header = document.querySelector('.header-initial');
let innerHeader = document.querySelector('.header-container');

//  Init ScrollMagic
$(document).ready()
let controller = new ScrollMagic.Controller();

//  Build a scene
let scene = new ScrollMagic.Scene({
  triggerElement: 'header'
})
  .setClassToggle('header', 'shrinkHeader') // Add class to header
  .addTo(controller);






// window.addEventListener('scroll', function() {
//     if (window.pageYOffset > 10) {
//         headerCollapse.classList.add('pop-out');
//         moveIcons.classList.add('icon-move');
//     } else {
//         headerCollapse.classList = 'header';
//         moveIcons.classList = ' icon-set';
//     }
// }); 




