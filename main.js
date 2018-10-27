var cuantia = [900,3000,9000,18000,30000,60000,150000,210000,300000,450000,600000]
var porcentaje = [35,30,20,12,11,10,7,6.6,6,5.5,5]
var acumulado = [315, 945, 2145,3225,4545,7545,13845,17805,23205,31455,38955]

function calculo(cantidad) {
    if (cantidad <= cuantia[0]){
        return cantidad*(porcentaje[0]/100)
    } else {
        for (var i = 0; i < cuantia.length; i++) {
            if (cantidad > cuantia[i] && cantidad <= cuantia[i+1] && cantidad <= 600000) {
                return acumulado[i] + ((cantidad - cuantia[i])*(porcentaje[i+1]/100))
            }
            if (cantidad > 600000){
                return acumulado[10] + (cantidad - cuantia[10])*(4/100)
            }            
        }
    }
}
function responder(){
    var x = document.getElementById("cuantia").value;
    document.getElementById("resultado").innerHTML = calculo(x) + " Euros";
}
