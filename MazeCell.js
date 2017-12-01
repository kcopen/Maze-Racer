function MazeCell(x,y, mazeSize){
	this.x = x;
	this.y = y;
	this.mazeSize = mazeSize;
	this.cellWidth = function(){
		return windowHeight / this.mazeSize;
	};
	this.leftWall = true;
	this.rightWall = true;
	this.topWall = true;
	this.bottomWall = true;
	this.color = 'rgb(0,255,0)';
	this.visited = false;
	this.showWalls = false;
	this.highlight = function(color){
		this.color = color;
	}
	this.visit = function(){
		this.visited = true;
		this.color = 'rgb(100,0,100)';
	};
	this.draw = function(){
		xcoord = this.x * this.cellWidth();
		ycoord = this.y * this.cellWidth();
		stroke(this.color);
		fill(this.color);
		rect(xcoord, ycoord, this.cellWidth(), this.cellWidth());
		stroke(255);
		if(this.showWalls === true){
			if(this.leftWall === true){
				line(xcoord, ycoord, xcoord, ycoord + this.cellWidth());
			}
			if(this.rightWall === true){
				line(xcoord + this.cellWidth(), ycoord, xcoord + this.cellWidth(), ycoord + this.cellWidth());
			}
			if(this.topWall === true){
				line(xcoord, ycoord, xcoord + this.cellWidth(), ycoord);
			}
			if(this.bottomWall === true){
				line(xcoord + this.cellWidth(), ycoord + this.cellWidth(), xcoord + this.cellWidth(), ycoord + this.cellWidth());
			}
		}
		
	};
}