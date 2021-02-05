import React, {Component} from 'react';

class Inputs extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const {nome, email} = this.state;
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={ (e) => this.handleInput(e) }
            name='nome'
            data-testid="input-nome"
            value={ nome }
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={ (e) => this.handleInput(e) }
            name='email'
            data-testid='input-email'
            value={ email }
          />
        </p>
      </div>
    );
  }
}

export default Inputs;