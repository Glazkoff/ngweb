export default function () {
  console.log('CURSOR!');

  

  document.onmouseleave = (e) => {
    console.log('MOUSE LEAVE: ', e);
  }
  document.onmouseover = (e) => {
    console.log('MOUSE OVER: ', e);
  }
  document.onmousemove = (e) => {
    // console.log('MOUSE MOVE: ', e);
  }
}