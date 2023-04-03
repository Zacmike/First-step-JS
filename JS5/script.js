var boxElemnt = document.querySelector('.box');
var animation = boxElemnt.animate([
    {transform: 'translate(0)'},
    {transform: 'translate(200px, 300px,)'}
], 600px);
animation.addEventListener('finish', function() {
    boxElemnt.getElementsByClassName.transform = 'translate(150px, 200px)';
});