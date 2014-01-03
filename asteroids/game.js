(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.interval = null;
    this.ship = new Asteroids.Ship(Game.DIM_X/2, Game.DIM_Y/2);
    this.bullets = [];
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X,
                                                            Game.DIM_Y, this));
    }
  };

  Game.prototype.draw = function() {
    this.ctx.fillStyle = '#123234'
    this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    var ctx = this.ctx;
    this.ship.draw(ctx);

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });

    this.bullets.forEach(function(bullet) {
      bullet.draw(ctx);
    })
  };

  Game.prototype.move = function() {
    this.ship.move();
    var tempRoids = [];
    var tempBullets = [];

    this.asteroids.forEach(function(asteroid) {
      asteroid.move();

      if (((asteroid.xpos + asteroid.radius) < 0 ||
           (asteroid.xpos - asteroid.radius) > Game.DIM_X) ||
          ((asteroid.ypos + asteroid.radius) < 0 ||
           (asteroid.ypos - asteroid.radius) > Game.DIM_Y)) {
      } else {
        tempRoids.push(asteroid);
      }
    });

    this.asteroids = tempRoids;

    this.bullets.forEach(function(bullet) {
      bullet.move();

      if (((bullet.xpos + bullet.radius) < 0 ||
           (bullet.xpos - bullet.radius) > Game.DIM_X) ||
          ((bullet.ypos + bullet.radius) < 0 ||
           (bullet.ypos - bullet.radius) > Game.DIM_Y)) {
      } else {
        tempBullets.push(bullet);
      }
    });

    this.bullets = tempBullets;
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.prototype.start = function() {
    var game = this;
    this.addAsteroids(10);
    this.addKeyBindings();

    this.interval = setInterval(function() {
      game.step();
    }, Game.INTERVAL);
  };

  Game.prototype.addKeyBindings = function() {
    var game = this
    key('up',    function() { game.ship.yvel -= 0.1 });
    key('down',  function() { game.ship.yvel += 0.1 });
    key('left',  function() { game.ship.xvel -= 0.1 });
    key('right', function() { game.ship.xvel += 0.1 });
    key('space', function() { game.fireBullet(); })
  }

  Game.prototype.checkCollisions = function(){
    var game = this;
    this.asteroids.forEach(function(asteroid){
      if (asteroid.isCollidedWith(game.ship)) {
        //alert("GAME OVER!!!!")
        // game.stop();
      }
    });
  }

  Game.prototype.fireBullet = function() {
    var bullet = this.ship.fireBullet(this);
    if (bullet){
      this.bullets.push(bullet);
    }
  }

  Game.prototype.removeBullet = function(bullet) {
    this.bullets.splice(this.bullets.indexOf(bullet), 1);
  }

   Game.prototype.removeAsteroid = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
  }

  Game.prototype.stop = function(){
    clearInterval(this.interval);
  }

  Game.INTERVAL = 30;
  Game.DIM_X = 640;
  Game.DIM_Y = 480;
})(this);