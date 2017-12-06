function setup() {
	createCanvas(windowHeight - 1,windowHeight - 1);
	background(179);
	newGame();
}

function keyPressed(){
	if(key === 'W' || keyCode === UP_ARROW){
		maze.playerUp();
	}
	if(key === 'S' || keyCode === DOWN_ARROW){
		maze.playerDown();
	}
	if(key === 'A' || keyCode === LEFT_ARROW){
		maze.playerLeft();
	}
	if(key === 'D' || keyCode === RIGHT_ARROW){
		maze.playerRight();
	}
}

function draw() {
	maze.draw();
	
}