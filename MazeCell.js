function MazeCell(x,y, mazeSize){
	this.x = x;
	this.y = y;
	this.mazeSize = mazeSize;
	this.cellWidth = function(){
		return windowWidth / this.mazeSize;
	};
	this.cellHeight = function(){
		return windowHeight / this.mazeSize;
	};
	this.leftWall = true;
	this.rightWall = true;
	this.topWall = true;
	this.bottomWall = true;
	this.color = 'rgb(0,255,0)';
	this.visited = false;
	this.draw = function(){
		var xcoord = this.x * this.cellWidth();
		var ycoord = this.y * this.cellHeight();
		stroke(this.color);
		fill(this.color);
		rect(xcoord, ycoord, this.cellWidth(), this.cellHeight());
		stroke(255);
		if(this.leftWall === true){
			line(xcoord, ycoord, xcoord, ycoord + this.cellHeight());
		}
		if(this.rightWall === true){
			line(xcoord + this.cellWidth(), ycoord, xcoord + this.cellWidth(), ycoord + this.cellHeight());
		}
		if(this.topWall === true){
			line(xcoord, ycoord, xcoord + this.cellWidth(), ycoord);
		}
		if(this.bottomWall === true){
			line(xcoord + this.cellWidth(), ycoord + this.cellHeight(), xcoord + this.cellWidth(), ycoord + this.cellHeight());
		}
		
		
	};
}