import { generateRandomConfettiObj, isInElementZone, isCollideWithOtherConfetti, getRelativeCoordinates, drawConfettiWithObj, deleteConfettiPiece } from './confetti-functions'
import GlidePortfolioSetup from './glide-portfolio'

let confettiPieceArr = []
let confettiBottomBorderSizePx = 80;

window.addEventListener('load', () => {
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
    let notAllRules = isInElementZone(newConfetti, heading, confettiPieceHeight, confettiPieceWidth) || isCollideWithOtherConfetti(newConfetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth) || (newConfetti.randomY > svg.clientHeight - confettiBottomBorderSizePx)
    if (!notAllRules) {
      newConfetti.DOMElement = drawConfettiWithObj(newConfetti, svg, confettiPieceWidth, confettiPieceHeight)
      confettiPieceArr.push(newConfetti)
      if (Math.random() < 0.5) {
        let randomIndex = Math.floor(confettiPieceArr.length * Math.random())
        // deleteConfettiPiece(randomIndex, confettiPieceArr)
      }
    }
  }

  setInterval(() => {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let deleteCount = getRandomInt(1,2);
    let drawCount = getRandomInt(1,2);
    for (let index = 0; index < deleteCount; index++) {
      let randomIndex = Math.floor(confettiPieceArr.length * Math.random())
      deleteConfettiPiece(randomIndex, confettiPieceArr)
    }
    for (let index = 0; index < drawCount; index++) {
      draw(false)
    } 
  }, 1000)

  setInterval(() => {
    let animationDuration = 10000;
    let animationEasing = 'linear'
    confettiPieceArr.map(el => {
      if (!el.isAnimated) {
        el.isAnimated = true;
        if (el.DOMElement.classList.contains("confetti-piece__anim__delay1")) {
          el.DOMElement.animate([
            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
            { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },
            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
            { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },
            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],
            {
              duration: animationDuration,
              iterations: Infinity,
              easing: animationEasing,
              delay: 500
            }
          )
        } else if (el.DOMElement.classList.contains("confetti-piece__anim__delay2")) {
            el.DOMElement.animate([
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
              { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
              { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],
              {
                duration: animationDuration,
                iterations: Infinity,
                easing: animationEasing,
                delay: 1000
              }
            )
        } else if (el.DOMElement.classList.contains("confetti-piece__anim__delay3")) {
            el.DOMElement.animate([
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
              { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },
              { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },
              { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],
              {
                duration: animationDuration,
                iterations: Infinity,
                easing: animationEasing,
                delay: 1500
              }
            )
        }

      }
    })
  }, 500);

  function getElementRotateAngle(el) {
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
      st.getPropertyValue("-moz-transform") ||
      st.getPropertyValue("-ms-transform") ||
      st.getPropertyValue("-o-transform") ||
      st.getPropertyValue("transform") ||
      "FAIL";

    console.log('Matrix: ' + tr);

    let values = tr.split('(')[1].split(')')[0].split(',');
    let a = values[0];
    let b = values[1];
    let c = values[2];
    let d = values[3];

    let scale = Math.sqrt(a * a + b * b);

    console.log('Scale: ' + scale);

    // arc sin, convert from radians to degrees, round
    let sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    console.log('Rotate: ' + angle + 'deg');

    return angle;
  }

  function draw(multiple=true) {
    if (svg && heading) {
      let iterations = 16;
      if (multiple) {

        let maxSquare = (svg.clientHeight * svg.clientWidth - heading.clientHeight * heading.clientWidth) / (confettiPieceHeight * confettiPieceHeight)
        maxSquare <= 10 ? maxSquare = 3 : maxSquare;
        iterations = Math.floor(maxSquare / 3)
      } else {
        iterations = 1;
      }
     
      for (let index = 0; index < iterations; index++) {
        let confetti
        let notAllRules = false;
        do {
          confetti = generateRandomConfettiObj(colors, svg.clientHeight - confettiBottomBorderSizePx, svg.clientWidth)
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
})