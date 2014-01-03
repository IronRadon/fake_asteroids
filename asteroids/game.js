(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.interval = null;
    this.ship = new Asteroids.Ship(Game.DIM_X/2, Game.DIM_Y/2);
  };

  Game.prototype.addAsteroids = function(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X,
                                                            Game.DIM_Y));
    }
  };

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    var ctx = this.ctx;
    this.ship.draw(ctx);

    this.asteroids.forEach(function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.move = function() {
    this.ship.move();
    this.asteroids.forEach(function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.step = function() {
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.prototype.start = function() {
    var game = this;

    this.addAsteroids(10);

    this.interval = setInterval(function() {
      game.step();
    }, Game.INTERVAL);
  };

  Game.prototype.checkCollisions = function(){
    var game = this;
    this.asteroids.forEach(function(asteroid){
      if (asteroid.isCollidedWith(game.ship)) {
        alert("GAME OVER!!!!")
        this.stop();
      }
    });
  }

  Game.prototype.stop = function(){
    clearInterval(this.interval);
  }

  Game.INTERVAL = 30;
  Game.DIM_X = 640;
  Game.DIM_Y = 480;
})(this);