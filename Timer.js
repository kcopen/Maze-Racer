
function Timer(){
	this.startTime = 0;
	this.stopTime = 0;
	this.startTimer = function(){
		this.startTime =  ((new Date()).getTime());
		console.log(this.startTime);
	};
	this.stopTimer = function(){
		this.stopTime = ((new Date()).getTime());
	};
	this.displayTime = function(){
		if(this.startTime === 0)return "0 sec";
		return ("" + Math.floor(((new Date()).getTime() - this.startTime)/ 1000) + " sec");
	};
	this.displayStoppedTime = function(){
		return ("" + Math.floor((this.stopTime - this.startTime)/ 1000) + " sec");
	};
	this.draw = function(x,y){
		textSize(16);
		textAlign(LEFT,TOP);
		fill(255);
		if(this.stopTime === 0){
			text(this.displayTime(),x,y);
		}else {
			text(this.displayStoppedTime(),x,y);
		}
	};
}