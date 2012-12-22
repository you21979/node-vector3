var VectorMath = exports;

/**
 *  加算
 */
var add = VectorMath.add = function(v1,v2){
    return {
        x : v1.x + v2.x,
        y : v1.y + v2.y,
        z : v1.z + v2.z,
    };
}
/**
 *  減算
 */
var subtract = VectorMath.subtract = function(v1,v2){
    return {
        x : v1.x - v2.x,
        y : v1.y - v2.y,
        z : v1.z - v2.z,
    };
}
/**
 *  ベクトルの正規化
 */
var normalize = VectorMath.normalize = function(v1){
    var len = length(v1);
    return {
        x : v1.x / len,
        y : v1.y / len,
        z : v1.z / len,
    };
}
/**
 *  ベクトルの長さを求める(比較用)
 */
var _length = VectorMath._length = function(v1){
    return (v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
}
/**
 *  ベクトルの長さを求める(計算用)
 */
var length = VectorMath.length = function(v1){
    return Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
}
/**
 *  外積計算
 */
var cross = VectorMath.cross = function(v1,v2){
    return {
        x : v1.y * v2.z - v1.z * v2.y,
        y : v1.z * v2.x - v1.x * v2.z,
        z : v1.x * v2.y - v1.y * v2.x,
    };
}
/**
 *  内積計算
 */
var dot = VectorMath.dot = function(v1,v2){
    return (v1.x * v2.x + v1.y * v2.y + v1.z * v2.z);
}
/**
 *  スカラー値
 */
var scaler = VectorMath.scaler = function(v1,len){
    return {
        x : v1.x * len,
        y : v1.y * len,
        z : v1.z * len,
    };
}

