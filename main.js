const origArray = [2,3,4]
document.addEventListener("DOMContentLoaded", function (event) {
document.getElementById("textbox1").value = (origArray[0]);
document.getElementById("textbox2").value = (origArray[1]);
document.getElementById("textbox3").value = (origArray[2]);
});


document.getElementById("button1").onclick = function() {function1()};

function function1(){
    let x = (origArray.map(squared));
    parseInt(x);
    document.getElementById("textbox1").value = x[0];
    document.getElementById("textbox2").value = x[1];
    document.getElementById("textbox3").value = x[2];
    console.log(x.value);
    // console.log("you pressed button1");
    // console.log(textbox1.value);
    // console.log(textbox2.value);
    // console.log(textbox3.value);
    
}

document.getElementById("button2").addEventListener("click", function() {
let x = origArray.map(cubed);
parseInt(x);
document.getElementById("textbox1").value = x[0];
document.getElementById("textbox2").value = x[1];
document.getElementById("textbox3").value = x[2];
}
)

document.getElementById("button3").addEventListener("click",function2)

function function2(){
    let x = (origArray.map(toTheFourth));
    parseInt(x);
    document.getElementById("textbox1").value = x[0];
    document.getElementById("textbox2").value = x[1];
    document.getElementById("textbox3").value = x[2];
}

function squared(oneItem){
    return oneItem ** 2;
}
function cubed(oneItem){
    return oneItem ** 3;
}
function toTheFourth(oneItem){
    return oneItem ** 4;
}