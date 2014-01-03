(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});

    Function.prototype.inherits = function(parentClass) {
      var Surrogate = function() {};
      Surrogate.prototype = parentClass.prototype;
      this.prototype = new Surrogate();
    }

    var Asteroid = Asteroids.Asteroid = function(xpos, ypos, xvel, yvel){
      Asteroids.MovingObject.call(this,
                        xpos,
                        ypos,
                        xvel,
                        yvel,
                        Asteroid.RADIUS,
                        Asteroid.COLOR);
    }

    Asteroid.inherits(Asteroids.MovingObject);
    Asteroid.COLOR = "#FF4657";
    Asteroid.RADIUS = 63;

    Asteroid.randomAsteroid = function(dimX, dimY){
      xpos = Math.random() * dimX;
      ypos = Math.random() * dimY;

      return new Asteroid(xpos, ypos, randomVec(), randomVec());
    }

    var randomVec = function () {
      return (Math.random() * 10) - 5;
    };

})(this);