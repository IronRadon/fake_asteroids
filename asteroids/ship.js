(function(root){
   var Asteroids = root.Asteroids = (root.Asteroids || {});

   var Ship = Asteroids.Ship = function(xpos, ypos){
     Asteroids.MovingObject.call(this,
                                 xpos,
                                 ypos,
                                 0,
                                 0,
                                 Ship.RADIUS,
                                 Ship.COLOR)
   }

   Ship.prototype.impulse = function(ximp, yimp) {
     this.xvel += ximp;
     this.yvel += yimp;
   };

   Ship.RADIUS = 8;
   Ship.COLOR = "#7dabca";

   Ship.inherits(Asteroids.MovingObject);

  })(this);