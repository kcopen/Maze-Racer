var maze = null;
function newGame(){
	var seed = document.getElementById("Seed").value;
	
	if(seed < 1){
		seed = floor(random(1,999999999));
	}
	if(maze !== null) delete maze;
	maze = new Maze(34,seed);
	maze.initMaze();
}

function easyMode(){
	maze.difficulty = EASY;
}

function mediumMode(){
	maze.difficulty = MEDIUM;
}

function hardMode(){
	maze.difficulty = HARD;
}

function resetGame(){
	if(maze === null){
		easyGame();
	}else {
		var size = maze.size;
		var s = maze.seed;
		var difficulty = maze.difficulty;
		delete maze;
		maze = new Maze(size, s);
		maze.difficulty = difficulty;
	}
	maze.initMaze();
}
	
