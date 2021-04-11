/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";


// Global Styles
import "../sass/style.scss";


import Glide from '@glidejs/glide'


window.onLoad = () => {
  console.log(document.querySelector('.glide'));
  console.log(new Glide('.glide'));
}
// new Glide('.glide', {
//   type: 'carousel',
//   autoplay: 2000,
//   startAt: 0,
//   perView: 3
// }).mount()



