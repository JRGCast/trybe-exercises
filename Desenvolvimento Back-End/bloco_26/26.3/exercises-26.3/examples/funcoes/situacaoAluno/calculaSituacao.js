function calculaSituacao(media) {
  if (media >= 7) { // inicialmente foi proposital não colocar '>=', justamente para o teste falhar
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;
