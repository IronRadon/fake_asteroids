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
   Ship.inherits(Asteroids.MovingObject);

   Ship.prototype.impulse = function(ximp, yimp) {
     this.xvel += ximp;
     this.yvel += yimp;
   };

   Ship.prototype.fireBullet = function() {
     var speed = Math.sqrt(Math.pow(this.xvel, 2) + Math.pow(this.yvel, 2));

     if (!(this.xvel == 0 && this.yvel == 0)) {
       var bullet = new Asteroids.Bullet(this.xpos,
                                         this.ypos,
                                         this.xvel * speed,
                                         this.yvel * speed);
       return bullet;
     }
   };

   Ship.RADIUS = 8;
   Ship.COLOR = "#7dabca";

})(this);