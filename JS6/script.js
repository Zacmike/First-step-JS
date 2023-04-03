function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let body = document.querySelector('body');

for (let i = 0; i < 9; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)},${random(0,255)})`
    div.className = 'box';
    div.innerText = i + 1;
    div.style.left  = `${random(0,window.innerWidth-101)}px`;
    div.style.top  = `${random(0,window.innerHeight-101)}px`;
    body.appendChild(div);
}


let boxes = document.querySelectorAll('.box');

setInterval(() => {
    for (const box of boxes) {
        box.style.left  = `${random(0,window.innerWidth-101)}px`;
        box.style.top  = `${random(0,window.innerHeight-101)}px`;
    }
}, 1000);