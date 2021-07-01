/*! For license information please see frontPage.js.LICENSE */
(()=>{"use strict";var __webpack_modules__={"./src/coin-functions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ coinFrontPageInit)\n/* harmony export */ });\nfunction coinFrontPageInit() { \r\n  let moneyPanelElem = document.getElementById('money-panel')\r\n  let modalElem = document.getElementById('money-prompt');\r\n  if (moneyPanelElem){\r\n  moneyPanelElem.addEventListener('mouseover', () => {\r\n    if (modalElem) {\r\n      if(modalElem.classList.contains('prompt-hide')) modalElem.classList.remove('prompt-hide')\r\n      modalElem.classList.add('prompt-show')\r\n    }\r\n  })\r\n    moneyPanelElem.addEventListener('mouseleave', () => {\r\n      if (modalElem) {\r\n        modalElem.classList.remove('prompt-show')\r\n        modalElem.classList.add('prompt-hide')\r\n    }\r\n    })\r\n    }\r\n}\n\n//# sourceURL=webpack://ngwebstudio/./src/coin-functions.js?")},"./src/confetti-functions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "generateRandomConfettiObj": () => (/* binding */ generateRandomConfettiObj),\n/* harmony export */   "isInElementZone": () => (/* binding */ isInElementZone),\n/* harmony export */   "isCollideWithOtherConfetti": () => (/* binding */ isCollideWithOtherConfetti),\n/* harmony export */   "getRelativeCoordinates": () => (/* binding */ getRelativeCoordinates),\n/* harmony export */   "drawConfettiWithObj": () => (/* binding */ drawConfettiWithObj),\n/* harmony export */   "deleteConfettiPiece": () => (/* binding */ deleteConfettiPiece)\n/* harmony export */ });\nfunction generateRandomConfettiObj(colors, clientHeight, clientWidth) {\r\n  let randomColor = colors[Math.floor(Math.random() * colors.length)];\r\n  let randomX = Math.ceil(Math.random()*clientWidth)\r\n  let randomY = Math.ceil(Math.random()*clientHeight)\r\n  let randomAngle = Math.ceil(Math.random() * 360)\r\n\r\n  return {\r\n    randomX,\r\n    randomY,\r\n    randomAngle,\r\n    randomColor\r\n  }\r\n}\r\n\r\nfunction isInElementZone(confetti, element, confettiHeight, confettiWidth) {\r\n  let confettiXCenter = confetti.randomX + (Math.ceil(confettiWidth / 2))\r\n  let confettiYCenter = confetti.randomY + (Math.ceil(confettiHeight / 2))\r\n  let confettiXLeftBorder = confettiXCenter - Math.ceil(confettiHeight / 2)\r\n  let confettiXRightBorder = confettiXCenter + Math.ceil(confettiHeight / 2)\r\n  let confettiYTopBorder = confettiYCenter - Math.ceil(confettiHeight / 2)\r\n  let confettiYBottomBorder = confettiYCenter + Math.ceil(confettiHeight / 2)\r\n\r\n  let padding = confettiHeight\r\n  let elementTopBorder = element.offsetTop - padding\r\n  let elementBottomBorder = element.offsetTop + element.offsetHeight + padding\r\n  let elementLeftBorder = element.offsetLeft - padding\r\n  let elementRightBorder = element.offsetLeft + element.offsetWidth + padding\r\n\r\n  return ((confettiYTopBorder > elementTopBorder && confettiYBottomBorder < elementBottomBorder) && (confettiXLeftBorder > elementLeftBorder && confettiXRightBorder < elementRightBorder))\r\n}\r\n\r\nfunction isCollideWithOtherConfetti(confetti, confettiPieceArr, confettiHeight, confettiWidth) {\r\n  let confettiXCenter = confetti.randomX + (Math.ceil(confettiWidth / 2))\r\n  let confettiYCenter = confetti.randomY + (Math.ceil(confettiHeight / 2))\r\n  let confettiXLeftBorder = confettiXCenter - Math.ceil(confettiHeight / 2)\r\n  let confettiXRightBorder = confettiXCenter + Math.ceil(confettiHeight / 2)\r\n  let confettiYTopBorder = confettiYCenter - Math.ceil(confettiHeight / 2)\r\n  let confettiYBottomBorder = confettiYCenter + Math.ceil(confettiHeight / 2)\r\n\r\n  let a = {\r\n    x: confettiXLeftBorder,\r\n    x1: confettiXRightBorder,\r\n    y: confettiYTopBorder,\r\n    y1: confettiYBottomBorder\r\n  }\r\n\r\nlet intersects = false; \r\nfor (let index = 0; index < confettiPieceArr.length; index++) {\r\n  const el = confettiPieceArr[index];\r\n  let elXCenter = el.randomX + (Math.ceil(confettiWidth / 2))\r\n  let elYCenter = el.randomY + (Math.ceil(confettiHeight / 2))\r\n  let elXLeftBorder = elXCenter - Math.ceil(confettiHeight / 2)\r\n  let elXRightBorder = elXCenter + Math.ceil(confettiHeight / 2)\r\n  let elYTopBorder = elYCenter - Math.ceil(confettiHeight / 2)\r\n  let elYBottomBorder = elYCenter + Math.ceil(confettiHeight / 2)\r\n\r\n  let b = {\r\n    x: elXLeftBorder,\r\n    x1: elXRightBorder,\r\n    y: elYTopBorder,\r\n    y1: elYBottomBorder\r\n  }\r\n    if ((\r\n    (\r\n      (\r\n        ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )\r\n      ) && (\r\n        ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )\r\n      )\r\n    )||(\r\n      (\r\n        ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )\r\n      ) && (\r\n        ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )\r\n      )\r\n    ))||(\r\n    (\r\n      (\r\n        ( a.x>=b.x && a.x<=b.x1 )||( a.x1>=b.x && a.x1<=b.x1  )\r\n      ) && (\r\n        ( b.y>=a.y && b.y<=a.y1 )||( b.y1>=a.y && b.y1<=a.y1 )\r\n      )\r\n    )||(\r\n      (\r\n        ( b.x>=a.x && b.x<=a.x1 )||( b.x1>=a.x && b.x1<=a.x1  )\r\n      ) && (\r\n        ( a.y>=b.y && a.y<=b.y1 )||( a.y1>=b.y && a.y1<=b.y1 )\r\n      )\r\n    )\r\n      )) {\r\n      intersects = true;\r\n      break;\r\n    }\r\n}\r\n  return intersects;\r\n}\r\n\r\nfunction getRelativeCoordinates(event, referenceElement) {\r\n  const position = {\r\n    x: event.pageX,\r\n    y: event.pageY\r\n  };\r\n  const offset = {\r\n    left: referenceElement.offsetLeft,\r\n    top: referenceElement.offsetTop\r\n  };\r\n  let reference = referenceElement.offsetParent;\r\n  while (reference) {\r\n    offset.left += reference.offsetLeft;\r\n    offset.top += reference.offsetTop;\r\n    reference = reference.offsetParent;\r\n  }\r\n  return {\r\n    x: position.x - offset.left,\r\n    y: position.y - offset.top,\r\n  };\r\n}\r\n\r\nfunction drawConfettiWithObj(confetti, svgElement, confettiPieceWidth, confettiPieceHeight) {\r\n  let newSvgChild = document.createElementNS("http://www.w3.org/2000/svg", \'rect\');\r\n  newSvgChild.setAttribute(\'fill\', confetti.randomColor);\r\n  newSvgChild.setAttribute("width", confettiPieceWidth+"");\r\n  newSvgChild.setAttribute("height", confettiPieceHeight+"");\r\n  newSvgChild.setAttribute("x", confetti.randomX + "");\r\n  newSvgChild.setAttribute("y", confetti.randomY + "");\r\n  newSvgChild.setAttribute("transform", "rotate(" + confetti.randomAngle + ")");\r\n  newSvgChild.setAttribute("transform-box", "fill-box");\r\n  newSvgChild.setAttribute("transform-origin", "center center 0");\r\n  newSvgChild.classList.add("confetti-piece");\r\n  newSvgChild.classList.add("confetti-piece__anim");\r\n  let delayClassArr = [\'confetti-piece__anim__delay1\', \'confetti-piece__anim__delay2\', \'confetti-piece__anim__delay3\']\r\n  let randomDelayClass = delayClassArr[Math.floor(Math.random() * delayClassArr.length)];\r\n  newSvgChild.classList.add(randomDelayClass);\r\n  svgElement.appendChild(newSvgChild);\r\n  return newSvgChild;\r\n}\r\n\r\nfunction deleteConfettiPiece(confettiIndex, confettiPieceArr) {\r\n  let deleteElem = confettiPieceArr[confettiIndex]\r\n  if (typeof deleteElem !== \'undefined\') {\r\n    let DOMElement = deleteElem.DOMElement\r\n    confettiPieceArr.splice(confettiIndex, 1)\r\n    setTimeout(() => {\r\n      DOMElement.classList.add("confetti-piece-deleted");\r\n      setTimeout(() => {\r\n        if (DOMElement.parentNode) {\r\n          DOMElement.parentNode.removeChild(DOMElement);\r\n        }\r\n      }, 500)\r\n    }, 500);\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://ngwebstudio/./src/confetti-functions.js?')},"./src/form-animation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n  let backgroundSize = [0, 0, 0, 0];\r\n  let backgroundForm = document.querySelector('.fill');\r\n  let form = document.forms.contact;\r\n  let elementName = form.elements.name;\r\n  let elementPhone = form.elements.phone;\r\n  let elementEmail = form.elements.email;\r\n  let elementAgreement = form.elements.agreement;\r\n\r\n  elementName.onchange = function () {  \r\n    let checkName = /^[A-Za-zА-Яа-яёЁ -]+$/;\r\n    if (checkName.test(elementName.value)) {\r\n      if (backgroundSize[0]!=25) backgroundSize[0] = 25;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementName.classList.add('sucsess');\r\n    }\r\n    else {\r\n      if (backgroundSize[0]!=0) backgroundSize[0] = 0;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementName.classList.add('invalid');\r\n    }\r\n  };\r\n\r\n\r\n  elementPhone.onchange = function () {\r\n    if (elementPhone.value.trim() == \"\" || elementPhone.value.trim() == \"+7\") {\r\n      if (backgroundSize[1]!=0) backgroundSize[1] = 0;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementPhone.classList.add('invalid');\r\n    } \r\n    else {\r\n      if (backgroundSize[1]!=25) backgroundSize[1] = 25;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementPhone.classList.add('sucsess');\r\n    }\r\n    };\r\n\r\n\r\n  elementEmail.onchange = function() {\r\n    let checkEmail =/([^\\?!=<>()\\[\\]\\\\.,;:\\+\\s@\"]+(\\.[^\\?!=<>()\\[\\]\\\\.,;:\\+\\s@\"]+)*)@(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,})/;\r\n    if (checkEmail.test(elementEmail.value)) {\r\n      if (backgroundSize[2]!=25) backgroundSize[2] = 25;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementEmail.classList.add('sucsess');\r\n    }\r\n    else {\r\n      if (backgroundSize[2]!=0) backgroundSize[2] = 0;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      // elementEmail.classList.add('invalid');\r\n    }\r\n  };\r\n\r\n \r\n\r\n  elementAgreement.onchange = function() {\r\n    if (this.checked) {\r\n    if (backgroundSize[4]!=25) backgroundSize[3] = 25;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n      } else {\r\n      if (backgroundSize[4]!=0) backgroundSize[3] = 0;\r\n      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;\r\n    }\r\n    }; \r\n\r\n\r\n  form.onsubmit = function() {\r\n  console.log('Форма отправлена!');\r\n};\r\n}\r\n\n\n//# sourceURL=webpack://ngwebstudio/./src/form-animation.js?")},"./src/front-page.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _confetti_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confetti-functions */ "./src/confetti-functions.js");\n/* harmony import */ var _form_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-animation */ "./src/form-animation.js");\n/* harmony import */ var _coin_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coin-functions */ "./src/coin-functions.js");\n/* harmony import */ var _phone_mask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phone-mask.js */ "./src/phone-mask.js");\n\r\n\r\n\r\n\r\n// import GlidePortfolioSetup from \'./glide-portfolio.js\'\r\n\r\n\r\nlet confettiPieceArr = []\r\nlet confettiBottomBorderSizePx = 80;\r\n\r\nwindow.addEventListener(\'load\', () => {\r\n  let colors = [\'#FF3322\', \'#F4DF60\', \'#68CD5F\', \'#9FD3F8\'];\r\n  let confettiPieceHeight = 80;\r\n  let confettiPieceWidth = 16;\r\n\r\n  let svg = document.getElementById("main-sugar__svg");\r\n  let heading = document.getElementById("main-heading");\r\n  let mainSugar = document.getElementById("main-sugar");\r\n\r\n  mainSugar.onmousemove = (e) => {\r\n    let coordinates = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.getRelativeCoordinates)(e, mainSugar)\r\n    let newConfetti = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.generateRandomConfettiObj)(colors, svg.clientHeight, svg.clientWidth)\r\n    newConfetti.randomX = coordinates.x\r\n    newConfetti.randomY = coordinates.y\r\n    let notAllRules = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.isInElementZone)(newConfetti, heading, confettiPieceHeight, confettiPieceWidth) || (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.isCollideWithOtherConfetti)(newConfetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth) || (newConfetti.randomY > svg.clientHeight - confettiBottomBorderSizePx)\r\n    if (!notAllRules) {\r\n      newConfetti.DOMElement = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.drawConfettiWithObj)(newConfetti, svg, confettiPieceWidth, confettiPieceHeight)\r\n      confettiPieceArr.push(newConfetti)\r\n      if (Math.random() < 0.5) {\r\n        let randomIndex = Math.floor(confettiPieceArr.length * Math.random())\r\n        // deleteConfettiPiece(randomIndex, confettiPieceArr)\r\n      }\r\n    }\r\n  }\r\n\r\n  setInterval(() => {\r\n    function getRandomInt(min, max) {\r\n      return Math.floor(Math.random() * (max - min + 1) + min);\r\n    }\r\n    let deleteCount = getRandomInt(1, 2);\r\n    let drawCount = getRandomInt(1, 2);\r\n    for (let index = 0; index < deleteCount; index++) {\r\n      let randomIndex = Math.floor(confettiPieceArr.length * Math.random())\r\n      ;(0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.deleteConfettiPiece)(randomIndex, confettiPieceArr)\r\n    }\r\n    for (let index = 0; index < drawCount; index++) {\r\n      draw(false)\r\n    }\r\n  }, 1000)\r\n\r\n  setInterval(() => {\r\n    let animationDuration = 10000;\r\n    let animationEasing = \'linear\'\r\n    confettiPieceArr.map(el => {\r\n      if (!el.isAnimated) {\r\n        el.isAnimated = true;\r\n        let animation;\r\n        if (el.DOMElement.classList.contains("confetti-piece__anim__delay1")) {\r\n          animation = el.DOMElement.animate([\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],\r\n            {\r\n              duration: animationDuration,\r\n              iterations: Infinity,\r\n              easing: animationEasing,\r\n              delay: 500\r\n            }\r\n          )\r\n        } else if (el.DOMElement.classList.contains("confetti-piece__anim__delay2")) {\r\n          animation = el.DOMElement.animate([\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],\r\n            {\r\n              duration: animationDuration,\r\n              iterations: Infinity,\r\n              easing: animationEasing,\r\n              delay: 1000\r\n            }\r\n          )\r\n        } else if (el.DOMElement.classList.contains("confetti-piece__anim__delay3")) {\r\n          animation = el.DOMElement.animate([\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(-20px) rotate(" + (el.randomAngle - 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" },\r\n            { transform: "translatey(20px) rotate(" + (el.randomAngle + 20) + "deg)" },\r\n            { transform: "translatey(0px) rotate(" + (el.randomAngle) + "deg)" }],\r\n            {\r\n              duration: animationDuration,\r\n              iterations: Infinity,\r\n              easing: animationEasing,\r\n              delay: 1500\r\n            }\r\n          )\r\n        }\r\n        if (animation) {\r\n          el.DOMElement.addEventListener(\'mouseenter\', () => {\r\n            animation.pause();\r\n          })\r\n          el.DOMElement.addEventListener(\'mouseleave\', () => {\r\n            animation.play();\r\n          })\r\n        }\r\n        el.DOMElement.addEventListener(\'click\', () => {\r\n          if (el.isClicked == 1) {\r\n            confettiPieceArr.forEach(el => {\r\n              el.DOMElement.setAttribute("y", svg.clientHeight+100+"")\r\n              ;(0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.deleteConfettiPiece)(el.index, confettiPieceArr)\r\n            })\r\n          } else {\r\n            el.isClicked = 1\r\n          }\r\n        })\r\n\r\n      }\r\n    })\r\n  }, 500);\r\n\r\n  function getElementRotateAngle(el) {\r\n    var st = window.getComputedStyle(el, null);\r\n    var tr = st.getPropertyValue("-webkit-transform") ||\r\n      st.getPropertyValue("-moz-transform") ||\r\n      st.getPropertyValue("-ms-transform") ||\r\n      st.getPropertyValue("-o-transform") ||\r\n      st.getPropertyValue("transform") ||\r\n      "FAIL";\r\n\r\n    // console.log(\'Matrix: \' + tr);\r\n\r\n    let values = tr.split(\'(\')[1].split(\')\')[0].split(\',\');\r\n    let a = values[0];\r\n    let b = values[1];\r\n    let c = values[2];\r\n    let d = values[3];\r\n\r\n    let scale = Math.sqrt(a * a + b * b);\r\n\r\n    // console.log(\'Scale: \' + scale);\r\n\r\n    // arc sin, convert from radians to degrees, round\r\n    let sin = b / scale;\r\n    // next line works for 30deg but not 130deg (returns 50);\r\n    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));\r\n    let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));\r\n\r\n    // console.log(\'Rotate: \' + angle + \'deg\');\r\n\r\n    return angle;\r\n  }\r\n\r\n  function draw(multiple = true) {\r\n    if (svg && heading) {\r\n      let iterations = 16;\r\n      let maxSquare = (svg.clientHeight * svg.clientWidth - heading.clientHeight * heading.clientWidth) / (confettiPieceHeight * confettiPieceHeight)\r\n      maxSquare <= 10 ? maxSquare = 3 : maxSquare;\r\n      let maxIterations = Math.floor(maxSquare / 4)\r\n      if (multiple) {\r\n        iterations = maxIterations\r\n      } else {\r\n        iterations = 1;\r\n      }\r\n      for (let index = 0; index < iterations; index++) {\r\n        if (confettiPieceArr.length < maxIterations) {\r\n          let confetti\r\n          let notAllRules = false;\r\n          do {\r\n            confetti = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.generateRandomConfettiObj)(colors, svg.clientHeight - confettiBottomBorderSizePx, svg.clientWidth)\r\n            notAllRules = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.isInElementZone)(confetti, heading, confettiPieceHeight, confettiPieceWidth) || (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.isCollideWithOtherConfetti)(confetti, confettiPieceArr, confettiPieceHeight, confettiPieceWidth)\r\n          }\r\n          while (notAllRules)\r\n\r\n          confetti.DOMElement = (0,_confetti_functions__WEBPACK_IMPORTED_MODULE_0__.drawConfettiWithObj)(confetti, svg, confettiPieceWidth, confettiPieceHeight)\r\n\r\n          confettiPieceArr.push(confetti)\r\n        }\r\n      }\r\n\r\n    }\r\n  }\r\n\r\n  draw()\r\n\r\n  let timeOut = false;\r\n  window.addEventListener(\'resize\', function (event) {\r\n    if (!timeOut) {\r\n      timeOut = true;\r\n      let svg = document.getElementById("main-sugar__svg");\r\n      svg.textContent = \'\';\r\n      confettiPieceArr = [];\r\n      draw();\r\n      setTimeout(() => {\r\n        timeOut = false;\r\n      }, 50);\r\n    }\r\n  });\r\n\r\n  // GlidePortfolioSetup()\r\n  (0,_form_animation__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n  ;(0,_coin_functions__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n  ;(0,_phone_mask_js__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n})\n\n//# sourceURL=webpack://ngwebstudio/./src/front-page.js?')},"./src/phone-mask.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ phoneMask)\n/* harmony export */ });\nfunction phoneMask() {\r\n  var input = document.getElementById(\'phone\');\r\n      function setCursorPosition(pos, elem) {\r\n      elem.focus();\r\n      if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\r\n      else if (elem.createTextRange) {\r\n        var range = elem.createTextRange();\r\n        range.collapse(true);\r\n        range.moveEnd("character", pos);\r\n        range.moveStart("character", pos);\r\n        range.select()\r\n      }\r\n    }\r\n    function mask(event) {\r\n      var matrix = "+7 (___) ___-__-__",\r\n        i = 0,\r\n        def = matrix.replace(/\\D/g, ""),\r\n        val = this.value.replace(/\\D/g, "");\r\n      if (def.length >= val.length) val = def;\r\n      this.value = matrix.replace(/./g, function (a) {\r\n        return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a\r\n      });\r\n      if (event.type == "blur") {\r\n        if (this.value.length == 2) this.value = ""\r\n      } else setCursorPosition(this.value.length, this)\r\n    };\r\n    input.addEventListener("input", mask, false);\r\n    input.addEventListener("focus", mask, false);\r\n    input.addEventListener("blur", mask, false);\r\n}\n\n//# sourceURL=webpack://ngwebstudio/./src/phone-mask.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/front-page.js")})();