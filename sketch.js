
var maze = null;

function setup() {
	createCanvas(windowHeight,windowHeight);
	background(179);
	maze = new Maze(12,432);
	maze.initMaze();
}

function draw() {
	maze.draw();
	
}