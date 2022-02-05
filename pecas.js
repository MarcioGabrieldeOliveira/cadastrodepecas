let peso = 80;

if(peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!")
} else {
    console.log("A peça não possui o peso mínimo!")
}

let listapecas = ["Disco de Freio", "Amortecedor", "Virabrequim", "Vela", "Bateria", "Radiador", "Correia"]
//[1,2,3,4,5,6,7,8,9,10]
//[0,1,2,3,4,5,6,7,8,9] - Zero Based

// console.log("Peça de Exemplo: " + listapecas[2])

if (listapecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("A lista esta cheia")
}

let nomepecas = "Virabrequim"

if (nomepecas.length >= 3) {
    console.log ("Esta peça pode ser cadastrada")
} else {
    console.log ("esta peça não possui mais que 3 caracteres, portanto é invalida")
}

