// No Bloco 4 você desenvolveu um projeto para testar os seus conhecimentos em Javascript e lógica de programação: o Playground functions . Nos exercícios a seguir, você irá trabalhar com os testes para algumas funções que você criou! Aproveite para refatorá-las e usar todos os recursos que já aprendemos até aqui, como as Higher Order Functions e as features do Javascript ES6.
// encode-decode.test.js
const { encode, decode, hydrate, techList } = require('./redoRefacPGFunc.js');

// 1. Para as funções encode e decode crie os seguintes testes:
// Teste se encode e decode são funções;
// Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});

// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// Implemente a função techList a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! É importante nunca alterar os testes ou as variáveis já escritas no código .
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(
      techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'),
    ).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;

// Implemente a função hydrate a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto Playground Function! É importante nunca alterar os testes ou as variáveis já escritas no código .
describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água',
    );
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água',
    );
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água',
    );
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
