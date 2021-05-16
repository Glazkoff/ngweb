export default function () {
  let backgroundSize = [0, 0, 0, 0];
  let backgroundForm = document.querySelector('.fill');
  let form = document.forms.contact;
  let elementName = form.elements.name;
  let elementPhone = form.elements.phone;
  let elementEmail = form.elements.email;
  let elementAgreement = form.elements.agreement;

  elementName.onblur = function () {  
    let checkName =/^[A-Za-zА-Яа-яёЁ -]*$/;
    if (checkName.test(elementName.value)) {
      if (backgroundSize[0]!=25) backgroundSize[0] += 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementName.classList.add('sucsess');
    }
    else {
      if (backgroundSize[0]!=0) backgroundSize[0] -= 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementName.classList.add('invalid');
    }
  };

  elementName.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    }
    if (this.classList.contains('sucsess')) {
      this.classList.remove('sucsess');
    }
  };

  elementPhone.onblur = function() {
    if (elementPhone.value.trim() == "") {
      if (backgroundSize[1]!=0) backgroundSize[1] -= 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementPhone.classList.add('invalid');
    } 
    else {
      if (backgroundSize[1]!=25) backgroundSize[1] += 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementPhone.classList.add('sucsess');
    }
    };

  elementPhone.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    }
    if (this.classList.contains('sucsess')) {
    this.classList.remove('sucsess');
    }
  };

  elementEmail.onblur = function() {
    let checkEmail =/([^\?!=<>()\[\]\\.,;:\+\s@"]+(\.[^\?!=<>()\[\]\\.,;:\+\s@"]+)*)@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})/;
    if (checkEmail.test(elementEmail.value)) {
      if (backgroundSize[2]!=25) backgroundSize[2] += 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementEmail.classList.add('sucsess');
    }
    else {
      if (backgroundSize[2]!=0) backgroundSize[2] -= 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      elementEmail.classList.add('invalid');
    }
  };

  elementEmail.onfocus = function() {
    if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    }
    if (this.classList.contains('sucsess')) {
    this.classList.remove('sucsess');
    }
  };

  elementAgreement.onclick = function() {
    if (this.checked) {
    if (backgroundSize[4]!=25) backgroundSize[3] += 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      } else {
      if (backgroundSize[4]!=0) backgroundSize[3] -= 25;
      backgroundForm.style.width = `${backgroundSize[0]+backgroundSize[1]+backgroundSize[2]+backgroundSize[3]}%`;
      
    }
    }; 


  form.onsubmit = function() {
  console.log('Форма отправлена!');
};
}
