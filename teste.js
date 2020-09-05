const arrNums = [10,11,12,10,11,12,10,11,12,10,11,12]

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

//console.log(soma(arrNums))


//const arr = arrayNumeros.indexOf(1,3, 5, 7, 9, 11, 13, 15)
     //console.log(arr)


/*const arrayNumeros = [5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 4]
function multiImpares([])
      arrayNumeros.multiImpares * 2
console.log(arrayNumeros)*/



function saudarCliente()

clientesLoja = [

  { nome: "Ani", visitas: ["2"] },
  { nome: "Vanessa", visitas: ["7"] },
  { nome: "Malu", visitas: ["10"] },
  { nome: "Priscila", visitas: ["5"] }

]

for (let i = 0; i < clientesLoja.length; i++) {

  //             i: número do índice       nomeDaArray[i]: elemento
    console.log(`índice: ${i}, elemento: ${clientesLoja[i]}`)
}

saudarCliente()