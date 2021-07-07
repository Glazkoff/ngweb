export default function () {
  console.log('!!!');
  // let form = document.querySelector('#contact-form')
  // console.log(form);
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault()
  //   //  window.history.back();
  //   console.log("!!!!");
  //   let formData = new FormData(form)
  //   console.log(formData);
  //   fetch("/api/request", {
  //     method: 'post',
  //     body: formData
  //   }).then((response) => {
  //     console.log(response);
  //     return response.json()
  //   }).then( (result)=> {
  //     console.log(result);
  //   }).catch( (error)=> {
  //     console.log(error);
  //   })
  //   console.log('SUBMIT!', formData);
  // })


  let flexFormContainer = document.querySelector("#main-form-container")
  let flexFormContainerLoading = document.querySelector("#flex-form-container-loading")
  let flexFormContainerSuccess = document.querySelector("#flex-form-container-success")

  function showLoading() {
    let containerHeight
    if (flexFormContainer.clientHeight != 0) {
      containerHeight = flexFormContainer.clientHeight
    } else {
      containerHeight = window.innerHeight
    }
    flexFormContainer.style.display = 'none'
    flexFormContainerSuccess.style.display = 'none'
    flexFormContainerLoading.style.display = 'flex'
    flexFormContainerLoading.style.alignItems = 'center'
    flexFormContainerLoading.style.height = `${containerHeight}px`
  }
  function showSuccess() {
    let containerHeight
    if (flexFormContainer.clientHeight != 0) {
      containerHeight = flexFormContainer.clientHeight
    } else {
      containerHeight = window.innerHeight
    }
    flexFormContainer.style.display = 'none'
    flexFormContainerLoading.style.display = 'none'
    flexFormContainerSuccess.style.display = 'flex'
    flexFormContainerSuccess.style.alignItems = 'center'
    flexFormContainerSuccess.style.height = `${containerHeight}px`
  }

  function closeLoading() {
    flexFormContainer.style.display = 'flex'
    flexFormContainerLoading.style.display = 'none'
  }

  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    showLoading()
    const form = event.target;
    console.log(new URLSearchParams([...(new FormData(form))]));
    const result = await fetch("/api/request", {
      method: "POST",
      body: new URLSearchParams([...(new FormData(form))]),
    })
    .then((response) => response.json())
      .then((json) => {
        showSuccess()
        console.log(json);
      })
      .catch((error) => {
         closeLoading()
        console.log(error)
      })
  })
}