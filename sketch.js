
var maze = null;

function setup() {
	createCanvas(windowHeight,windowHeight);
	background(179);
	maze = new Maze(12,432);
	maze.initMaze();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		maze.playerUp();
	}
	if(keyCode === DOWN_ARROW){
		maze.playerDown();
	}
	if(keyCode === LEFT_ARROW){
		maze.playerLeft();
	}
	if(keyCode === RIGHT_ARROW){
		maze.playerRight();
	}
}

function draw() {
	maze.draw();
	
}