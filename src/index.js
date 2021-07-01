/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";
import "./form-animation";

import "../sass/style.scss"
import CursorSetup from './cursor'

import HeadroomInit from './headroom-init'


window.onload = () => {
  CursorSetup();
  HeadroomInit();
}



