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

const cartao = [5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,4]
    cartao.pop()
    cartao.reverse()

const  cartaoIndImp = 
multiPor2()
condiçãoParaSubtrair()






    console.log(cartao)



    /*for(i = 0; i < numeroCartao.length; i++){
        if(i % 2 == 0) { 
            multiplicacao.push(i*2) 
          } 
          else 
          {
             multiplicacao.push(i)
            }
            return multiplicacao
  }*/
  