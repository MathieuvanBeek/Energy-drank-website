var test;
var button;
var index = 0;

var blikjes = ['Normal','Green Apple','Grape','Rasberry'];

var slideShow = ['normal Blue fire','green apple Blue fire','grape Blue fire','rasberry Blue fire'];




window.onload = fuction(){
    test = document.getElementById("test");

}

function slideShow(){
    test.style.backgroundImage = "url(img/" + slideShow[index] + ".png)";
    index++;
    if(index == slideShow.length-1){
      index = 0;
}
}