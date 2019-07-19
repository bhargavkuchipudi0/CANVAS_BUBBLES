var canvas = document.getElementById('bob');
var ctx = canvas.getContext('2d');
var radius = 2;

var colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
var dots = [];
var radius = 10;

function getCoordinates() {
    var obj = {
        x: Math.floor(Math.random() * Math.max(canvas.width)),
        y: Math.floor(Math.random() * Math.max(canvas.height)),
        color: colors[Math.floor(Math.random() * Math.max(colors.length))],
        xmove: '+',
        ymove: '+'
    }

    dots.push(obj);
}

function moveDot() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot, i) => {
        if (dot.x < 2 || dot.y < 2) {
            dots.splice(i, 1);
            getCoordinates();
        }
        if (dot.xmove === '+') {
            dot.x += 2;
        } else {
            dot.x -= 2;
        }
        if (dot.ymove === '+') {
            dot.y += 2;
        } else {
            dot.y -= 2;
        }
        if ((dot.x + radius) >= canvas.width) {
            dot.xmove = '-';
        } if ((dot.x - radius) <= 0) {
            dot.xmove = '+';
        }
        if ((dot.y + radius) >= canvas.height) {
            dot.ymove = '-';
        } if ((dot.y - radius) <= 0) {
            dot.ymove = '+';
        }
        drawDot(dot);
    });
}

function drawDot(dot) {
    ctx.beginPath();
    ctx.globalAlpha = 0.9;
    ctx.arc(dot.x, dot.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = dot.color;
    ctx.fill();
}

getCoordinates();
getCoordinates();
getCoordinates();
getCoordinates();

setInterval(function () {
    window.requestAnimationFrame(moveDot);
}, 50)





