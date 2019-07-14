const typed = document.querySelector('.typeHere');

const secret = 'secret';
const keysPressed = [];

function hello(e) {
  keysPressed.push(e.key);
  keysPressed.splice(-secret.length - 1, keysPressed.length - secret.length);
  typed.innerHTML = keysPressed.join('');
  if (keysPressed.join('').includes(secret)) {
    cornify_add();
  }
}

window.addEventListener('keyup', hello);
