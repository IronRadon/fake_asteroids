(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});

    Function.prototype.inherits = function(parentClass) {
      var Surrogate = function() {};
      Surrogate.prototype = parentClass.prototype;
      this.prototype = new Surrogate();
    }

    var Asteroid = Asteroids.Asteroid = function(xpos, ypos, xvel, yvel, game){
      Asteroids.MovingObject.call(this,
                        xpos,
                        ypos,
                        xvel,
                        yvel,
                        Asteroid.RADIUS,
                        Asteroid.COLOR);
      this.game = game;
    }

    Asteroid.inherits(Asteroids.MovingObject);
    Asteroid.COLOR = "#FF4657";
    Asteroid.RADIUS = 63;

    Asteroid.randomAsteroid = function(dimX, dimY, game){
      xpos = Math.random() * dimX;
      ypos = Math.random() * dimY;

      return new Asteroid(xpos, ypos, randomVec(), randomVec(), game);
    }

    var randomVec = function () {
      return (Math.random() * 10) - 5;
    };

    Asteroid.prototype.remove = function() {
      this.game.removeAsteroid(this);
    }

})(this);