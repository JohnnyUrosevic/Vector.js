var Vector = function(x, y) {
	this.x = x;
	this.y = y;
}
Vector.prototype.magnitude = function(){
	return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
}
Vector.prototype.angle = function() { //returns the angle of the vector in radians
	return Math.atan2(this.y,this.x);
}
Vector.prototype.angleDeg = function() { //returns the angle of the vector in degrees
	return Math.atan2(this.y,this.x) * 180 / Math.PI;
}
Vector.prototype.add = function(vector) { //returns a vector equal to the sum of the vector and the one passed in
	return new Vector(this.x + vector.x, this.y + vector.y);
}
Vector.prototype.subtract = function(vector) { //returns a vector equal to the difference between the vector and the one passed in
	return new Vector(this.x - vector.x, this.y - vector.y);
}
Vector.prototype.mult = function(scalar) { //multiplies the vector by a given scalar
	return new Vector(this.x * scalar, this.y * scalar);
}
Vector.prototype.div = function(scalar) { //divides the vector by a given scalar
	return new Vector(this.x/scalar, this.y/scalar);
}
Vector.prototype.dot = function(vector) { //returns the dot product of the vector and the one passed in
	return this.x * vector.x + this.y * vector.y;
}
Vector.prototype.get = function() { //returns a clone of the vector
	return new Vector(this.x, this.y);
}
Vector.prototype.normalize = function() { //changes the vector to have a magnitude of 1
	var m = this.magnitude();
	this.x /= m;
	this.y /= m;
}
Vector.prototype.limit = function(limit) { //lowers the magnitude of the vector to be the limit given if the original magnitude exceeds the limit
	if (this.magnitude() > limit) {
		var theta = this.angle()
		this.x = limit * Math.cos(theta);
		this.y = limit * Math.sin(theta);
	}
}
Vector.prototype.draw(canvasContext, origin, color) { //draws the vector as a line on a canvas
	if (color === undefined) { //pass in context of canvas, vector for origin, and optionally color
		color = 'black';
	}
	canvasContext.strokeStyle = color;
	canvasContext.beginPath();
	canvasContext.moveTo(origin.x, origin.y);
	canvasContext.lineTo(this.x, this.y);
	canvasContext.stroke();
}