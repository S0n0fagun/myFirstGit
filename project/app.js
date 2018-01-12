// alert("helo");
//
// var f = ['Eric'];
// var l = ['Yung'];
//
//
// function writename(firstName,lastName){
//   return firstName+" "+lastName;
// }
//
//
//
// console.log(writename(f,l));
// console.log(writename('Eric','Yung'));
// console.log(writename('Eric','Yung'));
// let button = document.getElementById('btn1');
// let input = document.getElementById('name');
//
//
// button.addEventListener('click', updateText);
//
// function updateText() {
//   text.innerHTML = input.value;
// }
//
//-----------------------------------------------
//
// let result = document.getElementById('namr');
var value1=value2=result=0;
function calc(val) {
    value1= parseInt(document.getElementById(val).value);
    document.getElementById("textBox").value=document.getElementById("textBox").value+value1;
    value1=parseInt(document.getElementById("textBox").value);
// function calc(val) {
//         value1= parseInt(document.getElementById(val).value);
//         document.getElementById("textBox").value=document.getElementById("textBox").value-value1;
//         value1=parseInt(document.getElementById("textBox").value);
}

function FindResult(){
    result=value1+value2;
    document.getElementById("textBox").value=result;

}
