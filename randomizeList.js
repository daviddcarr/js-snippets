//Function to restricted list of numbers from a larger list of numbers
//Length is the number of numbers, maxVal and minVal tells the code the highest and lowest values it can choose from.
function randList(length, maxVal, minVal) {
    var rands = [];
    while (rands.length < length) {
        var rand = Math.floor((Math.random() * maxVal) + minVal),
            used = false;
        $.each(rands, function(i){
            if (rand == rands[i]) {used = true;}
        });
        if (!used) {rands.push(rand);}
    }
    return rands;
}
