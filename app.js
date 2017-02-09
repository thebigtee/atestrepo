// Javascript
function multiply(num){
    return function(factor){
        num * factor;
    }
}

var mul = multiply(10);
var result = mul(5);
document.write("The final result of the closure: " + result);