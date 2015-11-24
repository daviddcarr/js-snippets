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
