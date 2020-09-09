
// DESAFIO - validador de cartão de crédito

/* Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado 
 Algoritmo de Luhn. Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), 
 siga os seguintes passos:*/

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371


const arrayNumeros = [5, 2, 6, 1, 4, 0, 0, 3, 1, 9, 7, 4, 6, 3, 7, 1]
const ultimoNumero = arrayNumeros.pop()
     arrayNumeros.reverse()
  
     console.log(arrayNumeros)
  

    for (let i = 0; i < arrayNumeros.length; i++) {
      if ((i+1)%2 !== 0){
        arrayNumeros[i] = arrayNumeros[i]*2 
        if (arrayNumeros[i] > 9){
          arrayNumeros[i] = arrayNumeros[i] - 9
        }
      
      }
        
    }
    console.log(arrayNumeros)

    let total = 0 
    for (let i = 0; i < arrayNumeros.length; i++)
      total = total + arrayNumeros[i]
      
    console.log(total)

    total = total + ultimoNumero
    console.log(total)
    if (total % 10 == 0)
        console.log("É válido!") 
    else 
        console.log("É inválido!")

    
   









// DESAFIO - saudar clientes

/* Escreva uma função chamada saudarCliente.
   Essa função deve receber um nome, verificar se ele existe na base de clientes e retornar uma saudação com base em 
   quantas vezes a cliente visitou um estabelecimento. 
   Consulte o objeto baseClientes abaixo. A saudação deve ser diferente, dependendo do nome da reserva.*/

// Caso 1 - Cliente desconhecida (o nome não está presente no objeto baseClientes)
// console.log(saudarCliente('Chiquinha')) // --> 'Olá, é a primeira vez por aqui?'

// Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)
// console.log(saudarCliente('Clotilde')) // --> 'Bem-vinda, Clotilde! Que bom que voltou!'

// Caso 3 - Cliente repetida: (o valor de 'visitas' é maior que 1)
// console.log(saudarCliente('Florinda')) // --> 'Bem-vinda mais uma vez, Florinda!'

// Notas:
// Sua função não deve alterar o objeto baseClientes para atualizar o número de visitas.
// Não codifique os dados exatos da amostra. Esta é uma má ideia:
// if (nomeCliente === 'Maria') {
//   // etc
// }
/*function saudarCliente()

const baseClientes = {
  Clotilde: {
    visitas: 1,
  },
  Florinda: {
    visitas: 2,
  },
  Paty: {
    visitas: 3,
  },
}*/