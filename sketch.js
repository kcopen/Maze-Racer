
var maze = null;

function setup() {
	createCanvas(windowHeight,windowHeight);
	frameRate(10000);
	background(179);
	maze = new Maze(64,432);
	maze.initMaze();
}

function draw() {
	maze.draw();
	
}