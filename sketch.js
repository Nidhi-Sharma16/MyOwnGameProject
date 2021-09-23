var form,level2;
var canvas;

var gameState=2;
function preload() {
 
}

function setup(){
    canvas = createCanvas(1000,500);
    
    background("orange");
    level2 = new Level2();
    
}
function draw(){
  
    level2.display();
    
}

