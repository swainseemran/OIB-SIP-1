 opScreen = document.getElementById("op-screen");

function display(num){
    opScreen.value += num;
}

function Calculate(){
    try{
        opScreen.value = eval(opScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    opScreen.value = "";
}

function del(){
    opScreen.value = opScreen.value.slice(0,-1);
}