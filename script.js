let clear = document.querySelector("#C");
let inp = 0;
let oper = '';
let temp = 0;
let previous_operand = 0; 
let current_operand = document.querySelector("#digit");
let fomula = document.querySelector("#formula");
let oprator = document.querySelector("#oprator");
function Clear() {
    current_operand.innerText = '';
}
function ClearAll() {
    current_operand.innerText = '';
    previous_operand = 0;
    formula.innerText = '';
    operator.innerText = '';
    temp = 0;
}
function delet(){

}
function getInput(element){
    console.log(element.innerText);
    if (inp != 0){
        inp = inp + element.innerText;
        console.log(inp);
        updateDsply();
    }
    if (inp == 0){
        inp = element.innerText;
        console.log(inp);
        updateDsply();
    }
    if (element.innerText == '.'){
       if(inp.includes('.')){
        element.onclick="";
        console.log(inp);
       }
       else {
        inp = inp + element.innerText;
        console.log(inp);
       }
    }
}
function getOprator(elem){
    if (inp != ''){
        oper = elem.innerText;
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
    current_operand.innerText = inp;
    oprator.innerText = oper;
    if (oper != ''){
        formula.innerText = '';
        formula += inp + oper;
        previous_operand += inp + oper;
        inp = 0;
        oper ='';
    }
}

