var str = " ";
var a = 10;
var z = 9;
var l = 1;


for (let k = 0; k < 10; k++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            for (let p = 0; p < l; p++) {
                str += "*";
            }
            l += 2;
        }
    }
    str += "\n";
    z = z - 1;
}

console.log(str)





var str = " ";
var a = 10;
var z = 9;

for (let k = 0; k < 10; k++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            str += "*";
        }
    }

    str += "\n";
    z = z - 1;
}

console.log(str)





var str= " ";
var a = 10;
var z = 0;

for (let k = 0; k < 10; k++) {
    for (let i = 0; i < a; i++) {
        str += " ";
        if (i == z) {
            str += "*";
        }
    }

    str += "\n";
    z = z + 1;
}

console.log(str)


