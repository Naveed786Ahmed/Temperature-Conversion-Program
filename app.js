document.getElementById("submit").onclick = function(){
    let temp = document.getElementById("temp").value;
    temp = Number(temp);

    if(document.getElementById("celsius").checked){
        let result = toCelsius(temp);
        document.getElementById("result").innerHTML = result + "C"
    }

    else if(document.getElementById("fahrenheit").checked){
        let result = toFahrenheit(temp);
        document.getElementById("result").innerHTML = result + "F"
    }

    else{
        alert("Select any one option!!")
    }

}

function toCelsius(temp){
    return (temp - 32) * 5/9; 
}

function toFahrenheit(temp){
    return (temp * 9/5) + 32; 
}