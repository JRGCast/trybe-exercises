// não é necessária a importação do mocha, pois, quando é instalado como devDependencies, fica global 
const { expect } = require('chai');

const calculaSituacao = require('../funcoes/situacaoAluno/calculaSituacao');

describe('Quando a média for menor que 7', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovado');
  });
});
