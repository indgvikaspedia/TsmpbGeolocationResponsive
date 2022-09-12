import { useSelector, useDispatch } from 'react-redux'
import React ,{useState, useEffect} from 'react';

export const FontIncrease=()=>{
    var _card = document.getElementsByClassName("CardBodyContent");
    console.log("Card in FontIncrease method:",_card);
    if(_card!=null){
        for(let i=0;i<_card.length;i++)
        _card[i].style.fontSize = "18px";
    }
}

export const FontDecrease=()=>{
    var _card = document.getElementsByClassName("CardBodyContent");
    console.log("Card in FontDecrease method:",_card);
    if(_card!=null){
        for(let i=0;i<_card.length;i++)
        _card[i].style.fontSize = "14px";
    }
}

export const FontDefault = () =>{
    var _card = document.getElementsByClassName("CardBodyContent");
    console.log("Card in FontDefault method:",_card);
    if(_card!=null){
        for(let i=0;i<_card.length;i++)
        _card[i].style.fontSize = "16px";
    }
}

export const DarkMode = () => {
    var body = document.getElementsByTagName("body");
    if(body!=null){
    for(let i=0;i<body.length;i++){
      body[i].style.backgroundColor = "black";
      body[i].style.color = "white";
    }
    }
    var _card = document.getElementsByClassName("CardBodyContent");
    console.log("Card:",_card);
    if(_card!=null){
    for(let i=0;i<_card.length;i++){
      _card[i].style.backgroundColor = "black";
      _card[i].style.color = "white";
    }
    }

    var termsContainer = document.getElementsByClassName("termsContainer");
    if(termsContainer!=null){
    for(let i=0;i<termsContainer.length;i++)
      termsContainer[i].style.backgroundColor = "black";
    }

    var h4 = document.getElementsByTagName("h4");
    if(h4!=null){
        for(let i=0;i<h4.length;i++)
        h4[i].style.color = "white";
    }
}


export const LightMode = () =>{
    var body = document.getElementsByTagName("body");
    if(body!=null){
    for(let i=0;i<body.length;i++){
        body[i].style.backgroundColor = "white";
        body[i].style.color = "black";
    }
    }

    var card = document.getElementsByClassName("CardBodyContent");
    if(card!=null){
        for(let i=0;i<card.length;i++){
            card[i].style.backgroundColor = "white";
            card[i].style.color = "black";
        }
    }

    var termsContainer = document.getElementsByClassName("termsContainer");
    if(termsContainer!=null){
        for(let i=0;i<termsContainer.length;i++)
        termsContainer[i].style.backgroundColor = "white";
    }

    var h4 = document.getElementsByTagName("h4");
    if(h4!=null){
        for(let i=0;i<h4.length;i++)
        h4[i].style.color = "black";
    }
}
export {
    React,
    useState,
    useEffect,
    useSelector,
    useDispatch
}