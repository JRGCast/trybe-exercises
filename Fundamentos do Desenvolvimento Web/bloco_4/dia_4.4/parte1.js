// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
    function greetings(name) {
    return ("Bem-vindo/a, " + name.personagem + "!")
}
  console.log(greetings(info))

//2. Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

info.recorrente = "Sim";

//3. Faça um for/in que mostre todas as chaves do objeto.
function chaves(objeto) {
 let obj = objeto; 
 for(chaves in obj) {
  console.log(chaves)
  }
  return obj
}
console.log(chaves(info))

 // 4. Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
function todasAsChaves(parametro) {
 let objeto = parametro;
 for(chaves in objeto) {
 console.log(objeto[chaves])
 }
 return objeto
}
console.log(todasAsChaves(info))

// 5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

 function compare(name1, name2) {

    for (key in name1) {
      if(name1[key] != name2[key]) {
     console.log (name1[key] + " e " + name2[key])
     } else {
     console.log("Ambos são recorrentes")
    }
   }
   return "Preciso colocar isso aqui de um jeito que não acrescente na função"
 }

console.log(compare(info, info2))
  
