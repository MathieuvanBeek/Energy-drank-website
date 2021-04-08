var test;
var button;
var index = 0;

var blikjes = ['Normal','Green Apple','Grape','Rasberry'];

var slideShow = ['normal Blue fire','green apple Blue fire','grape Blue fire','rasberry Blue fire'];




window.onload = fuction(){
    test = document.getElementById("test");

    setInterval(slideShow, 1000);

}

function slideShow(){
    test.style.backgroundImage = "url(img/" + slideShowArray[index] + ".png)";
    index++;
    if(index == slideShowArray.length-1){
      index = 0;
}
}