<style>

.dynamic-heading span.cursor {
  display: inline-block;
  background-color: #000;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}
.dynamic-heading span.cursor.typing {
  animation: none;
}
@keyframes blink {
  0%  { background-color: #fff; }
  49% { background-color: #fff; }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
  100%  { background-color: #fff; }
}
</style>
<section class="main-block">
  <div class="dynamic-heading__block">
    <h2 id="main-heading" class="dynamic-heading">Разрабатываем<br>сайты, которые<br><span class="typed-text"></span><span class="cursor">&nbsp;</span></h2>  
  </div>
  <div id="main-sugar">
    <svg id="main-sugar__svg">
    </svg>
  </div>
</section>
<script>
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["притягивают внимание", "и не внимание", "все притягивают", "деньги тоже"];
const typingDelay = 90;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
</script>