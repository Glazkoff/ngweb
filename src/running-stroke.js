// export default function () { 

// function animateMarquee(el, duration, leftToRight) {
//   const innerEl = el.querySelector('.running-stroke');
//   const innerWidth = innerEl.offsetWidth;
//   const cloneEl = innerEl.cloneNode(true);
//   el.appendChild(cloneEl);
  
//   let start = performance.now();
//   let progress;
//   let translateX;

//   requestAnimationFrame(function step(now) {
//     progress = (now - start) / duration;
 
//     if (progress > 1) {
//     	progress %= 1;
//       start = now;
//     }

//     translateX = innerWidth * progress;
    
//     if (leftToRight == true || leftToRight == undefined) {
//       innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
//       cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
//     } else {
//      innerEl.style.transform = `translate3d(+${translateX}px, 0 , 0)`;
//     cloneEl.style.transform = `translate3d(${translateX}px, 0 , 0)`;
//     }
    
//     requestAnimationFrame(step);
//   });
// }
// const programming = document.querySelector('#programming');  

//   animateMarquee(programming, 10000);
  
//   const marketing = document.querySelector('#marketing');
//   animateMarquee(marketing, 10000, false);

//   }