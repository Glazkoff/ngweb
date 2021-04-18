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

function isInElementZone(confetti, element, confettiHeight, confettiWidth) {
  let confettiXCenter = confetti.randomX + (Math.ceil(confettiWidth / 2))
  let confettiYCenter = confetti.randomY + (Math.ceil(confettiHeight / 2))
  let confettiXLeftBorder = confettiXCenter - Math.ceil(confettiHeight / 2)
  let confettiXRightBorder = confettiXCenter + Math.ceil(confettiHeight / 2)
  let confettiYTopBorder = confettiYCenter - Math.ceil(confettiHeight / 2)
  let confettiYBottomBorder = confettiYCenter + Math.ceil(confettiHeight / 2)

  let padding = confettiHeight
  let elementTopBorder = element.offsetTop - padding
  let elementBottomBorder = element.offsetTop + element.offsetHeight + padding
  let elementLeftBorder = element.offsetLeft - padding
  let elementRightBorder = element.offsetLeft + element.offsetWidth + padding

  return ((confettiYTopBorder > elementTopBorder && confettiYBottomBorder < elementBottomBorder) && (confettiXLeftBorder > elementLeftBorder && confettiXRightBorder < elementRightBorder))
}

function isCollideWithOtherConfetti(confetti, confettiPieceArr, confettiHeight, confettiWidth) {
  let confettiXCenter = confetti.randomX + (Math.ceil(confettiWidth / 2))
  let confettiYCenter = confetti.randomY + (Math.ceil(confettiHeight / 2))
  let confettiXLeftBorder = confettiXCenter - Math.ceil(confettiHeight / 2)
  let confettiXRightBorder = confettiXCenter + Math.ceil(confettiHeight / 2)
  let confettiYTopBorder = confettiYCenter - Math.ceil(confettiHeight / 2)
  let confettiYBottomBorder = confettiYCenter + Math.ceil(confettiHeight / 2)

  let a = {
    x: confettiXLeftBorder,
    x1: confettiXRightBorder,
    y: confettiYTopBorder,
    y1: confettiYBottomBorder
  }

let intersects = false; 
for (let index = 0; index < confettiPieceArr.length; index++) {
  const el = confettiPieceArr[index];
  let elXCenter = el.randomX + (Math.ceil(confettiWidth / 2))
  let elYCenter = el.randomY + (Math.ceil(confettiHeight / 2))
  let elXLeftBorder = elXCenter - Math.ceil(confettiHeight / 2)
  let elXRightBorder = elXCenter + Math.ceil(confettiHeight / 2)
  let elYTopBorder = elYCenter - Math.ceil(confettiHeight / 2)
  let elYBottomBorder = elYCenter + Math.ceil(confettiHeight / 2)

  let b = {
    x: elXLeftBorder,
    x1: elXRightBorder,
    y: elYTopBorder,
    y1: elYBottomBorder
  }
    if ((
    (
      (
        ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )
      ) && (
        ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )
      )
    )||(
      (
        ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )
      ) && (
        ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )
      )
    ))||(
    (
      (
        ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )
      ) && (
        ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )
      )
    )||(
      (
        ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )
      ) && (
        ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )
      )
    )
      )) {
      intersects = true;
      break;
    }
}
  // console.log('Hi!');
  return intersects;
}

window.onload = () => {

  function draw() {
    let svg = document.getElementById("main-sugar__svg");
    let heading = document.getElementById("main-heading");

    if (svg && heading) {

      let colors = ['#FF3322', '#F4DF60', '#68CD5F', '#9FD3F8'];
      let confettiPieceHeight = 80;
      let confettiPieceWidth = 16;

      let confettiPieceArr = []

      for (let index = 0; index < 30; index++) {
        let confetti
        let notAllRules = false;
        do {
          confetti = generateRandomConfettiObj(colors, svg.clientHeight, svg.clientWidth)  
          notAllRules = isInElementZone(confetti, heading, confettiPieceHeight, confettiPieceWidth) || isCollideWithOtherConfetti(confetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth)
        }
        while (notAllRules)

        confettiPieceArr.push(confetti)

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



