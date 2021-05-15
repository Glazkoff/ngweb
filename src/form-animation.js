export default function () {
  let backgroundSize = 0;
  let backgroundForm = document.querySelector('.fill');
  let form = document.forms.contact;
  let elementName = form.elements.name;
  let elementPhone = form.elements.phone;
  let elementEmail = form.elements.email;
  let elementAgreement = form.elements.agreement;
  console.log(elementAgreement.checked)

  elementName.onblur = function() {
    if (elementName.value.trim() == "") {
      if (backgroundSize!=0) backgroundSize -= 25;
      backgroundForm.style.width = `${backgroundSize}%`;
      elementName.classList.add('invalid');
    } 
    else {
      if (backgroundSize!=100) backgroundSize += 25;
      backgroundForm.style.width = `${backgroundSize}%`;
      elementName.classList.add('sucsess');
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
      if (backgroundSize!=0) backgroundSize -= 25;
      backgroundForm.style.width = `${backgroundSize}%`;
      elementPhone.classList.add('invalid');
    } 
    else {
      if (backgroundSize!=100) backgroundSize += 25;
      backgroundForm.style.width = `${backgroundSize}%`;
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
    if (elementEmail.value.trim() == "") {
      if (backgroundSize!=0) backgroundSize -= 25;
      backgroundForm.style.width = `${backgroundSize}%`;
      elementEmail.classList.add('invalid');
    } 
    else { 
      if (backgroundSize!=100) backgroundSize += 25;
      backgroundForm.style.width = `${backgroundSize}%`;
      elementEmail.classList.add('sucsess');
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
    if (backgroundSize!=100) backgroundSize += 25;
    backgroundForm.style.width = `${backgroundSize}%`;
    } else {
      if (backgroundSize != 0) backgroundSize -= 25;
      backgroundForm.style.width = `${backgroundSize}%`;
    }
  }; 


  form.onsubmit = function() {
  console.log('Форма отправлена!');
};
}
