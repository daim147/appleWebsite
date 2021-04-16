// Common js
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(cntrl => {
    cntrl.addEventListener('click', e=>{
        e.preventDefault()
    })
})

// CUBE

const cube = document.querySelector(".cube");
const controls = document.querySelector(".controls");
let x = 0;
let y = 0;
let z = 0;
let interval;
let spin = true;

// TOP X
document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
// BOTTOM X
document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

// LEFT Y

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});
// RIGHT Y

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});
// TOP Z

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});
// BOTTOM Z

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const playPause = () => {
  if (spin) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 50);
  } else {
    clearInterval(interval);
  }
};
playPause();

controls.addEventListener("mouseover", () => {
  spin = false;
  playPause();
});
controls.addEventListener("mouseout", () => {
  spin = true;
  playPause();
});
// END-CUBE

// SlideShow
const slideshowDiv = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(./images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add("change");
    document.querySelector(".slideshow").appendChild(div);
  }
};
slideshowDiv();

const divs = document.querySelectorAll(".slideshow div");

let a = 0;

const slideShows = () => {
  setInterval(() => {
    a++;
    divs.forEach((div) => {
      div.classList.remove("change");
    });
    if (a < divs.length) {
      divs[a].classList.add("change");
    } else {
      a = 0;
      divs[a].classList.add("change");
    }
  }, 5000);
};
slideShows();
// END-SlideShow

// Section 3

const section3Content = document.querySelector(".section-3-content");
window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

//  End Section 3

// section 4
const watchCases = document.querySelector(".watch-cases");
const watchBands = document.querySelector(".watch-bands");

const watchTop = document.querySelector('.watch-top-control')
const watchLeft = document.querySelector('.watch-left-control')
const watchRight = document.querySelector('.watch-right-control')
const watchBottom = document.querySelector('.watch-bottom-control')

let axixY = 0
let axixX = 0

const hideControl = ()=>{
    if(axixY === -280){
        watchTop.classList.add('hideControl')
    }else{
        watchTop.classList.remove('hideControl')
    }
    if(axixY === 280){
        watchBottom.classList.add('hideControl')
    }else{
        watchBottom.classList.remove('hideControl')
    }
    if(axixX === 280){
        watchRight.classList.add('hideControl')
    }else{
        watchRight.classList.remove('hideControl')
    }
    if(axixX === -280){
        watchLeft.classList.add('hideControl')
    }else{
        watchLeft.classList.remove('hideControl')
    }
}

watchTop.addEventListener('click', ()=>{
    watchCases.style.marginTop = `${axixY -= 70}rem`
    console.log
    hideControl()
})
watchBottom.addEventListener('click', ()=>{
    watchCases.style.marginTop = `${axixY += 70}rem`
    hideControl()

})
watchRight.addEventListener('click', ()=>{
    watchBands.style.marginRight = `${axixX += 70}rem`
    hideControl()

})
watchLeft.addEventListener('click', ()=>{
    watchBands.style.marginRight =`${axixX -= 70}rem`
    hideControl()

})




// End section 4
