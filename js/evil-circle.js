import Shape from './shape.js';

class EvilCircle extends Shape {
    constructor(x, y, velX, velY){
        super(x, y, 20, 20);
        this.color = 'white';
        this.size = 10;
        
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
              case "a":
                this.x -= this.velX;
                break;
              case "d":
                this.x += this.velX;
                break;
              case "w":
                this.y -= this.velY;
                break;
              case "s":
                this.y += this.velY;
                break;
            }
          });
    }
}


export default EvilCircle;