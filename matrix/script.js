var symbolSize = 20;
var streams = [];

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	background(0);

	var x = 0;
	for (var i=0; i <= width/symbolSize;i++){
		var stream = new Stream();
		stream.generateSymbols(x, random(-1000,0));
		streams.push(stream);
		x += symbolSize;
	}

	// stream = new Stream();
	// stream.generateSymbols();
	textSize(symbolSize);
}

function draw() {
	background(0, 150);
	streams.forEach(function(stream){
		stream.render();
	});
}

function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.value;
	this.speed = speed;
	this.first = first;
	this.switchInterval = round(random(2, 20))

	this.setToRandomSymbol = function () {
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0, 96))
			);
		}
	}

	this.render = function () {
		fill(0, 255, 70);
		text(this.value, this.x, this.y);
		this.rain();
		this.setToRandomSymbol();
	}

	this.rain = function () {
		this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}

function Stream(){
	this.symbols = [];
	this.totalSymbols = round(random(5, 30));
	this.speed = round(random(5, 10));

	this.generateSymbols = function(x, y){
		var first=true;
		for(var i=0; i <= this.totalSymbols; i++){
			symbol = new Symbol(x, y, this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first=false;
		}
	}

	this.render = function(){
		this.symbols.forEach(function(symbol){
		if(this.first){
			fill(180,255,180);
		}else{fill(0, 255, 70);}
		text(symbol.value, symbol.x, symbol.y);
		symbol.rain();
		symbol.setToRandomSymbol();
		});
	}
}