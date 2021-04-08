var test;
var slideShowArray = ['blue fire grape ',  'blue fire normal ', 'blue fire green apple ', 'blue fire rasberry'];
var index = 0;

window.onload = function(){
    test = document.getElementById("test");
    setInterval(slideShow, 3500);
}

function slideShow(){
    test.style.backgroundImage = "url(img/" + slideShowArray[index] + ".png)";
    index++; 
    if(index == slideShowArray.length){
        index = 0;
    }
}