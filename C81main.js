Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "Blue";

radius = "10";

var LastX, LastY;
var mouseEvent = "";

Canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("cInput").value;
    radius = document.getElementById("sInput").value;
    console.log(color);

    mouseEvent = "mouseDown";
}

Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentmouseX = e.clientX - Canvas.offsetLeft;
    currentmouseY = e.clientY - Canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.arc(currentmouseX, currentmouseY, radius, 0, 2*Math.PI);
        ctx.stroke();
    }

    LastX = currentmouseX;
    LastY = currentmouseY;
}