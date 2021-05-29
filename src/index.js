/**
 * Site Entry Point
 */

// Global Javascript
import "./navigation";
import "./form-animation";

import "../sass/style.scss"


import CursorSetup from './cursor'
import phoneMask  from './phone-mask'




window.onload = () => {

  CursorSetup();
  phoneMask();

}



