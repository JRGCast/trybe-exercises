// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let firstTitle = document.createElement('h1');
firstTitle.innerHTML = 'Exercício 5.2 - JavaScript DOM';
firstTitle.className = 'titulo';
document.body.appendChild(firstTitle);

// 2. Adicione a tag div com a classe main-content como filho da tag body;
let divMain = document.createElement('div');
divMain.className = 'main-content';
document.body.appendChild(divMain);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenter = document.createElement('div');
divCenter.className = 'center-content';
divMain.appendChild(divCenter);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let parag = document.createElement('p');
parag.innerHTML = 'Olá mundo';
divCenter.appendChild(parag);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeft = document.createElement('div');
divLeft.className = 'left-content';
divMain.appendChild(divLeft);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRight = document.createElement('div');
divRight.className = 'right-content';
divMain.appendChild(divRight);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
divLeft.appendChild(image)

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ul = document.createElement('ul');
let ulArray = ['um','dois', 'três','quatro', 'cinco','seis','sete','oito','nove','dez']
for (key of ulArray) {
    
}

// 9. Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.


// 10. Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:


// 11. Adicione a classe title na tag h1 criada;


// 12. Adicione a classe description nas 3 tags h3 criadas;


// 13. Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();


// 14. Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;


// 15. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;


// 16. Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
