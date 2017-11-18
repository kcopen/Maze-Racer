
var maze = null;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(179);
	maze = new Maze(64,432);
	maze.initMaze();
}

function draw() {
	maze.draw();
	
}