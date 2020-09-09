let entireHeader = document.querySelector('.header-initial');

//  Init ScrollMagic
// $(document).ready()
let controller = new ScrollMagic.Controller();

//  Build a scene
let scene = new ScrollMagic.Scene({
  triggerElement: '.hook-lead',
  triggerHook: '0'
})
  .setClassToggle(entireHeader, 'header-shrink') // Add class to header
  // scene.addIndicators({
  //   name: 'shrink header', // custom name for your scene
  //   colorStart: 'red',
  //   colorTrigger: 'green',
  //  })
  .addTo(controller);






