export default function coinFrontPageInit() { 
  let moneyPanelElem = document.getElementById('money-panel')
  let modalElem = document.getElementById('money-prompt');
  if (moneyPanelElem){
  moneyPanelElem.addEventListener('mouseover', () => {
    if (modalElem) {
      if(modalElem.classList.contains('prompt-hide')) modalElem.classList.remove('prompt-hide')
      modalElem.classList.add('prompt-show')
    }
  })
    moneyPanelElem.addEventListener('mouseleave', () => {
      if (modalElem) {
        modalElem.classList.remove('prompt-show')
        modalElem.classList.add('prompt-hide')
    }
    })
    }
}