import { generateRandomConfettiObj, isInElementZone, isCollideWithOtherConfetti, getRelativeCoordinates, drawConfettiWithObj, deleteConfettiPiece } from './confetti-functions'
import GlidePortfolioSetup from './glide-portfolio'

let confettiPieceArr = []

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
    let notAllRules = isInElementZone(newConfetti, heading, confettiPieceHeight, confettiPieceWidth) || isCollideWithOtherConfetti(newConfetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth)
    if (!notAllRules) {
      newConfetti.DOMElement = drawConfettiWithObj(newConfetti, svg, confettiPieceWidth, confettiPieceHeight)
      confettiPieceArr.push(newConfetti)
      if (Math.random() < 0.5) {
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
})