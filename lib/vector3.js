var Class = require(__dirname + '/class');
var V3Math = require(__dirname + '/vector_math');

var createVector3 = function(v1){
    return new Vec3(
        v1.x,
        v1.y,
        v1.z
    );
}

var Vec3 = module.exports = Class({
    initialize : function(x,y,z){
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
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
        return (
               this.x === v2.x
            && this.y === v2.y
            && this.z === v2.z
        );
    },
});
