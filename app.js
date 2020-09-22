let entireHeader = document.querySelector('.header-initial');
let aboutTitle = document.querySelector('.about-title');
let aboutText = document.querySelector('.about-text');



//Website Loader
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector("#loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 



//Hero Text Typewriter Effect
var typePhrase = document.getElementById('text-type');

var typewriter = new Typewriter(typePhrase, {
    loop: true
});

typewriter.typeString('Make websites great again!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();



//  SCROLL EFFECTS
//  Init ScrollMagic
let controller = new ScrollMagic.Controller();

//  Build a scene
let scene = new ScrollMagic.Scene({
  triggerElement: '.hook-lead',
  triggerHook: '0'
})
  .setClassToggle(entireHeader, 'header-shrink') // Add class to header
  .addTo(controller);


let scene2 = new ScrollMagic.Scene({
  triggerElement: '.about-container',
  triggerHook: '0.7'
})
  .setClassToggle(aboutTitle, 'float-up') // Add class to header
  scene2.addIndicators({
    name: 'shrink header', // custom name for your scene
    colorStart: 'red',
    colorTrigger: 'green',
   })
  .addTo(controller);
  

let scene3 = new ScrollMagic.Scene({
  triggerElement: '.about-container',
  triggerHook: '0.5'
})
  .setClassToggle(aboutText, 'float-in') // Add class to header
  scene3.addIndicators({
    name: 'shrink header', // custom name for your scene
    colorStart: 'red',
    colorTrigger: 'green',
   })
  .addTo(controller);





       