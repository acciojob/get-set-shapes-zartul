//complete this code
class Rectangle {
	constructor(width,height){
		if (!Number.isInteger(width) || width <= 0) {
	      throw new Error("Width must be a positive integer");
	    }
	    if (!Number.isInteger(height) || height <= 0) {
	      throw new Error("Height must be a positive integer");
	    }
		this._width=width;
		this._height=height;
	}
	get width() {
    return this._width;
    }
	get height() {
	    return this._height;
	}
	getArea() {
	    return this._width * this._height;
    }
}

class Square extends Rectangle {
	constructor(side){
		if (!Number.isInteger(side) || side <= 0) {
	      throw new Error("Side must be a positive integer");
	    }
		super(side,side);
	}
	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
