const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 40;
ctx.strokeStyle = '#9fd1b8';
ctx.moveTo(20, 20);
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineTo(100, 100);
ctx.globalCompositeOperation = 'color-dodge';
ctx.stroke();

drawLine = e => {
  console.log(e);
};

canvas.addEventListener('mousedown', drawLine);
