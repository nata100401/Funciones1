// function calculatePow(base,power){
//    var resullt= Math.pow(base,power);
//    document.write("<h1> " +base+ " elevada a " +power+ " es igual a " + resullt+"</h1>");
// }
// function setValue(){
//     var base=parseInt(prompt("Ingrese la base"));
//     var power=parseInt(prompt("Ingrese la potencia"));

// while(isNaN(base)|| base <=0 || power<=0 || isNaN(power)){
//     alert("Solo se permiten NUMEROS");
//     var base=parseInt(prompt("Ingrese la base"));
//     var power=parseInt(prompt("Ingrese la potencia"));
// }
// calculatePow(base,power);
// }
// setValue();

//**Utilizando funciones, resolver la siguiente ecuacion ax^2+bx+c */
function equation(a, b, c){
    var power= Math.pow(b,2)-(a*a*c);
    var root= Math.sqrt(power);
    var resultPositive= (-b)+(root)/(2*a);
    var resultNegative= (-b)-(root)/(2*a);
    document.write("<h1> El resuilta de la ecuacion cuando se suma es "+resultPositive+ "</h1>");
    document.write("<h1> El resuilta de la ecuacion cuando se resta es "+resultNegative+ "</h1>");
}
function setValue(){
    var a=prompt("Ingrese el valor de a");
    var b=prompt("Ingrese el valor de b");
    var c=prompt("Ingrese el valor de c");
        while(isNaN(a) || isNaN(b) || isNaN(c)){
            alert("Ingresar valores adecuados (NUMEROS)");
            var a=prompt("Im¡ngresr el valor de a");
            var b=prompt("Im¡ngresr el valor de b");
            var c=prompt("Im¡ngresr el valor de c");
        }
        equation(a, b, c);
}
setValue();