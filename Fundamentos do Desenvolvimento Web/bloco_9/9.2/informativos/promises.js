// Para criar a promise, utilizamos o construtor Promise junto com o operador new . Um construtor não é nada mais do que uma função especial que cria um objeto a partir de uma classe. Se você nunca ouviu falar de classes ou construtores, não se preocupe, seu entendimento não é nescessário para entender promises, apenas veja sua sintaxe.

// O construtor recebe uma função com 2 parâmetros, resolve e reject , fique tranquilo que já já vamos ver a importância desses dois. Um ponto a se notar aqui é que usamos uma arrow function para passar a função como parâmetro pro construtor mas você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros.

// A promise tem 3 estados. Pending , Resolved e Rejected . Quando a promise é executada ela entra automáticamente no estado Pending . Aqui é quando ela sai da fila e vai para sua "área especial". Ao voltar, ela pode voltar com um dos 2 estados, Resolved , se ocorreu tudo certo com sua execução ou Rejected , se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 5 e 10, será um sucesso. Nosso programa ficaria assim:

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number > 10 || number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });
// Uma coisa que você irá reparar é que quando o programa é bem sucedido, seu output aparece normalmente. Já quando ele é mal sucedido, ele lança um error! Essa é a principal diferença entre o resolve e o reject , exatamente o que queríamos demonstrar. Na próxima sessão vamos ver como tratar esse erro.

// Existem 2 principais ferramentas que podemos usar para gerir o fluxo assíncrono com promises: o .then() e o .catch() . Vamos começar falando sobre o .then() . Para isso , vamos refatorar nossa promise:

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number > 10 || number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(number); // Promise concluída, daí passa para o .then
// })
//   .then((number) => `Que sucesso =) nosso número foi ${number}`)
//   .then((msg) => console.log(msg));

// Vamos ver o que acontece no código acima. A promise é executada e após sua execução, caso o número seja algo entre 5 e 10, o resolve retorna o número que é passado para o primeiro .then() como number . Por sua vez, ele retorna a frase Que sucesso =) nosso número foi ${number} que é passado como argumento para o segundo .then() , que o usa para "logar" no console.
// Ok, mas o erro continua acontecendo, o que podemos fazer em relação a isso? Agora entra o .catch() ! Vamos adicioná-lo ao código:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number > 10 || number <= 5) {
    return reject(number);
  }
  resolve(number);
})
  .then((number) => `Que sucesso =) nosso número foi ${number}`)
  .then((msg) => console.log(msg))
  .catch((number) => console.log(`Que fracasso =( Nosso número foi ${number}`));

// Se executarmos o código acima, vamos ver que o erro anterior desapareceu pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject, pula todos os .then() e é tratado no primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele, por esse motivo ele é geralmente usado no final.
