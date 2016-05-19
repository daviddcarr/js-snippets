//Calulate Distance from mouse click to closest point in array
function pointDist(array, mouseX, mouseY) { //array is 2 dimensional, each value stored is an array containing XY coordinates; [[x1,y1],[x2,y2] ...]
    var a = [];
    $.each( array , function(i){
        var val = pyth(array[i][0], array[i][1], mouseX, mouseY);
        a.push(val);
    });
    var value = [a[0], 0]
    for (var i = 1; i < a.length; i++) {
        if(a[i] < value[0]) {
            value[0] = a[i];
            value[1] = i;
        }
    }
    //value is an array containing the closest distance and its index from "array" [distance, index]
    return value; 
}

//Calculates Distance between two cartesian points using Pythagorean theorem.
function pyth(X1, Y1, X2, Y2) {
    var AX = (X2 - X1),
        AY = (Y2 - Y1),
        BX = Math.pow(AX, 2),
        BY = Math.pow(AY, 2),
        C = BX + BY,
        result = Math.sqrt(C);
    return result;
}
