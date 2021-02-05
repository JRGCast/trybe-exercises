// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Api from './Api';

// Vamos em partes entender o que esta acontecendo:

afterEach(() => jest.clearAllMocks());
it('fetch joke', async () => {
  // A constante joke cria um objeto similar ao que é retornado da API ;
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
  jest.spyOn(global, 'fetch');

  // Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  // que também pode ser escrito assim:   
  // global.fetch = jest.fn(()=>
  // Promise.resolve({
  //   json: ()=> Promise.resolve(joke)
  // }));

  // ou mesmo 
  //   global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  const { findByText } = render(<Api />);

  // É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ;
  await findByText('Whiteboards ... are remarkable.');

  // As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { 'headers': { 'Accept': 'application/json' } }
  );
});

// A linha 8, afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.




