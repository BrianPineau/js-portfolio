let entireHeader = document.querySelector('.header-initial');
let innerHeader = document.querySelector('.header-container');

//  Init ScrollMagic
// $(document).ready()
let controller = new ScrollMagic.Controller();

//  Build a scene
let scene = new ScrollMagic.Scene({
  triggerElement: '.hook-lead',
  triggerHook: '0'
})
  .setClassToggle(entireHeader, 'header-shrink') // Add class to header
  scene.addIndicators({
    name: 'shrink header', // custom name for your scene
    colorStart: 'red', // custom color - colorEnd
    colorEnd: 'blue',
    colorTrigger: 'green',
   })
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




