function clearScreen(){
    document.getElementById('result').value="";
}

function display(value){
    document.getElementById('result').value += value;
}

function calculate(){
    var p = document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q;
}
/*
function keyboard(event)
{
    function myFunction(event) {
        if (event.key == '0' || event.key == '1' 
            || event.key == '2' || event.key == '3'
            || event.key == '4' || event.key == '5' 
            || event.key == '6' || event.key == '7'
            || event.key == '8' || event.key == '9' 
            || event.key == '+' || event.key == '-'
            || event.key == '*' || event.key == '/')
            document.getElementById("result").value += event.key;
        
}
*/
