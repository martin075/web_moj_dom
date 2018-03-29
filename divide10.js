// Wrap everything in a function (no global variable pollution)
// variable "input" contains data passed by openhab
// have to install javascript transf in PAPER UI- transformations
(function(inputData) {
    // on read: the polled number as string
    // on write: i openHAB command as string
    var DIVIDE_BY = 10;
    return parseFloat(inputData) / DIVIDE_BY;
})(input)
// input variable contains data passed by openhab