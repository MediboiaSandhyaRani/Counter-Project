let counterEle=document.getElementById("counter");
let decreaseEle=document.getElementById("decrease");
let resetEle=document.getElementById("reset");
let increase=document.getElementById("increase");
function onDecrease() {
    let textValue = counterEle.textContent;
    let updatedValue = parseInt(textValue) - 1;
    counterEle.textContent = updatedValue;
    if(updatedValue < 0){
       counterEle.style.color = "red";
    }else if(updatedValue > 0){
        counterEle.style.color = "green";
    }else{
        counterEle.style.color = "black";
    }
}
function onIncrease() {
    let textValue =counterEle.textContent;
    let updatedValue=parseInt(textValue) +1;
    counterEle.textContent=updatedValue;
    counterEle.style.color = "green";
    if(updatedValue < 0){
       counterEle.style.color = "red";
    }else if(updatedValue > 0){
        counterEle.style.color = "green";
    }else{
        counterEle.style.color = "black";
    }
}
function onReset() {
    counterEle.textContent = "0";
    counterEle.style.color = "black";
    
}