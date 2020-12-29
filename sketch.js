var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
   ball = createSprite(200,200,20,20);
   ball.loadImage(ball.png);

  /* assign the images to the sprites */
  paddle = createSprite(350,350,20,90);
  paddle.loadImage(paddle.png);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  createEdgeSprite;
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  ball.velocity=randomVelocity

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 ball.randomVelocityY
  /* Prevent the paddle from going out of the edges */ 
  paddle.Y = World.mouseY
  
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
