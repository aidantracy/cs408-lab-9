import Shape from './shape.js';


class EvilCircle extends Shape {
  constructor(x, y, canvas) {
    super(x, y, 20, 20);
    this.size = 10;
    this.color = 'white';

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'a':
          this.x -= this.velX;
          break;
        case 'd':
          this.x += this.velX;
          break;
        case 'w':
          this.y -= this.velY;
          break;
        case 's':
          this.y += this.velY;
          break;
      }
    });

    // chatgpt generated code
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect(); // Get canvas position in the window
      this.x = e.clientX - rect.left;
      this.y = e.clientY - rect.top;
    });
    ////////////////////////
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
  }

  checkBounds(canvas) {
    if (this.x - this.size < 0) {
      this.x = this.size;
    }
    if (this.x + this.size > canvas.width) {
      this.x = canvas.width - this.size;
    }
    if (this.y - this.size < 0) {
      this.y = this.size;
    }
    if (this.y + this.size > canvas.height) {
      this.y = canvas.height - this.size;
    }
  }

  collisionDetect(balls) {
    for (let i = 0; i < balls.length; i++) {
      if (balls[i].exists) {
        const dx = this.x - balls[i].x;
        const dy = this.y - balls[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + balls[i].size) {
          balls[i].exists = false;
          let ballNum = i + 1 // for funsiez in the console. 
          console.log("Ate ball " + ballNum);
        }
      }
    }
  }
}


export default EvilCircle;