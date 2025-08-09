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

function peorParidad(num){
    console.log("makeit")
    while(num>=2){
        num = num / 2
        console.log(num)
    }
    if(num===1){
        esPar = true
    }else{
        esPar = false
    }
    return esPar
}

//console.log(convertidorTemp(100))
//console.log(resolvedor(1,5,4,false))
//console.log(mejorParidad(2))
//console.log(peorParidad(8))
