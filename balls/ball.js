//Set global variable that would contain the position, velocity and the html element "ball"
var balls = [document.getElementById("ball_1"), document.getElementById("ball_2"), document.getElementById("ball_3"), document.getElementById("ball_4")];
var positionsX = [0, 50, 100, 150];
var positionsY = [150, 100, 50, 0];
var velocities = [100, 50, 75, 25];
var reverses = [false, false, false, false];

function randomColor() {
  let maxColor = 0xFFFFFF;
  let randNum = Math.random() * maxColor; 
  
  randNum = Math.floor(randNum);
  randNum = randNum.toString(16);
  
  let randColor = randNum.padStart(6, 0);
  
  return "#" + randColor;
}

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 1024;

  var Ymin = 0;
  var Ymax = 1024;

  var i = 0 
  while (i < balls.length) {
    if (positionsX[i] >= Xmax || positionsY[i] >= Ymax) {
      reverses[i] = true;
    }
    
    if (positionsX[i] <= Xmin || positionsY[i] <= Ymin) {
      reverses[i] = false;
    }
    
    i++;
  }

  var j = 0 
  while (j < balls.length) {
    if (reverses[j]) {
      positionsX[j] = positionsX[j] - velocities[j];
      positionsY[j] = positionsY[j] - velocities[j];
    } else {
      positionsX[j] = positionsX[j] + velocities[j];
      positionsY[j] = positionsY[j] + velocities[j];
    }
    
    j++;
  }
  
  var k = 0 
  while (k < balls.length) {
    balls[k].style.left = positionsX[k] + 'px';
    balls[k].style.top = positionsY[k] + 'px';
    balls[k].style.backgroundColor = randomColor();
    
    k++;
  }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
