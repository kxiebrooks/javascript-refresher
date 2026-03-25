let max = 0;
let min = 100;
let total = 0;

function coinFlipper() {
    let headsCount = 0;

    for (let i = 0; i < 100; i++) {
        let flip = Math.random();
        if (flip < 0.5) {
            headsCount++;
        }
    }

    console.log("Out of 100 flips, you got " + headsCount + " heads.");
    return headsCount;
}

coinFlipper();

for (let i = 0; i < 100; i++) {
    let result = coinFlipper();

    if (result > max) {
        max = result;
    }

    if (result < min) {
        min = result;
    }

    total += result;
}

let average = total / 100;

console.log("The most heads you got was " + max);
console.log("The least number of heads you got was " + min);
console.log("The average number of heads you got was " + average);