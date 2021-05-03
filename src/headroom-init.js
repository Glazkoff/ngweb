import Headroom from 'headroom.js'

export default function () {
    let myElement = document.querySelector("header");
    console.log('header', myElement);

    let headroom = new Headroom(myElement);
    console.log('headroom', headroom);

    headroom.init();
}