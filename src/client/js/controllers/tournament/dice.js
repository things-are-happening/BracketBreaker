// In tabletop role-playing games like Dungeons & Dragons, people use a system called dice notation

// to represent a combination of dice to be rolled to generate a random number. Dice rolls are of the form AdB (+/-) C, and are calculated like this:

// Generate A random numbers from 1 to B and add them together. Add or subtract the modifier, C.

// If A is omitted, its value is 1; if (+/-)C is omitted, step 2 is skipped. That is, "d8" is equivalent to "1d8+0".

// Write a function that takes a string like "10d6-2" or "d20+7" and generates a random number using this syntax.

var dice = function(str) {
    var regex = /^(\d*)d(\d+)([-+]\d+)*/,
    values = str.match(regex).slice(1),
    a = parseInt(values[0]) || 1,
    b = parseInt(values[1]),
    c = parseInt(values[2]),
    sum = 0, i = 0;

    // generate random
    for (; i < a; i++) {
       sum += (Math.floor(Math.random() * (b)) + 1);
    }
    // add/substract c
    sum += c;

    return sum;

}

dice("10d6-2")