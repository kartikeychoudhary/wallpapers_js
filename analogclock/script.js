function setup(){
	createCanvas(window.innerWidth-100, window.innerHeight-100);
	angleMode(DEGREES);
}

function draw(){
background(0);
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
translate(x, y);
rotate(-90)
let hr = hour();
let mn = minute();
let sc = second();

strokeWeight(8);
stroke(255, 100, 150);
noFill();

let end = map(sc, 0, 60, 0, 360);
arc(0, 0, 300, 300, 0, end);

push();
stroke(255, 0, 0);
strokeWeight(3)
rotate(end);
line(0, 0, 100, 0);
pop();

stroke(150, 100, 255);
let end2 = map(mn, 0, 60, 0, 360);
arc(0, 0, 280, 280, 0, end2);

push();
stroke(200);
strokeWeight(6)
rotate(end2);
line(0, 0, 70, 0);
pop();

stroke(100, 255, 150);
let end3 = map(hr % 12, 0, 12, 0, 360);
arc(0, 0, 260, 260, 0, end3); 

push();
stroke(200);
strokeWeight(7)

rotate(end3);
line(0, 0, 35, 0);
pop();

stroke(255);
point(0, 0);

}
