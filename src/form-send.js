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

  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    const form = event.target;
    console.log("###");
    console.log(new URLSearchParams([...(new FormData(form))]));
    const result = await fetch("/api/request", {
      method: "POST",
      body: new URLSearchParams([...(new FormData(form))]),
    })
    .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
    .catch((error) => console.log(error));
  })
}