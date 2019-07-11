const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 20;
ctx.strokeStyle = '#9fd1b8';
ctx.globalAlpha = 0;
//   ctx.lineCap = 'round';
//   ctx.lineJoin = 'round';

let drawingNow = false;
let x = 0;
let y = 0;

drawLine = e => {
  console.log(getMousePos());
  if (!drawingNow) return;
  //   console.log(e.clientX);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [x, y] = [e.offsetX, e.offsetY];
  ctx.globalAlpha++;
};

canvas.addEventListener('mousemove', drawLine);
canvas.addEventListener('mousedown', e => {
  drawingNow = true;
  [x, y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (drawingNow = false));
canvas.addEventListener('mouseout', () => (drawingNow = false));
