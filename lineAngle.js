//Calculate angle of single line using two coordinates
function lineAngle(X1, Y1, X2, Y2) {
    var xDif = X2 - X1,
        yDif = Y2 - Y1;
    return Math.atan2(yDif, xDif) * (180 / Math.PI);
}
