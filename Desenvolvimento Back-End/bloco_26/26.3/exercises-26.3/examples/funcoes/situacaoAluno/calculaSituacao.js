function calculaSituacao(media) {
  if (media > 7) { // propositalmente não foi posto '>=' para o teste falhar
    return 'aprovado';
  }

  return 'reprovado';
}

module.exports = calculaSituacao;
