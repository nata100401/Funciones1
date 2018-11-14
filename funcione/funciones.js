function calculatePow(base,power){
   var resullt= Math.pow(base,power);
   document.write("<h1> " +base+ "elevada a " +power+ " es igual a " + resullt+"</h1>");
}
function setValue(){
    var base=parseInt(prompt("Ingrese la base"));
    var power=parseInt(prompt("Ingrese la potencia"));

while(isNaN(base)|| base <=0 || power<=0 || isNaN(power)){
    alert("Solo se permiten NUMEROS");
    var base=parseInt(prompt("Ingrese la base"));
    var power=parseInt(prompt("Ingrese la potencia"));
}
calculatePow(base,power);
}
setValue();

//**Utilizando funciones, resolver la siguiente ecuacion ax^2+bx+c */
