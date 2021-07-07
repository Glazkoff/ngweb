import Headroom from 'headroom.js'

export default function () {
    let myElement = document.querySelector("header");

    let headroom = new Headroom(myElement, {
      "offset": 30,
      "tolerance": 12,
      // "classes": {
      //   "initial": "animated",
      //   "pinned": "slideDown",
      //   "unpinned": "slideUp"
      // }
    });

    headroom.init();
}