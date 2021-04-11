/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";

import "../sass/style.scss"

import Glide from '@glidejs/glide'

window.onload = ()=>{
  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 16
  }).mount()
}



