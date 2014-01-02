(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});

    Function.prototype.inherits = function(parentClass) {
      var Surrogate = function() {};
      Surrogate.prototype = parentClass.prototype;
      this.prototype = new Surrogate();
    }

    var Asteroid = Asteroids.Asteroid = function(xpos, ypos, xvel, yvel){
      MovingObject.call(this,
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

})(this);