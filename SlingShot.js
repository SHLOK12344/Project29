class SlingShot{
    constructor(body1,body2){
      var options={
          bodyA:body1,
          pointB:body2
      }
     this.hit=Constraint.create(options);
     World.add(world,this.hit);
    }
    fly(){
     this.hit.bodyA=null;
         }
         
  display(){
   if(this.hit.bodyA){
   var pointA=this.hit.bodyA.position
      var pointB=this.hit.pointB
line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
  }
}