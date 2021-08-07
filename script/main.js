"use strict";

//first modal box

var modalImage = document.getElementsByClassName("photo")[0];
var modal = document.getElementsByClassName("simpleModal")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalImage.addEventListener('click',OpenModal);
function OpenModal(){
    modal.style.display='block';
}

closeBtn.addEventListener('click',CloseModal);
function CloseModal(){
    modal.style.display='none';
}

window.addEventListener('click',ClickOutside);
function ClickOutside(e){
    if(e.target==modal){
        modal.style.display='none';
    }
}

//Second modal Box

var modalImage1 = document.getElementsByClassName("photo")[1];
var modal1 = document.getElementsByClassName("simpleModal")[1];
var closeBtn1 = document.getElementsByClassName("closeBtn")[1];

modalImage1.addEventListener('click',OpenModal1);

function OpenModal1(){
    modal1.style.display='block';
}

closeBtn1.addEventListener('click',CloseModal1);

function CloseModal1(){
    modal1.style.display='none';
}

window.addEventListener('click',ClickOutside1);

function ClickOutside1(e){
    if(e.target==modal1){
        modal1.style.display='none';
    }
}

//Third Modal Box
var modalImage2 = document.getElementsByClassName("photo")[2];
var modal2 = document.getElementsByClassName("simpleModal")[2];
var closeBtn2 = document.getElementsByClassName("closeBtn")[2];

modalImage2.addEventListener('click',OpenModal2);

function OpenModal2(){
    modal2.style.display='block';
}

closeBtn2.addEventListener('click',CloseModal2);

function CloseModal2(){
    modal2.style.display='none';
}

window.addEventListener('click',ClickOutside2);

function ClickOutside2(e){
    if(e.target==modal2){
        modal2.style.display='none';
    }
}

//Fouth Modal Box
var modalImage3 = document.getElementsByClassName("photo")[3];
var modal3 = document.getElementsByClassName("simpleModal")[3];
var closeBtn3 = document.getElementsByClassName("closeBtn")[3];

modalImage3.addEventListener('click',OpenModal3);

function OpenModal3(){
    modal3.style.display='block';
}

closeBtn3.addEventListener('click',CloseModal3);

function CloseModal3(){
    modal3.style.display='none';
}

window.addEventListener('click',ClickOutside3);

function ClickOutside3(e){
    if(e.target==modal3){
        modal3.style.display='none';
    }
}

//Fifth Modal Box

var modalImage4 = document.getElementsByClassName("photo")[4];
var modal4 = document.getElementsByClassName("simpleModal")[4];
var closeBtn4 = document.getElementsByClassName("closeBtn")[4];

modalImage4.addEventListener('click',OpenModal4);

function OpenModal4(){
    modal4.style.display='block';
}

closeBtn4.addEventListener('click',CloseModal4);

function CloseModal4(){
    modal4.style.display='none';
}

window.addEventListener('click',ClickOutside4);

function ClickOutside4(e){
    if(e.target==modal4){
        modal4.style.display='none';
    }
}

//Sixth Modal Box

var modalImage5 = document.getElementsByClassName("photo")[5];
var modal5 = document.getElementsByClassName("simpleModal")[5];
var closeBtn5 = document.getElementsByClassName("closeBtn")[5];

modalImage5.addEventListener('click',OpenModal5);

function OpenModal5(){
    modal5.style.display='block';
}

closeBtn5.addEventListener('click',CloseModal5);

function CloseModal5(){
    modal5.style.display='none';
}

window.addEventListener('click',ClickOutside5);

function ClickOutside5(e){
    if(e.target==modal5){
        modal5.style.display='none';
    }
}