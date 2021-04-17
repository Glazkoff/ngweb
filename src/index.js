/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";

import "../sass/style.scss"

import Glide from '@glidejs/glide'

function generateRandomConfettiObj(colors, clientHeight, clientWidth) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  let randomX = Math.ceil(Math.random()*clientWidth)
  let randomY = Math.ceil(Math.random()*clientHeight)
  let randomAngle = Math.ceil(Math.random() * 360)

  return {
    randomX,
    randomY,
    randomAngle,
    randomColor
  }
}

window.onload = () => {
  


  function draw() {
    let svg = document.getElementById("main-sugar__svg");
    if (svg) {

      let colors = ['#FF3322', '#F4DF60', '#68CD5F', '#9FD3F8'];
      let confettiPieceHeight = 80;
      let confettiPieceWidth = 16;

      let confettiPieceArr = []
      for (let index = 0; index < 1; index++) {
        let confetti = generateRandomConfettiObj(colors, svg.clientHeight, svg.clientWidth)

        let xa1 = confetti.randomX + (confetti.randomX - Math.ceil(confetti.randomX / 2) - confetti.randomX) * Math.cos(confetti.randomAngle) - (confetti.randomY - confettiPieceWidth - confetti.randomY) * Math.sin(confetti.randomAngle)
        console.log(confetti.randomX, xa1);

        var intersects = function ( a, b ) {
          return ( a.y < b.y1 || a.y1 > b.y || a.x1 < b.x || a.x > b.x1 );
        }

        let newSvgChild = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        newSvgChild.setAttribute('fill', confetti.randomColor);
        newSvgChild.setAttribute("width", confettiPieceWidth+"");
        newSvgChild.setAttribute("height", confettiPieceHeight+"");
        newSvgChild.setAttribute("x", confetti.randomX + "");
        newSvgChild.setAttribute("y", confetti.randomY + "");
        newSvgChild.setAttribute("transform", "rotate(" + confetti.randomAngle + ")");
        newSvgChild.setAttribute("transform-box", "fill-box");
        newSvgChild.setAttribute("transform-origin", "center center 0");
        newSvgChild.classList.add("confetti-piece");
        
        confettiPieceArr.push(confetti)
        svg.appendChild(newSvgChild);
      }
    }
  }

  draw()

  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView:4,
    gap: 16,
    breakpoints: {
      500: {
        perView: 1
      },
      800: {
        perView: 2
      },
      990: {
        perView: 3
      }
    }
  }).mount()

  
}



