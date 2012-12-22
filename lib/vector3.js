var Class = require(__dirname + '/class');
var V3Math = require(__dirname + '/vector_math');

var createVector3 = function(v1){
    if( v1 instanceof Object ){
        return new Vec3(
            v1.x,
            v1.y,
            v1.z
        );  
    }else if( v1 instanceof Array ){
        return new Vec3(
            v1[0],
            v1[1],
            v1[2]
        );  
    }
    throw new Error('unknown initializer');
}

var Vec3 = module.exports = Class({
    initialize : function(x,y,z){
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    },
    clone : function(){
        return createVector3(this);
    },
    _length : function(){
        return V3Math._length(this);
    },
    length : function(){
        return V3Math.length(this);
    },
    normalize : function(){
        return createVector3(V3Math.normalize(this));
    },
    dot : function(v2){
        return V3Math.dot(this, v2);
    },
    scaler : function(len){
        return createVector3(V3Math.scaler(this, len));
    },
    cross : function(v2){
        return createVector3(V3Math.cross(this, v2));
    },
    add : function(v2){
        return createVector3(V3Math.add(this, v2));
    },
    sub : function(v2){
        return createVector3(V3Math.subtract(this, v2));
    },
    eq : function(v2){
        var v1 = this;
        return (
               v1.x === v2.x
            && v1.y === v2.y
            && v1.z === v2.z
        );
    },
    distance : function(v2){
        return V3Math.distance(this, v2);
    },
    distanceXY : function(v2){
        var v1 = this;
        return V3Math.distance({x:v1.x,y:v1.y,z:0}, {x:v2.x,y:v2.y,z:0});
    },
    distanceXZ : function(v2){
        var v1 = this;
        return V3Math.distance({x:v1.x,y:0,z:v1.z}, {x:v2.x,y:0,z:v2.z});
    },
    distanceYZ : function(v2){
        var v1 = this;
        return V3Math.distance({x:0,y:v1.y,z:v1.z}, {x:0,y:v2.y,z:v2.z});
    },
    angleXY : function(){
        var v1 = this;
        return V3Math.angle(v1.x, v1.y);
    },
    angleXZ : function(){
        var v1 = this;
        return V3Math.angle(v1.x, v1.z);
    },
    angleYZ : function(){
        var v1 = this;
        return V3Math.angle(v1.y, v1.z);
    },
});
