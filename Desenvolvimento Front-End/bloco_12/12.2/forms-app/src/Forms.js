import React, { Component } from 'react'
import './Forms.css'

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false,
      backGround: 'white',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    console.log(target.type)
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.backGround }}>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>

        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <fieldset>
            <input
              type="number"
              name="idade"
            />
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
            <input type='date'
              name='data' />

            <div onChange={this.handleChange}>
              <input type="radio" id="male" name="gender" value="male" />
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label>
            </div>
            <select name="backGround" value={this.state.backGround} onChange={this.handleChange}>
              <option value="white">Escolha uma cor de fundo</option>
              <option value="orange">Laranja</option>
              <option value="green">Limão</option>
              <option value="grey">Cinza</option>
              <option value="blue">Azul</option>
              <option value="black">Preto</option>
            </select>
          </fieldset>
        </form>
      </div>
    );
  }
}

