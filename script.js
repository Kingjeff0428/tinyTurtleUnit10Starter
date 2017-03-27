TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
function triangle(){
forward(50);
right(120);
forward(50);
right(120);
forward(50);
}
function shape(){
triangle();
forward(80);
triangle();    
}
function hexagon(){
forward(50);
right(60);
forward(50);
right(60);
forward(50);
right(60);
forward(50);
right(60);
forward(50);
right(60);
forward(50);
}
function rectangle(){
forward(40);
right(90);
forward(100);
right(90);
forward(40);
right(90);
forward(100);
}
function house(){
    square();
    right(30);
    triangle();
}
function pentagon(){
forward(50);
right(72);
forward(50);
right(72);
forward(50);
right(72);
forward(50);
right(72);
forward(50);
}
// Type your function call below
house();
pentagon();
hexagon();
rectangle();
