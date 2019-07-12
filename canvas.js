const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 20;
ctx.lineCap = 'round';
ctx.globalCompositeOperation = 'overlay';

let drawingNow = false;
let prevX = 20;
let prevY = 20;
let lightness = 10;
let up = true;

drawLine = e => {
  if (!drawingNow) return;
  ctx.beginPath();
  ctx.strokeStyle = `hsl(200, ${lightness}%, 50%)`;
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [prevX, prevY] = [e.offsetX, e.offsetY];
  if (lightness == 100 || lightness <= 9) {
    up = !up;
  }
  if (up) {
    lightness++;
  } else {
    lightness--;
  }
};

canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mousedown', e => {
  drawingNow = true;
  [prevX, prevY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (drawingNow = false));
canvas.addEventListener('mouseout', () => (drawingNow = false));
