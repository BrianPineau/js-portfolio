let entireHeader = document.querySelector('.header-initial');
let aboutTitle = document.querySelector('.about-title');
let aboutText = document.querySelector('.about-text');
let skillsTitle = document.querySelector('.skills-title');
let firstCard = document.querySelector('.card-1');
let secondCard = document.querySelector('.card-2');
let thirdCard = document.querySelector('.card-3');

let projectCard = document.querySelector('.port-card-cont');
let projectImage = document.querySelector('.port-img-cont-1');
let projectContent = document.querySelector('.port-info-cont');

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
  triggerHook: '0.6'
})
  .setClassToggle(aboutTitle, 'float-up') // Add class to header
  .addTo(controller);
  

let scene3 = new ScrollMagic.Scene({
  triggerElement: '.about-container',
  triggerHook: '0.4'
})
  .setClassToggle(aboutText, 'float-in') // Add class to header
  .addTo(controller);
  
    
let scene4 = new ScrollMagic.Scene({
  triggerElement: '.skills-container',
  triggerHook: '0.6'
})
  .setClassToggle(skillsTitle, 'float-up') // Add class to header
  // scene4.addIndicators({
  //   name: 'shrink header', // custom name for your scene
  //   colorStart: 'red',
  //   colorTrigger: 'green',
  //  })
    .addTo(controller);
  

let scene5 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6'
})
  .setClassToggle(firstCard, 'card-up-1') // Add class to header
  scene5.addIndicators({
    name: 'shrink header', // custom name for your scene
    colorStart: 'red',
    colorTrigger: 'green',
   })
    .addTo(controller);
  
let scene6 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6'
})
  .setClassToggle(secondCard, 'card-up-2') // Add class to header
  .addTo(controller);

let scene7 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6'
})
  .setClassToggle(thirdCard, 'card-up-3') // Add class to header
  .addTo(controller);
  





projectCard.addEventListener('mouseover', () => {
  projectImage.classList.add('port-hover');
  projectContent.classList.add('port-cont-hover');
});

projectCard.addEventListener('mouseout', () => {
  projectImage.classList.remove('port-hover');
  projectContent.classList.remove('port-cont-hover');
});
