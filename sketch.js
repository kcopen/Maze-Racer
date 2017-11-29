
var maze = null;

function setup() {
	createCanvas(windowHeight,windowHeight);
	background(179);
	maze = new Maze(12,432);
	maze.initMaze();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("up");
		maze.player.playerUp();
	}
	if(keyCode === DOWN_ARROW){
		console.log("down");
		maze.player.playerDown();
	}
	if(keyCode === LEFT_ARROW){
		console.log("left");
		maze.player.playerLeft();
	}
	if(keyCode === RIGHT_ARROW){
		console.log("right");
		maze.player.playerRight();
	}
}

function draw() {
	maze.draw();
	
}