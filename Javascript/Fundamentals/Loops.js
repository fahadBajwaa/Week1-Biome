// Javascript Fundamentals

//  Loops: for, while, do-while, forEach

//for loop

let i = 0;
for (i = 0; i < 3; i++) {
    console.log(i);
}

// while loop

let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}

//do-while loop

do {
    console.log(j);
    j--;
}
while (j > 0);

// for Each loop

const arr = [1, 2, 3, 4, 5];
arr.forEach(n => console.log(n));
for (const n of [8, 8, 8]) {
    console.log(n);
}
