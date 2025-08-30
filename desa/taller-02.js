function findMax(numeros){
    let mayor = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i]
        if(numero > mayor){
            mayor = numero
        }
    }
    return mayor
}

function includes(lista,elemento){
    for( let i = 0; i < lista.length; i++ ){
        if( elemento === lista[i] ){
            return true
        }    
    }
    return false
}

function sum(lista){
    let suma = 0
    for( i = 0; i < lista.length; i++ ){
        const num = lista[i]
        suma += num 
    }
    return suma
}

function findMin(numeros){
    let menor = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i]
        if(numero < menor){
            menor = numero
        }
    }
    return menor
}

function createList(min,max){
    let value = min
    list = []
    for (let i = 0; i < max-min+1; i++) {
        list.push(value)
        value++
    }
    return list
}

function missingNumbers(list){
    menor = findMin(list)
    mayor = findMax(list)
    numerosCompletos = createList(menor,mayor)
    listaF = []
    for (let i = 0; i < numerosCompletos.length; i++) {
        const num = numerosCompletos[i];
        if( !includes(list, num) ){
            listaF.push(num)
        }
    }
    return listaF
}
console.log(findMax([3,17,-1,4,-19]))
console.log(includes([[3,17,-1,4,-19]],2))
console.log(includes([3,17,-1,4,-19],3))
console.log(sum([3,17,-1,4,-19]))
console.log(missingNumbers([7,2,4,6,3,9]))