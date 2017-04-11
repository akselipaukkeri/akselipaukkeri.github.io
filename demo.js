$(document).ready(function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 400;
  document.body.appendChild(canvas);

/* Player */
var player = {
  x: 200,
  y: 200,
  w: 40,
  h: 40,
  speed: 1
};

function drawPlayer(context) {
  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);
  context.fillStyle = '#FF0000';
  context.fillRect(x,y, player.w, player.h);
}
  
function movePlayer(dir,enemies) {
  switch (dir) {
    case "left": 
      player.x -= player.speed;

      for(var i in enemies){
      if((enemies[i].x - enemies[i].w/2 < player.x - player.w/2) && (player.x - player.w/2 < enemies[i].x + enemies[i].w/2)){
        if((enemies[i].y - enemies[i].h/2 < player.y + player.h/2 ) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2)){
        player.x = enemies[i].x + enemies[i].w/2 + player.w/2
        enemies[i].direction = 0
      }
      }
    }
      

      if (player.x < 40) {
        player.x = 20;
      }
      break;
    case "right":
      player.x += player.speed;

      for(var i in enemies){
      if((enemies[i].x + enemies[i].w/2 > player.x + player.w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
        if((enemies[i].y - enemies[i].h/2 < player.y + player.h/2 ) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2)){
        player.x = enemies[i].x - enemies[i].w/2 - player.w/2
        enemies[i].direction = 1
      }
      }
    }


      if (player.x > 780) {
        player.x = 780;
      }
      break;
    case "up":

    for(var i in enemies){
      if((player.y - player.h/2 > enemies[i].y - enemies[i].h/2) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2 )){
        if((player.x-player.w/2 < enemies[i].x + enemies[i].w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
          player.y = enemies[i].y + enemies[i].h/2 + player.h/2
          enemies[i].direction = 2
        }
      }

    }


      player.y -= player.speed;
      if (player.y < 20) {
        player.y = 20;
      }
      break;
    case "down":
      player.y += player.speed;

      for(var i in enemies){
        if((player.y + player.h/2 < enemies[i].y + enemies[i].h/2) && (player.y + player.h/2 > enemies[i].y - enemies[i].h/2)){
          if((player.x-player.w/2 < enemies[i].x + enemies[i].w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
          player.y = enemies[i].y - enemies[i].h/2 - player.h/2
          enemies[i].direction = 3
        }
        }
      }

      if (player.y > 380) {
        player.y = 380;
      }
      break;
  }
}
  
/* Listen to keyboard events */
  var keysDown = {};
  
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });
  
  
  
/* Draw everything */
var render = function() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,800,400);
  drawEnemy(ctx);
  drawPlayer(ctx);

};

/* Update stuff every loop */
var update = function(delta) {

    if (38 in keysDown) {
       movePlayer("up",enemies);
    } 
    if (40 in keysDown) {
       movePlayer("down",enemies);
    }
    if (37 in keysDown) {
      movePlayer("left",enemies);
    }
    if (39 in keysDown) {
      movePlayer("right",enemies);
    }

    for (var i in enemies) {
      moveEnemy(enemies[i],player);

    
  }
};

/* Time-based motion animation */
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;


  // Request to do this again ASAP
  requestAnimationFrame(main);
};
  
var then = Date.now();
main();
createEnemy();//ResetFifagod
  document.addEventListener("click", tuhoaVihollinen);
function tuhoaVihollinen(event) {
  
  var xx =  event.clientX -8;
  var yy =   event.clientY -8;

  for (var i in enemies){
    if ((enemies[i].x - enemies[i].w/2 <= xx) && (xx <= enemies[i].x + enemies[i].w/2) &&(enemies[i].y - enemies[i].h/2 <= yy) && (yy <= enemies[i].y + enemies[i].h/2)) {
      enemies.splice(i,1);
      break;

    }
  }
}
});