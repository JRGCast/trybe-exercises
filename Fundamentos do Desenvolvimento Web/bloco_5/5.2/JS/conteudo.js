// 1. Acesse o elemento elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "red";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerHTML = "Olá mundo";

// 4. Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").childNodes[1]; // Atenção=> childNodes retorna um array;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentNode.firstElementChild; // Primeiro subimos ao pai para então pegar o ELEMENTO filho, pois, o filho[firstChild] é o texto.

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta") //???????

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
.document.querySelector("#elementoOndeVoceEsta").parentNode.childNodes[5];

// 8. Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").childNodes[5];

// Crie um irmão para elementoOndeVoceEsta.
// // Crie um filho para elementoOndeVoceEsta.
// // Crie um filho para primeiroFilhoDoFilho.
// // A partir desse filho criado, acesse terceiroFilho.
// Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.