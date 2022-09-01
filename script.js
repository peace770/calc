let clear = document.querySelector("#C");
let inp = 0;
let oper = '';
let temp = 0;
let previous_operand = 0; 
let current_operand = document.querySelector("#digit");
let formula = document.querySelector("#formula");
let oprator = document.querySelector("#oprator");
let decimal = document.querySelector("#decimal");

function Clear() {
    current_operand.innerText = '';
    inp = 0;
}

function ClearAll() {
    current_operand.innerText = '';
    previous_operand = 0;
    formula.innerText = '';
    operator.innerText = '';
    temp = 0;
    inp = 0;
    oper = '';
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
        console.log(inp);
        updateDsply();
    }
    if (inp == ''){
        console.log(inp);
        return;
    }
  
}

function compute(){


}

function updateDsply() {
    current_operand.innerText = inp;
    console.log(current_operand.innerText);
    oprator.innerText = oper;
    console.log(oper);
    if (oper != ''){
        formula.innerText = '';
        console.log(formula.innerText);
        formula.innertext += inp + oper;
        console.log(formula.innertext);
        previous_operand += inp + oper;
        console.log(previous_operand);
        inp = 0;
        oper ='';
        decimal.onclick.innerText = "getInput(this)";
        console.log(decimal.onclick);
    }
}

