## Agora a prática
Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . Realize os exercícios dentro desse pacote.
1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
  1. A fórmula para calcular o IMC é peso / altura ^ 2 .
  2. Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
  3. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
  4. Armazene o script no arquivo imc.js .

2. Agora, permita que o script seja executado através do comando npm run imc
  1. O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

3. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
  1. Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
  2. Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
4. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
  1. O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
  2. Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .
