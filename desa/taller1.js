// let: se puede cambiar el valor
// const:; No se puede cambiar

function convertidorTemp(temp){
    return temp*(9/5)+32
}
// True: Positivo, False: Negativo
function resolvedor(a,b,c,signo){
    if(signo){
        x = (-b+(b**2-4*a*c)**(0.5))/(2*a)
    }else{
        x = (-b-(b**2-4*a*c)**(0.5))/(2*a)
    }
    return x
}

function mejorParidad(num){
    return num % 2 === 0
}

function peorParidad(n) {
    while (n > 1) {
        if (n / 2 !== Math.floor(n / 2)) {
            return false;
        }
        n = Math.floor(n / 2);
    }

    return true;
}

//console.log(convertidorTemp(100))
//console.log(resolvedor(1,5,4,false))
//console.log(mejorParidad(2))
//console.log(peorParidad(8))

