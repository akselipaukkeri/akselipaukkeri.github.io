var player = {
       x: 200,
       y: 200,
       w: 40,
       h: 40,
       speed: 10
    };
    
    function drawPlayer(context) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        context.fillStyle = '#FFBAD2';
        context.fillRect(
            x,
            y,
            player.w,
            player.h);
    };
  
    
    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < 20) {
                    player.x = 20;
                }
                break;
            case "right":
                player.x += player.speed;
                if (player.x > 380) {
                    player.x = 380;
                }
                break;
            case "up":
                player.y -= player.speed;
                if (player.y < 20) {
                    player.y = 20;
                }
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 380) {
                    player.y = 380;
                }
                break;
        }
    }