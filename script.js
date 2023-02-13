console.log('Hello!');

const BTN = document.getElementById('btn');

BTN.addEventListener("click", rumble);

function rumble() {
  console.log('Ok this works noob');
  navigator.vibrate(1000)
}
