var EASY = 2;
var MEDIUM = 1;
var HARD = 0;
function Maze(size, seed){
	this.size = size; //width and height in cell count of the maze
	this.seed = seed;
	this.cells = [];
	this.start = null;
	this.exit = null;
	this.current = null;
	this.unvisitedCells = [];
	this.stack = [];
	this.player = null;
	this.difficulty = EASY;
	this.timer = new Timer();
	this.completed = false;
	this.index = function(i, j){
		if(i < 0 || j < 0 || i > size - 1 || j > size - 1)return -1;
		return i + j * this.size;
	};
	this.hasMoved = false;
	this.playerX = 0;
	this.playerY = 0;
	this.playerUp = function(){
		this.hasMoved = true;
		if(!this.completed && this.cells[this.index(this.playerX,this.playerY)].topWall === false)this.playerY--;
	};
	this.playerDown = function(){
		this.hasMoved = true;
		if(!this.completed && this.cells[this.index(this.playerX,this.playerY)].bottomWall === false)this.playerY++;
	};
	this.playerLeft = function(){
		this.hasMoved = true;
		if(!this.completed && this.cells[this.index(this.playerX,this.playerY)].leftWall === false)this.playerX--;
	};
	this.playerRight = function(){
		this.hasMoved = true;
		if(!this.completed && this.cells[this.index(this.playerX,this.playerY)].rightWall === false)this.playerX++;
	};
	this.inCamera = function(x,y){
		var cameraSize = 1 + this.difficulty;
		if(x >= this.playerX - cameraSize && x <= this.playerX + cameraSize && y >= this.playerY - cameraSize && y <= this.playerY + cameraSize)return true;
		return false;
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
	this.lastHasMoved = false;
	this.draw = function(){
		if(this.lastHasMoved === false){
			if(this.hasMoved === true){
				this.lastHasMoved = true;
				this.timer.startTimer();
			}
		}
		if(this.playerX === this.exit.x && this.playerY === this.exit.y && this.timer.stopTime === 0 && this.timer.startTime != 0){
			this.completeMaze();
		}
		for(var i = 0; i < this.cells.length; i++){	
			if(!this.inCamera(this.cells[i].x, this.cells[i].y)){
				this.cells[i].highlight('rgb(0,0,0)');
				if(!(this.difficulty > MEDIUM)){
					this.cells[i].showWalls = false;
				}
			}else {
				this.cells[i].highlight('rgb(100,0,100)');
				this.cells[i].showWalls = true;
			}
			if(this.cells[i].x === this.playerX && this.cells[i].y === this.playerY){
				this.cells[i].highlight('rgb(0,95,99)');
			}
			this.cells[i].draw();
			
		}
		this.start.highlight('rgb(0,0,0)');
		this.start.draw();
		this.exit.highlight('rgb(0,0,0)');
		this.exit.draw();
		this.timer.draw(windowHeight - 10,10);
		if(this.completed){
			textSize(32);
			textAlign(CENTER, BOTTOM);
			fill(255);
			text("Your time was!\n" + this.timer.displayStoppedTime() + "\nSeed: "  + this.seed, windowHeight / 2, windowHeight / 2);
		}	
	};
	this.initMaze = function(){
		randomSeed(seed);
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
		this.playerX = this.start.x;
		this.playerY = this.start.y;
		
	};
	this.completeMaze = function(){
		this.timer.stopTimer();
		this.completed = true;
	};
}
