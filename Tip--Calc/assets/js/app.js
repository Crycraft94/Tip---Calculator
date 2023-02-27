let zero = document.querySelector("#count");
let numberPeople = document.querySelector("#people");
let bill = document.querySelector("#bill");
let tip = document.querySelectorAll(".tip");
let tipAmount = document.querySelector(".amount-tip");
let totalAmount = document.querySelector(".amount-total");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");

let ratio;

function cal(x){
    amount1 = (bill.value * ratio) / numberPeople.value;
    tipAmount.innerHTML = "$"+ amount1.toFixed(2);
    amount2 = (bill.value/2) +(bill.value * ratio) / numberPeople.value ;
    totalAmount.innerHTML = "$"+ amount2.toFixed(2);
}

//////////////////////////////////////////////
zero.style.display = "none"
let x = numberPeople;
numberPeople.addEventListener("input" , ()=>{
    
    if(x.value == "0"){
        zero.style.display = "block"
        zero.style.color = "red"
    }
    else if(x.value>0){
        zero.style.display = "none"
    }
    else{
        zero.style.display = "none"
    }
    numberPeople.addEventListener("keydown",()=>{
        cal();
    })
})
////////////////////////////////////////

for (let i = 0; i < tip.length; i++) {
   tip[i].addEventListener("click",(e)=>{
    ratio = document.querySelector(`#${e.target.getAttribute("for")}`).value;
   })
}
// //////////////////////////////////////////
reset.addEventListener("click",()=>{
    bill.value ="";
    numberPeople.value="";
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    document.querySelector('input[name="tip"]:checked').checked = false;
})





