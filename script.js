let clear = document.querySelector("#C");
let inp = 0;
let oper;
let temp = 0;
let previous_operand = document.querySelector("#formula");
let current_operand = document.querySelector("#digit");
let numbers =  document.querySelectorAll(".num");
function Clear() {
    console.log("hi");
}
function ClearAll() {
    
}
function delet(){

}
function getInput(){
    if (inp == 0){
        inp = this.span.innerText;
        console.log(inp.value);
    }
    if (inp != 0){
        inp = inp + this.span.innerText;
        console.log(inp.value);
    }
    if (this.span.innerText == '.'){
       if(inp.includes('.')){
        console.log(inp.value);
        return;
       }
       else {
        inp = inp + this.span.innerText;
        console.log(inp.value);
       }
    }
}
function getOprator(){
    if (inp != ''){
        oper = this.span.innerText;
        console.log(inp.value);
        updateDsply();
    }
    if (inp == ''){
        console.log(inp.value);
        return;
    }
  
}
function compute(){

}
function updateDsply() {
    

}

