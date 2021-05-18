## 1. Estruturando testes com o Mocha
- O mocha é um framework de testes para JS, isso significa que ele nos ajuda a arquitetar os nossos testes, nos fornecendo a estrutura e interface para escrevermos os nossos testes.
- Vamos começar pelos comportamentos. Da mesma forma como descrevemos os comportamentos acima, temos que fazê-lo nos testes para dizermos o que estamos testando naquela caso específico. Para isso, o mocha nos fornece duas palavras reservadas o describe e o it .
- O describe nos permite adicionar uma descrição para um teste específico ou um grupo de testes. Já o it nos permite sinalizar exatamente o cenário de teste que estamos testando naquele ponto.

- Vamos praticar! Aquele mesmo cenário 1 , utilizando describe para descrever o cenário ficaria assim:
```
describe('Quando a média for menor que 7', () => {
  // escrever qual/como será o teste aqui 
});
```
- Perceba que o describe aceita dois parâmetros: o primeiro é a descrição e o segundo uma função para executar o cenário de teste. Outro ponto de atenção é que não é necessário importar o mocha em nosso arquivo, suas palavras reservadas serão interpretadas quando executamos o testes, mas veremos mais adiante como fazê-lo.
- Descrito nosso comportamento, vamos adicionar o que será testado de fato, ou seja, o que é esperado. Para isso, temos o it :

```
describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
      // escrever como será o teste aqui 
  });
});
```

 A sintaxe do it é bem semelhante à do describe : ela aceita uma string, qual o comportamento a ser testado, e uma função que executa os testes de fato.

## 2. Aferindo testes com o Chai
- O chai nos ajudará com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos testar e então ele validará se o resultado condiz com o esperado.
- Até aqui não estamos testando nada de fato, apenas descrevemos o teste. Para de fato testar nossa função precisamos chamá-la passando o input desejado e então validar se a resposta é aquela que esperamos.
- Sem as ferramentas de testes fizemos essa verificação utilizando alguns ifs , o que é bem trabalhoso:

```
 const respostaCenario1 = calculaSituacao(4);
 if (respostaCenario1 === 'reprovado') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}
```

- Essa validação é o que chamamos de assertion , "asserção" ou, em alguns casos, "afirmação" . Para nos ajudar com essa tarefa temos o chai , que nos fornece diversos tipos de validações diferentes.
- Usaremos a interface expect do chai em nossos exemplos, que significa de fato o que é esperado para determinada variável:

```
const resposta = calculaSituacao(4);

expect(resposta).equals('reprovado');
```
- No código acima, estamos chamando nossa função e, logo em seguida, afirmamos que seu retorno, armazenado na constante resposta , deve ser igual a ( equals ) 4 .
- Muito mais legível e simples!
- Vamos ver como fica nosso cenário de teste inteiro com mocha + chai :
tests/calculaSituacao.js

```
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});
```

- Pronto, nosso primeiro cenário de teste está escrito. Perceba como o chai nos fornece uma função pronta, equals que irá comparar se o valor "esperado" na resposta é igual ao passado para ele, ou seja, igual a "reprovado".
- A asserção equals é uma das diversas asserções disponíveis no chai. A documentação completa pode ser encontrada na [documentação oficial do chai](https://www.chaijs.com/api/bdd/) .
- Para tornar nosso teste ainda mais legível e elegante, o chai nos fornece outros getters encadeáveis que possuem um papel puramente estético. Por exemplo o to e o be , que nos permite escrever nossa assertion da seguinte maneira:

```
const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});
```
- Perceba que o to e o be não alteraram em nada a validação realizada, porém, a leitura fica muito mais fluída e natural, é como se estivéssemos dito que nosso teste "espera a resposta ser igual a "reprovado".
- Podemos encontrar um pouco mais sobre esse getters na documentação oficial do chai , em [language chains](https://www.chaijs.com/api/bdd/#method_language-chains) .
