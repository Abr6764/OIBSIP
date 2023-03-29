let celius = document.getElementById("celius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let btn = document.getElementById("reset");



celius.addEventListener('input',function(){
    let temp = parseFloat(celius.value);

    fahrenheit.value = 9/5*temp + 32;
    kelvin.value = temp + 273.15;
});


fahrenheit.addEventListener('input',function(){
    let temp = parseFloat(fahrenheit.value);

    celius.value = (5/9)*(temp-32);
    kelvin.value = (5/9)*(temp+459.67);
});


kelvin.addEventListener('input',function(){
    let temp = parseFloat(kelvin.value);

    celius.value =temp - 273.15;

    fahrenheit.value = (temp*5/9)-459.67;
});

btn.addEventListener("click",function(){


    celius.value = "";
    fahrenheit.value = "";
    kelvin.value = "";

});



