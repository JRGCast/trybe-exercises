import React, { Component } from 'react'
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    let result = true;
    if(this.state.counter > 5) 
    {result = false
    console.log('Not on the screen! But state will upgrade anyways...')
    }
    console.log("shouldComponentUpdate", this.state, nextState);
    return result;
  }

//   E para o caso mais complicado? Isto é, atualizar o estado baseado no estado anterior e executar alguma lógica somente depois do estado atualizar ao mesmo tempo?! Nesse caso tanto o primeiro parâmetro quanto o segundo são callbacks!
//   this.setState(
//     (estadoAnterior) => ({ meuEstado: estadoAnterior }), // Primeiro parâmetro!
//     () => { /* ... Sua lógica aqui */ } // Segundo parâmetro!
//   )
//   A sintaxe é um tanto confusa, mas guarde isso na sua caixa de ferramentas para fazer lógicas de Loading... quando se está esperando a resposta de uma API! E lembre-se: como a this.setState não retorna uma promise, usar async/await com ela NUNCA vai funcionar.
// 💡 Aprendemos no vídeo também sobre como atualizar arrays no estado com base no estado anterior! Use o spread operator! this.setState(({ meuArrayNoEstado }) => ({meuArrayNoEstado: [...meuArrayNoEstado, novoElemento] }))


  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, prevState);
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}