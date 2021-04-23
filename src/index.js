/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";

import "../sass/style.scss"

import GlidePortfolioSetup from './glide-portfolio'
import CursorSetup from './cursor'

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
  return intersects;
}

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY
  };
  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop
  };
  let reference = referenceElement.offsetParent;
  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }
  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

function drawConfettiWithObj(confetti, svgElement, confettiPieceWidth, confettiPieceHeight) {
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
  svgElement.appendChild(newSvgChild);
  return newSvgChild;
}

function deleteConfettiPiece(confettiIndex, confettiPieceArr) {
  let deleteElem = confettiPieceArr[confettiIndex]
  if (typeof deleteElem !== 'undefined') {
    let DOMElement = deleteElem.DOMElement
    setTimeout(() => {
      DOMElement.classList.add("confetti-piece-deleted");
      setTimeout(() => {
        DOMElement.remove();
        confettiPieceArr.splice(confettiIndex,1)
      }, 500)
    }, 500);
    // DOMElement.remove();
  }
}

let confettiPieceArr = []


window.onload = () => {

  CursorSetup();

  let colors = ['#FF3322', '#F4DF60', '#68CD5F', '#9FD3F8'];
  let confettiPieceHeight = 80;
  let confettiPieceWidth = 16;

  let svg = document.getElementById("main-sugar__svg");
  let heading = document.getElementById("main-heading");
  let mainSugar = document.getElementById("main-sugar");

  mainSugar.onmousemove = (e) => {
    let coordinates = getRelativeCoordinates(e, mainSugar)
    let newConfetti = generateRandomConfettiObj(colors, svg.clientHeight, svg.clientWidth)
    newConfetti.randomX = coordinates.x
    newConfetti.randomY = coordinates.y
    let notAllRules = isInElementZone(newConfetti, heading, confettiPieceHeight, confettiPieceWidth) || isCollideWithOtherConfetti(newConfetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth)
    if (!notAllRules) {
      newConfetti.DOMElement = drawConfettiWithObj(newConfetti, svg, confettiPieceWidth, confettiPieceHeight)
      confettiPieceArr.push(newConfetti)
      if (Math.random()<0.5) {
        let randomIndex = Math.floor(confettiPieceArr.length * Math.random())
        deleteConfettiPiece(randomIndex, confettiPieceArr)
      }
    }
  }

  setInterval(() => {
    let randomIndex = Math.floor(confettiPieceArr.length * Math.random())
    deleteConfettiPiece(randomIndex, confettiPieceArr)
  }, 1000);

  function draw() {

    if (svg && heading) {

      let iterations = 16;
      let maxSquare = (svg.clientHeight * svg.clientWidth - heading.clientHeight * heading.clientWidth) / (confettiPieceHeight * confettiPieceHeight)
      maxSquare <= 10 ? maxSquare = 3 : maxSquare;
      iterations = Math.floor(maxSquare / 3)
      for (let index = 0; index < iterations; index++) {
        let confetti
        let notAllRules = false;
        do {
          confetti = generateRandomConfettiObj(colors, svg.clientHeight, svg.clientWidth)  
          notAllRules = isInElementZone(confetti, heading, confettiPieceHeight, confettiPieceWidth) || isCollideWithOtherConfetti(confetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth)
        }
        while (notAllRules)

        confetti.DOMElement = drawConfettiWithObj(confetti, svg, confettiPieceWidth, confettiPieceHeight)

        confettiPieceArr.push(confetti)

      }
    }
  }

  draw()

  let timeOut = false;
  window.addEventListener('resize', function (event) {
    if (!timeOut) {
      timeOut = true;
      let svg = document.getElementById("main-sugar__svg");
      svg.textContent = '';
      confettiPieceArr = [];
      draw();
      setTimeout(() => {
        timeOut = false;
      }, 50);
    }
  });

  GlidePortfolioSetup()

}



