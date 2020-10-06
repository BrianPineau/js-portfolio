let entireHeader = document.querySelector('.header-initial');
let aboutTitle = document.querySelector('.about-title');
let aboutText = document.querySelector('.about-text');
let skillsTitle = document.querySelector('.skills-title');
let firstCard = document.querySelector('.card-1');
let secondCard = document.querySelector('.card-2');
let thirdCard = document.querySelector('.card-3');

let projectCard1 = document.querySelector('.port-card-1');
let projectCard2 = document.querySelector('.port-card-2');
let projectCard3 = document.querySelector('.port-card-3');
let projectCard4 = document.querySelector('.port-card-4');
let projectImage = document.querySelector('.port-img-cont');
let projectContent = document.querySelector('.port-info-cont');
let projectText = document.querySelector('.port-inner-info');
let portfolioTitle = document.querySelector('.portfolio-title');
let portfolioContainer = document.querySelector('.portfolio-grid-container');

let portCard1 = document.querySelector('.port-card-1');
let portCard2 = document.querySelector('.port-card-2');
let portCard3 = document.querySelector('.port-card-3');
let portCard4 = document.querySelector('.port-card-4');

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

//  Header Shrink Scroll Animation
let scene = new ScrollMagic.Scene({
  triggerElement: '.hook-lead',
  triggerHook: '0',
})
  .setClassToggle(entireHeader, 'header-shrink') // Add class to header
  .addTo(controller);

//  About Header Scroll Animation
let scene2 = new ScrollMagic.Scene({
  triggerElement: '.about-container',
  triggerHook: '0.55',
  reverse: false
})
  .setClassToggle(aboutTitle, 'float-up') // Add class to header
  .addTo(controller);
  
//  About Body Scroll Animation
let scene3 = new ScrollMagic.Scene({
  triggerElement: '.about-container',
  triggerHook: '0.45',
  reverse: false
})
  .setClassToggle(aboutText, 'float-in') // Add class to header
  .addTo(controller);
  
//  Skills Header Scroll Animation 
let scene4 = new ScrollMagic.Scene({
  triggerElement: '.skills-container',
  triggerHook: '0.55',
  reverse: false
})
  .setClassToggle(skillsTitle, 'float-up')
  .addTo(controller);
  
//  Skills 1st Card Scroll Animation
let scene5 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6',
  reverse: false
})
  .setClassToggle(firstCard, 'card-up-1')
  .addTo(controller);
  
//  Skills 2nd Card Scroll Animations
let scene6 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6',
  reverse: false
})
  .setClassToggle(secondCard, 'card-up-2') // Add class to header
  .addTo(controller);

//  Skills 3rd Card Scroll Animations
let scene7 = new ScrollMagic.Scene({
  triggerElement: '.skills-title',
  triggerHook: '0.6',
  reverse: false
})
  .setClassToggle(thirdCard, 'card-up-3') // Add class to header
  .addTo(controller);

//  Portfolio Title Scroll Animations
let scene8 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-title',
  triggerHook: '0.7',
  reverse: false
})
  .setClassToggle(portfolioTitle, 'port-float-up') // Add class to header
  .addTo(controller);
  

//  Portfolio 1st Card Animation
let scene9 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-grid-container',
  triggerHook: '0.65',
  reverse: false
})
  .setClassToggle(portCard1, 'port-rise-1') // Add class to header
  .addTo(controller);
  
//  Portfolio 2nd Card Animation
let scene10 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-grid-container',
  triggerHook: '0.65',
  reverse: false
})
  .setClassToggle(portCard2, 'port-rise-2') // Add class to header
  .addTo(controller);
  
//  Portfolio 3rd Card Animation
let scene11 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-grid-container',
  triggerHook: '0.35',
  reverse: false
})
  .setClassToggle(portCard3, 'port-rise-3') // Add class to header
  .addTo(controller);
  
//  Portfolio 4th Card Animation
let scene12 = new ScrollMagic.Scene({
  triggerElement: '.portfolio-grid-container',
  triggerHook: '0.35',
  reverse: false
})
  .setClassToggle(portCard4, 'port-rise-4') // Add class to header
  // scene12.addIndicators({
  //   name: 'Portfolio Title', // custom name for your scene
  //   colorStart: 'red',
  //   colorTrigger: 'green',
  //  })
  .addTo(controller);



  



//  Card Animation
projectCard1.addEventListener('mouseover', () => {
  document.querySelector('.port-img-1').classList.add('port-hover');
  document.querySelector('.port-info-1').classList.add('port-cont-hover');
  document.querySelector('.port-inner-1').classList.add('port-info-hover');
});

projectCard2.addEventListener('mouseover', () => {
  document.querySelector('.port-img-2').classList.add('port-hover');
  document.querySelector('.port-info-2').classList.add('port-cont-hover');
  document.querySelector('.port-inner-2').classList.add('port-info-hover');
});

projectCard3.addEventListener('mouseover', () => {
  document.querySelector('.port-img-3').classList.add('port-hover');
  document.querySelector('.port-info-3').classList.add('port-cont-hover');
  document.querySelector('.port-inner-3').classList.add('port-info-hover');
});

projectCard4.addEventListener('mouseover', () => {
  document.querySelector('.port-img-4').classList.add('port-hover');
  document.querySelector('.port-info-4').classList.add('port-cont-hover');
  document.querySelector('.port-inner-4').classList.add('port-info-hover');
});


//  Reverse Card Animation
projectCard1.addEventListener('mouseout', () => {
  document.querySelector('.port-img-1').classList.remove('port-hover');
  document.querySelector('.port-info-1').classList.remove('port-cont-hover');
  document.querySelector('.port-inner-1').classList.remove('port-info-hover');
});

projectCard2.addEventListener('mouseout', () => {
  document.querySelector('.port-img-2').classList.remove('port-hover');
  document.querySelector('.port-info-2').classList.remove('port-cont-hover');
  document.querySelector('.port-inner-2').classList.remove('port-info-hover');
});

projectCard3.addEventListener('mouseout', () => {
  document.querySelector('.port-img-3').classList.remove('port-hover');
  document.querySelector('.port-info-3').classList.remove('port-cont-hover');
  document.querySelector('.port-inner-3').classList.remove('port-info-hover');
});

projectCard4.addEventListener('mouseout', () => {
  document.querySelector('.port-img-4').classList.remove('port-hover');
  document.querySelector('.port-info-4').classList.remove('port-cont-hover');
  document.querySelector('.port-inner-4').classList.remove('port-info-hover');
});




// projectCard.forEach(i => {
//   i.addEventListener('mouseover', () => {
//     projectImage.classList.add('port-hover');
//     projectContent.classList.add('port-cont-hover');
//     projectText.classList.add('port-info-hover');
//   });
// })

// projectCard.forEach(i => {
//   i.addEventListener('mouseout', () => {
//     projectImage.classList.remove('port-hover');
//     projectContent.classList.remove('port-cont-hover');
//     projectText.classList.remove('port-info-hover');
//   })
// })




// projectCard.forEach(i => {
//   i.addEventListener('mouseover', () => {
//     for (let i = 0; i < projectCard.length; i++) {
//       projectImage[i].classList.add('port-hover');
//       projectContent[i].classList.add('port-cont-hover');
//       projectText[i].classList.add('port-info-hover');
//     }
    
//   })
// })