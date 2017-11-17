function Maze(width, height, seed, cells){
	this.width = width;
	this.height = height;
	this.seed = seed;
	this.cells = [];
	this.start = start;
	this.exit = end;	
}

function createMaze(width, height, seed){
	var cells = [];
	for(var i = 0; i < width; i++){
		for(var j = 0; j < height; j++){
			cells[width * i + j] = new MazeCell(i,j);
			
		}
	}
	
}