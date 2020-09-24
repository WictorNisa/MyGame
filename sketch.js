let score = 0;
let level = 0;

let player = {
  //Shows at which px the player shows on load
  x: 40,
  y: 40,
};

let treasure = {
  //Shows at which px the treasure shows on load
  x: 300,
  y: 140
};

let enemey = {
//Shows at which px the enemy shows on load
  x: 150 * Math.random(),
  y: 300 * Math.random(),
  vx:0.1 * Math.random() - 0.2,
  vy: 0.1 * Math.random() - 0.2,
};

let multipleEnemies = [];

function setup() {
  // put setup code here
  createCanvas(800, 750);
}

function draw() {
  // put drawing code here

  //Player movements
  const playerMovement = 7;
  if(keyIsPressed){
    if(key == 's'){
      // move player downwards

      if (player.y < 770 - 45) {
        //Stops the user going outside of the canvas by disabling the input of the button
        //when user is near the border
        player.y += playerMovement;
      }
      }
      else if(key == 'w') {
        // move player upwards

        if (player.y > 30) {
          //Stops the user going outside of the canvas by disabling the input of the button
          //when user is near the border
          player.y -= playerMovement;
        }
      }
      else if(key == 'a') {
        // move player left

        if(player.x > 30){
          //Stops the user going outside of the canvas by disabling the input of the button
          //when user is near the border
          player.x -= playerMovement;
        }
      }
      else if(key == 'd') {
        // move player right

        if (player.x < 820 - 45) {
          //Stops the user going outside of the canvas by disabling the input of the button
          //when user is near the border
          player.x += playerMovement; 
        }
      }
    }

    // Checks to see if player and treasure are touching eachother
    const distancePlayerTreasure = Math.sqrt(
      Math.pow(treasure.x - player.x, 2) +
      Math.pow(treasure.y - player.y, 2)
    );
    if (distancePlayerTreasure <= 40 + 25) {
      // collision between player and treasure!
      score++;
      treasure = {
        x: 500 * Math.random(),
        y: 500 * Math.random(),
      };
    }

    //Makes the enemy move in 
    enemey.x -= enemey.vx * deltaTime;
    enemey.y -= enemey.vy * deltaTime;




  //drawing
  background(114, 114, 126);

  //Draws the user
  fill(35, 44, 51);
  noStroke();
  circle(player.x, player.y, 45);

  //Draws the treasure
  fill(219, 185, 87);
  square(treasure.x, treasure.y, 25);

  //Draws the enemey
  fill(195, 60, 84);
  square(enemey.x, enemey.y, 65);
  

  //Shows current score
  fill('white');
  text('Current Score: ' + score, 350, 25);

  //Shows current level
  fill('white');
  text('Level: ' + level, 650, 25);
}