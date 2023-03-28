function test() {
    console.log('Привет');
}

const button = document.createElement("input");
button.type = "button";
button.style.width = "100px";
button.value = "Увеличить";
button.onclick = function() {
  this.style.width = parseInt(this.style.width) + (parseInt(this.style.width) == 110 ? -10 : 10) + 'px';
};
document.body.appendChild(button);