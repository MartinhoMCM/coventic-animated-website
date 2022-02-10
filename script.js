//Ocultar o menu-secondary
var menu =document.getElementsByClassName('side-bar-menu');
menu[0].style="display:none";

var count=true; // Aberto
var sideBar=document.getElementById('side-bar');
document.getElementById('menu').onclick=function changeContent(){
    sideBar.style="display:none";
    menu[0].style="display:block";

}

document.getElementById('menu-2').onclick=function changeContent(){
     sideBar.style="display:block";
     menu[0].style="display:none";

 
 }
 
