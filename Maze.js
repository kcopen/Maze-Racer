function Maze(size, seed){
	this.size = size; //width and height in cell count of the maze
	this.seed = seed;
	this.cells = [];
	this.start = null;
	this.exit = null;
	this.current = null;
	this.unvisitedCells = [];
	this.stack = [];
	this.index = function(i, j){
		if(i < 0 || j < 0 || i > size - 1 || j > size - 1)return -1;
		return i + j * this.size;
	};
	this.checkNeighbors = function(i, j){
		var neighbors = [];
		
		var top = this.cells[this.index(i, j - 1)];
		var right = this.cells[this.index(i + 1, j)];
		var bottom = this.cells[this.index(i, j + 1)];
		var left = this.cells[this.index(i - 1, j)];
		
		if(top && !top.visited){
			neighbors.push(top);
		}
		if(right && !right.visited){
			neighbors.push(right);
		}
		if(bottom && !bottom.visited){
			neighbors.push(bottom);
		}
		if(left && !left.visited){
			neighbors.push(left);
		}
		
		if(neighbors.length > 0){
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		} else{
			return undefined;
		}
	};
	
	this.removeWalls = function(a,b){
		var x = a.x - b.x;
		if(x == 1){
			a.leftWall = false;
			b.rightWall = false;
		}else if(x == -1){
			a.rightWall = false;
			b.leftWall = false;
		}
		var y = a.y - b.y;
		if(y == 1){
			a.topWall = false;
			b.bottomWall = false;
		}else if(y == -1){
			a.bottomWall = false;
			b.topWall = false;
		}
	};
	this.draw = function(){
		for(var i = 0; i < this.cells.length; i++){
			this.cells[i].draw();
		}
				
	};
	this.initMaze = function(){
		for(var i = 0; i < this.size; i++){
			for(var j = 0; j < this.size; j++){
				this.cells[this.index(i,j)] = new MazeCell(i, j, this.size);
			}
		}
		this.start = this.cells[0];
		this.exit = this.cells[this.cells.length - 1];
		this.cells[this.cells.length - 1]
		this.current = this.start;
		
		var uc = this.cells.length - 1;
		this.current.visit();
		var next = this.checkNeighbors(this.current.x,this.current.y);
		while(uc > 0){
			
			if(next){
				next.visit();
				uc--;
				this.stack.push(this.current);
				this.removeWalls(this.current,next);
				this.current = next;
			}else if(this.stack.length > 0){
				this.current = this.stack.pop();
			}
			next = this.checkNeighbors(this.current.x,this.current.y);
		}
		this.start.color = 'rgb(100,100,200)';
		this.exit.color = 'rgb(100,100,0)';
	};
}
