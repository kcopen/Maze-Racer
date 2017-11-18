function Maze(size, seed){
	this.size = size; //width and height in cell count of the maze
	this.seed = seed;
	this.cells = [];
	this.start = null;
	this.exit = null;
	this.draw = function(){
		for(var i = 0; i < this.cells.length; i++){
			this.cells[i].draw();
		}
	};
	this.getCell = function(x, y){
		return cells[x*size + y];
	};
	this.initMaze = function(){
		for(var i = 0; i < this.size; i++){
			for(var j = 0; j < this.size; j++){
				this.cells[i * this.size + j] = new MazeCell(i, j, this.size);
			}
		}
		this.start = this.cells[0];
		this.cells[0].color = 'rgb(100,0,100)';
		this.exit = this.cells[this.cells.length - 1];
		this.cells[this.cells.length - 1].color = 'rgb(100,100,0)';
	};
}
