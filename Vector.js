var Vector = function(x, y) {
	this.x = x;
	this.y = y;
};
Vector.prototype.magnitude = function(){
	return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
};
Vector.prototype.angle = function() {
	return Math.atan2(this.y,this.x);
};
Vector.prototype.angleDeg = function() {
	return Math.atan2(this.y,this.x) * 180 / Math.PI;
};
Vector.prototype.add = function(vector) {
	return new Vector(this.x + vector.x, this.y + vector.y);
};
Vector.prototype.subtract = function(vector) {
	return new Vector(this.x - vector.x, this.y - vector.y);
};
Vector.prototype.mult = function(scalar) {
	return new Vector(this.x * scalar, this.y * scalar);
};
Vector.prototype.div = function(scalar) {
	return new Vector(this.x/scalar, this.y/scalar);
};
Vector.prototype.dot = function(vector) {
	return this.x * vector.x + this.y * vector.y;
};
Vector.prototype.get = function() {
	return new Vector(this.x, this.y);
};
Vector.prototype.normalize = function() {
	var m = this.magnitude();
	this.x /= m;
	this.y /= m;
};
Vector.prototype.limit = function(limit) {
	if (this.magnitude() > limit) {
		var theta = this.angle()
		this.x = limit * Math.cos(theta);
		this.y = limit * Math.sin(theta);
	}
};