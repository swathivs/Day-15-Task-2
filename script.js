let outputscreen=document.getElementById("result");
let nums=document.querySelectorAll(".number");
let ops=document.querySelectorAll(".operation");
let Equ=document.querySelector(".equal");
function display(num){
    outputscreen.value+=num;
}
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value)
    }
    catch(arr){
        alert("Invalid")
    }
}
function Clear(){
    outputscreen.value= "";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
window.addEventListener('keydown',(e)=>{
    if(e.key==='0'|| e.key==='1'|| e.key==='2'|| e.key==='3'|| e.key==='4'|| e.key==='5'|| e.key==='6'|| e.key==='7'||
    e.key==='8'|| e.key==='9'|| e.key==='.'){
        clickButton1(e.key);
    }
    else if(e.key==='+'|| e.key==='-'|| e.key==='*'|| e.key==='/'|| e.key==='%'){
        clickOperation(e.key);
    }
    else if(e.key=='Enter'|| e.key==='='){
        clickEqual(e.key);
    }
});
function clickButton1(key){
    nums.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickOperation(key){
    ops.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickEqual(){
    Equ.click();
}