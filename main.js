var cuantia = [900,3000,9000,18000,30000,60000,150000,210000,300000,450000,600000]
var porcentaje = [35,30,20,12,11,10,7,6.6,6,5.5,5]
var acumulado = [315, 945, 2145,3225,4545,7545,13845,17805,23205,31455,38955]

var cuantia_laboral = [5000,10000,21000,30000,90000,300000]
var porcentaje_laboral = [18,16,14,12,10,6]
var acumulado_laboral = [900,1700,3240,4320,10320,22920]

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

function calculo_laboral(cantidad) {
    if (cantidad <= cuantia_laboral[0]) {
        return (cantidad * (porcentaje_laboral[0] / 100)).toFixed(2);
    }
    else {
        for (var i = 0; i < cuantia_laboral.length; i++) {
            if (cantidad > cuantia_laboral[i] && cantidad <= cuantia_laboral[i + 1] && cantidad <= 300000) {
                return acumulado_laboral[i] + ((cantidad - cuantia_laboral[i]) * (porcentaje_laboral[i+1]/100));
            }
            if (cantidad > 300000) {
                return acumulado_laboral[5] + (cantidad - cuantia_laboral[5])*(5/100);
            }
        }
    }
}

function responder(){
    var z = document.getElementById("election").value;
    var x = document.getElementById("cuantia").value;
    var y = document.getElementById("porcentaje").value;

    if (z == "Escala General") {
        var percent = calculo(x)*(y/100);
    }else {
        console.log(calculo_laboral(x));
        
        var percent = calculo_laboral(x)*(y/100);
    }
    
    document.getElementById("resultado").innerHTML = "<strong>Honorarios: </strong> " + percent.toFixed(2) + "€" + "<br /><strong>21% IVA: </strong>" + (percent*(21/100)).toFixed(2) + "€" + "<br /><strong>Total: </strong>" + (percent + percent*(21/100)).toFixed(2) + "€";
}
