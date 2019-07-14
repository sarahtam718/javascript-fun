const typed = document.querySelector('.typeHere');

const secret = 'secret';
const keysPressed = [];

function hello(e) {
  console.log(-secret.length - 1);
  console.log(keysPressed.length);
  keysPressed.push(e.key);
  keysPressed.splice(-secret.length - 1, keysPressed.length - secret.length);
  typed.innerHTML = keysPressed.join('');
  if (keysPressed.join('').includes(secret)) {
    console.log('DING DING');
  }
}

window.addEventListener('keyup', hello);
