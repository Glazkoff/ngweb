import Headroom from 'headroom.js'

export default function () {
    let myElement = document.querySelector("header");
    console.log('header', myElement);

    let headroom = new Headroom(myElement, {
  "offset": 30,
  "tolerance": 12,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
    console.log('headroom', headroom);

    headroom.init();
}