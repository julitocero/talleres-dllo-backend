function findMax(numeros: number[]): number {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero > mayor) {
            mayor = numero;
        }
    }
    return mayor;
}

function includes<T>(lista: T[], elemento: T): boolean {
    for (let i = 0; i < lista.length; i++) {
        if (elemento === lista[i]) {
            return true;
        }
    }
    return false;
}

function sum(lista: number[]): number {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        const num = lista[i];
        suma += num;
    }
    return suma;
}

function findMin(numeros: number[]): number {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero < menor) {
            menor = numero;
        }
    }
    return menor;
}

function createList(min: number, max: number): number[] {
    let value = min;
    const list: number[] = [];
    for (let i = 0; i < max - min + 1; i++) {
        list.push(value);
        value++;
    }
    return list;
}

function missingNumbers(list: number[]): number[] {
    const menor = findMin(list);
    const mayor = findMax(list);
    const numerosCompletos = createList(menor, mayor);
    const listaF: number[] = [];
    for (let i = 0; i < numerosCompletos.length; i++) {
        const num = numerosCompletos[i];
        if (!includes(list, num)) {
            listaF.push(num);
        }
    }
    return listaF;
}

console.log(findMax([3, 17, -1, 4, -19]));
console.log(includes([3, 17, -1, 4, -19], 2));
console.log(includes([3, 17, -1, 4, -19], 3));
console.log(sum([3, 17, -1, 4, -19]));
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));

export { findMax, includes, sum, missingNumbers }
