export function generateRandomConfettiObj(colors, clientHeight, clientWidth) {
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

export function isInElementZone(confetti, element, confettiHeight, confettiWidth) {
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

export function isCollideWithOtherConfetti(confetti, confettiPieceArr, confettiHeight, confettiWidth) {
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

export function getRelativeCoordinates(event, referenceElement) {
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

export function drawConfettiWithObj(confetti, svgElement, confettiPieceWidth, confettiPieceHeight) {
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
  newSvgChild.classList.add("confetti-piece__anim");
  let delayClassArr = ['confetti-piece__anim__delay1', 'confetti-piece__anim__delay2', 'confetti-piece__anim__delay3']
  let randomDelayClass = delayClassArr[Math.floor(Math.random() * delayClassArr.length)];
  newSvgChild.classList.add(randomDelayClass);
  svgElement.appendChild(newSvgChild);
  return newSvgChild;
}

export function deleteConfettiPiece(confettiIndex, confettiPieceArr) {
  let deleteElem = confettiPieceArr[confettiIndex]
  if (typeof deleteElem !== 'undefined') {
    let DOMElement = deleteElem.DOMElement
    confettiPieceArr.splice(confettiIndex, 1)
    setTimeout(() => {
      DOMElement.classList.add("confetti-piece-deleted");
      setTimeout(() => {
        if (DOMElement.parentNode) {
          DOMElement.parentNode.removeChild(DOMElement);
        }
      }, 500)
    }, 500);
    return true;
  }
  return false;
}

