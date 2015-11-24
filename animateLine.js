//LINE FUNCTIONS
//Animates a line from x1,y1 to x2,y2 in HTML5 canvas
function DrawLine(x1, y1, x2, y2, speed) { 
    var PosX = x1,
        PosY = y1,
        lineColor = '#cc3333',
        lineCapStyle = 'round',
        speedTotal = speed + x1; //add x1 to start from initial coordinate

    context.beginPath();
    context.arc(x1, y1, 10, 0, 2 * Math.PI, false);
    context.fillStyle = '#73bf43';
    context.fill();

    AnimateLine(x1, y1, x2, y2, speed, PosX, PosY, speedTotal);

    function AnimateLine(x1, y1, x2, y2, speed, PosX, PosY, speedTotal) {
        var m = slope(x1, y1, x2, y2);

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(PosX, PosY);
        context.lineWidth = 10
        context.strokeStyle = lineColor;
        context.lineCap = lineCapStyle;
        context.stroke();
        context.closePath()

        PosY = pointLoc(x1, y1, m, speedTotal); //Somehow X and Y values go backwards for first iteration
        PosX = speedTotal;

        speedTotal = speedTotal + speed;

        var end_of_line = x2; //adjust this to where you want the line to end
        if (PosX <= end_of_line) {
            requestAnimationFrame(function () {
                AnimateLine(x1, y1, x2, y2, speed, PosX, PosY, speedTotal);
            });
        } else {
            context.beginPath();
            context.arc(x2, y2, 10, 0, 2 * Math.PI, false);
            context.fillStyle = lineColor;
            context.fill();    
        }
    }
}

//Line slope functions 
function slope(x1, y1, x2, y2) { //Calculates the slope of a line based on two provided points
    var y = y2 - y1,
        x = x2 - x1,
        m = y / x;
    return m;
}
function pointLoc(x, y, m, x2) { //Uses slope, an x and y coordinate and a second x value to find it's corresponding y value on the line.
    var num = (m * -x) + y,
        result = (m * x2) + num;
    return result;
}
