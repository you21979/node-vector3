var Vec3 = require('..').Vector3;
var assert = require('assert');

[
function add(){
    var v1 = new Vec3(1,2,3);
    var v2 = new Vec3(3,6,2);
    v1 = v1.add(v2);
    assert(v1.eq({
        x : 4,
        y : 8,
        z : 5,
    }));
},
function sub(){
    var v1 = new Vec3(1,2,3);
    var v2 = new Vec3(3,6,2);
    v1 = v1.sub(v2);
    assert(v1.eq({
        x : -2,
        y : -4,
        z : 1,
    }));
},
function length(){
    var v1 = new Vec3(1,2,3);
    var len = v1.length();
    assert(len === 3.7416573867739413);
},
function normalize(){
    var v1 = new Vec3(1,2,3);
    var v2 = v1.normalize();
    assert(v2.eq({
        x : 0.2672612419124244,
        y : 0.5345224838248488,
        z : 0.8017837257372732,
    }));
},
function scaler(){
    var v1 = new Vec3(1,2,3);
    var len = v1.length();
    var v2 = v1.normalize();
    var v3 = v2.scaler(len);
    assert(v3.eq(v1));
},
function dot(){
    var v1 = new Vec3(1,2,3);
    var v2 = new Vec3(3,6,2);
    var dot = v1.dot(v2);
    assert(dot === 21);
},
function cross(){
    var v1 = new Vec3(1,2,3);
    var v2 = new Vec3(3,6,2);
    var v3 = v1.cross(v2);
    assert(v3.eq({
        x : -14,
        y : 7,
        z : 0,
    }));
},
function(){
}
].forEach(function(f){
    f();
});


