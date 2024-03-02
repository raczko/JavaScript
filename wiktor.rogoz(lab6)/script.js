const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
document.getElementById("start").addEventListener("click", startAnimation);
document.getElementById("reset").addEventListener("click", resetSimulation);
const balls = [];
const Y = 100;


function init(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    for (let i = 0; i < 100; i++){
        balls.push({     
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 3,
            dy: (Math.random() - 0.5) * 3,
            radius: 20 
        });
    }
}

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    balls.forEach((ball, index) => {
        // Aktualizacja pozycji kul
        ball.x += ball.dx;
        ball.y += ball.dy;
        
        // Sprawdzenie kolizji z krawędziami płótna
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }
        
        // Rysowanie kul
        drawBall(ball);

        // Sprawdzenie odległości między kulkami i rysowanie linii
        for (let i = index + 1; i < balls.length; i++) {
            const otherBall = balls[i];
            const distance = Math.sqrt((otherBall.x - ball.x) ** 2 + (otherBall.y - ball.y) ** 2);
            
            if (distance < 100) {
                // Rysowanie linii
                ctx.beginPath();
                ctx.moveTo(ball.x, ball.y);
                ctx.lineTo(otherBall.x, otherBall.y);
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.closePath();
            }
        }
    });

    animationFrame = requestAnimationFrame(animate); // Pętla animacji
}

function resetSimulation() {
    balls.length = 0;
    init();
  }

function startAnimation() {
    init();
    animate();   
}