 document.getElementById('myForm').addEventListener('click', function() {
     event.preventDefault();
     console.log("Hello");
 })


document.getElementById('myForm').addEventListener('submit', function() {
    event.preventDefault();
    let count = document.querySelector('#count').value;
    let isLower1 = document.querySelector('#isLower').checked;
    let isUpper1 = document.querySelector('#isUpper').checked;
    let isNumber1 = document.querySelector('#isNumber').checked;
    let isSymb1 = document.querySelector('#isSymb').checked;

     console.log(count);


    let result = generationString(count, isNumber1, isUpper1, isLower1, isSymb1);
    console.log("=========================");
    console.log(result);
    document.querySelector('#result').value = result;

})

function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function generationString(count, isNumber1, IsUpper1, IsLower1, isSymb1) {
    let str = "";
    let lower = "qwertyuioplkjhgfdsazxcvbnm";
    let upper = lower.toUpperCase();
    let number = "1234567890";

    console.log(isNumber1);
    console.log(IsUpper1);

    console.log(IsLower1);
    console.log(isSymb1);

    if (!isNumber1 && !isSymb1 && !IsLower1 && !IsUpper1) {
        console.log("Error");
        return "Not select";
    } else {
        console.log("Good");
        for (let i = 0; i < count;) {
            let random = Random(0, 4);
        }
            if (random == 0 && isNumber1) {
                str += number[Random(0, number.length)];
                i++
            } else if (random == 1 && IsLower1) {
                str += lower[Random(0, lower.length)];
                i++
            } else if (random == 2 && IsUpper1) {
                str += upper[Random(0, upper.length)];
                i++
            } else if (random == 2 && isSymb1) {
                str += symb[Random(0, symb.length)];
                i++
            }
        }
}

   return str;