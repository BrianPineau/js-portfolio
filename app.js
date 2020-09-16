let entireHeader = document.querySelector('.header-initial');



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



//Scroll Effects
//  Init ScrollMagic
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





