function desglosarString(cadena, tipo){
    vocales = ['a', 'e', 'i', 'o', 'u']
    nVocales = 0
    nConsonantes = 0
    for (let i = 0; i < cadena.length; i++) {
        const letra = cadena[i]
        if(vocales.includes(letra)){
            nVocales += 1
        }else{
            nConsonantes += 1
        }
    }
    return tipo==='vocales'? nVocales : nConsonantes
}

function twoSum(array,expect){
    for (let i = 0; i < array.length; i++) {
        num1 = array[i]
        sum = num1
        for (let j = 0; j < array.length; j++) {
            num2 = array[j];
            if(i!==j){
                sum += num2
                if(sum===expect){
                    return [i,j]
                }else{
                    sum -= num2
                }
            }
        }
    }
    return []
}

function conversionRomana(cadena){
    const conversion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    sum = 0
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena[i]
        if(i === cadena.length - 1){
            sum += conversion[letra]
        }else{
            siguiente = cadena[i+1]
            if(conversion[letra] < conversion[siguiente]){
                sum += conversion[siguiente] - conversion[letra]
                i += 1
            }else{
                sum += conversion[letra]
            }
        }
    }
    return sum
}

function descomposicion(cadena){
    const palabras = cadena.split(",")
    const completa = palabras[0]
    let res = []
    let sw = 0
    for (let i = 1; i < palabras.length; i++) {
        parte = palabras[i]
        for (let j = 1; j < palabras.length; j++) {
            const parte2 = palabras[j]
            if(parte+parte2 === completa){
                res.push(parte)
                res.push(parte2)
                sw = 1
                break
            }
        }
        if(sw){
          break
        }
    }
    return res
}

console.log(desglosarString("murcielagos", "vocales" ))
console.log(desglosarString("murcielagos", "consonantes" ))
console.log(twoSum([2, 7, 11, 15], 9 ))
console.log(twoSum([3, 4, 2], 6 ))
console.log(conversionRomana("III"))
console.log(conversionRomana("XIV"))
console.log(conversionRomana("MMXXIV"))
console.log(conversionRomana("MCMXCVII"))
console.log(descomposicion("malhumor,al,hum,humor,m,mal,malhu"))
console.log(descomposicion("computadora,com,compu,puto,ra,tadora"))
console.log(descomposicion("pelota,pe,lo,ta,pel,ota"))
