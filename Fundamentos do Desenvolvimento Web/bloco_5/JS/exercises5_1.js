  //Exercício 1
  function mudarTexto() {
      let paragrafo = document.getElementsByTagName('p')[1];
      paragrafo.innerHTML = "Refazer esses exercícios mais tarde, agora é tentar terminar o projeto"
    }
    mudarTexto();
    //Exercício 2
    function quadradoVerde() {
      let quadradoAmarelo = document.getElementsByClassName('main-content')[0];
      quadradoAmarelo.style.background = "rgb(76,164,109)";
    }
    quadradoVerde();
    //Exercício 3
    function quadradoBranco() {
      let quadradoVermelho = document.getElementsByClassName('center-content')[0];
      quadradoVermelho.style.background = "white";
    }
    quadradoBranco();
    //Exercício 4
    function corretorTitulo() {
      let title = document.getElementsByTagName('h1')[0];
      title.innerHTML = "Exercício 5.1 - JavaScript";
    }
    corretorTitulo();
    //Exercício 5
    function maiusculo() {
      let paragraph = document.getElementsByTagName('p')[0];
      paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
    }
    maiusculo();
    //Exercício 6
    function mostraTexto() {
      let paragraphs = document.getElementsByTagName('p');
      for (let i = 0; i < paragraphs.length; i += 1) {
        console.log(paragraphs[i].innerHTML);
      }
    }
    mostraTexto();


/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()




        */
