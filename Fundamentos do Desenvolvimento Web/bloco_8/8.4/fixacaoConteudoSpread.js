// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacate', 'Mamão', 'Tangerina', 'Açaí'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mel', 'Doce de Leite', 'Açúcar', 'Farinha Láctea'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return fruit.concat(...additional);
};

console.log(fruitSalad(specialFruit, additionalItens)); // (8) ['Abacate', 'Mamão', 'Tangerina', 'Açaí', 'Mel', 'Doce de Leite', 'Açúcar', 'Farinha Láctea']
// Ok!
