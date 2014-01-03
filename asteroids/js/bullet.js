(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(xpos, ypos, xvel, yvel, game) {

    Asteroids.MovingObject.call(this,
                                xpos,
                                ypos,
                                xvel,
                                yvel,
                                Bullet.RADIUS,
                                Bullet.COLOR);
    this.game = game;
  }

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.move = function() {
    Asteroids.MovingObject.prototype.move.call(this);
    this.hitAsteroids();
  }

  Bullet.prototype.hitAsteroids = function () {
    var bullet = this;

    this.game.asteroids.forEach(function(asteroid) {
      if (bullet.isCollidedWith(asteroid)) {
        console.log("hit")
        bullet.remove();
        asteroid.remove();
      }
    })
  };

  Bullet.prototype.remove = function() {
    this.game.removeBullet(this);
  };

  Bullet.RADIUS = 12;
  Bullet.COLOR = "#abef86";
  Bullet.SPEED = 15;
}
)(this);