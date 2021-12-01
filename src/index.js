import './less/index.less'

// Your code goes here!

// double click
const funBusLogo = document.querySelector('h1.logo-heading');
funBusLogo.addEventListener('dblclick', function(event){
    console.log('FUN! .....BUS!');
})

// mouseover
const homeNavLink = document.querySelector('a.nav-link');
homeNavLink.addEventListener('mouseover', function(event){
    alert('hey......are you having fun?')
});

// keydown
function escKey(event) {
    if (event.key === 'Escape'){
       alert(`don't leave!`);
    }
}
document.addEventListener('keydown', escKey);

//copy "Let's Go!" title
const noCopyPic = document.querySelector('.text-content h2');
noCopyPic.addEventListener('copy', () => {
    alert('10-4 copy that')
});

//wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img.img-fluid.rounded');
  el.onwheel = zoom;

  //scroll
    let ticking = false;
document.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      ticking = false;
    });
    ticking = true;
  }
  console.log(`You're Scrolling!`)
});


//click
const clickHeader = document.querySelector('header');

clickHeader.addEventListener('click', (event) => {
  event.target.style.background = 'lightpink';
  
});


//select // couldn't figure it out


document.addEventListener('select', function(){
    console.log(`You've Selected something!`);

});


//resize // couldn't figure this one out either kept getting typeError textContent null


//load // also couldn't figure this one out, tried console logging the window when it loads but didn't get anything