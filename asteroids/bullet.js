(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(xpos, ypos, xvel, yvel){
    Asteroids.MovingObject.call(this,
                                xpos,
                                ypos,
                                xvel,
                                yvel,
                                Bullet.RADIUS,
                                Bullet.COLOR);
  }
  Bullet.inherits(Asteroids.MovingObject);

  Bullet.RADIUS = 63;
  Bullet.COLOR = "#abef86";
}
)(this);