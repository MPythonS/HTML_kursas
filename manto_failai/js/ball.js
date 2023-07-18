const ball = document.getElementById('ball');
const floor = document.getElementById('floor');
let ballBottom = 40;

document.addEventListener('keyup', function() {
  ball.style.bottom = `${ballBottom}px`;
  ball.style.animation = '';
  floor.style.animation = '';
});

document.addEventListener('keydown', function() {
  ball.style.bottom = '400px';
  ball.style.animation = 'jump 0.3s linear';
  floor.style.animation = 'shake 0.5s linear';
});

