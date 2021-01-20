import React, { Component } from 'react'
import './Forms.css'
import PropTypes from 'prop-types'

const ufEstado = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
].map(element => <option key={Object.keys(element)}>{`${Object.values(element)} - ${Object.keys(element)}`}</option>)

export default class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
    this.isValidAddress = this.isValidAddress.bind(this)
    this.isValidCity = this.isValidCity.bind(this)
    this.alertCargo = this.alertCargo.bind(this)

    this.state = {
      NomeCompleto: '',
      CPF: '',
      Email: '',
      Endereço: '',
      Cidade: '',
      Estado: '',
      Residência: '',
      ResCurr: '',
      Cargo: '',
      AlertCargo: false,
      ResCargo: '',
    }
  }
  handleChange({ target }) {
    let { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value
    console.log(name, value)
    if (name === 'NomeCompleto') value = value.toUpperCase()
    this.setState({
      [name]: value
    })
  }
  handleBlur({ target }) {
    let { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value
    if (name === 'Cidade') value = value.match(/^\d/) ? '' : value
    this.setState({
      [name]: value
    })
  }

  isValidEmail() {
    let result = '';
    if (this.state.Email !== '') {
      this.state.Email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{3})$/i) ? result = <span style={{ color: 'green' }}> ✅ This is a valid e-mail 😃 </span> : result = <span style={{ color: 'red' }}> ❌ This isn't a valid e-mail 😟 </span>
    }
    return result
  }

  isValidAddress() {
    let result = '';
    if (this.state.Endereço !== '' && this.state.Endereço.match(/[_=+§*?!#$%&¨¬@\\()]/)) result = <span style={{ color: 'red' }}> ❌ Contains invalid character 😟</span>
    return result
  }

  isValidCity() {
    let result = '';
    if (this.state.Cidade !== '' && this.state.Cidade.match(/^\d/)) result = <span style={{ color: 'red' }}> ❌ Cities don't starts with numbers 😟</span>
    return result
  }

  alertCargo() {
    if (this.state.AlertCargo === false) {
      alert('Preencha com cautela')
      this.setState({ AlertCargo: true })
      setTimeout(() => this.setState({ AlertCargo: false }), 20 * 1000)
    }
  }

  render() {
    return (
      <section>
        <form>
          <fieldset className='fieldset'>
            <legend className='legends'>Dados Pessoais</legend>
            <label>Nome Completo:
          <input className='input' type='text' name='NomeCompleto' value={this.state.NomeCompleto} onChange={this.handleChange} maxLength={40} required />
            </label> <br />
            <label>CPF:
          <input className='input' type='number' name='NomeCompleto' value={this.state.CPF} onChange={this.handleChange} maxLength={11} required />
            </label> <br />
            <label>E-mail:
          <input className='input' type='email' name='Email' value={this.state.Email} onChange={this.handleChange} maxLength={50} required />
            </label>
            <>{this.isValidEmail()}</>
            <label>Endereço:
          <input className='input' type='text' name='Endereço' value={this.state.Endereço} onChange={this.handleChange} maxLength={200} required />
              <div onChange={this.handleChange}>
                <input type="radio" name="Residência" value="Casa" />Casa
              <input type="radio" name="Residência" value="Apartamento" />Apto
            </div>
            </label>
            <>{this.isValidAddress()}</>
            <label>Cidade:
          <input className='input' type='text' name='Cidade' value={this.state.Cidade} onChange={this.handleChange} onBlur={this.handleBlur} maxLength={28} required />
            </label>
            <>{this.isValidCity()}</>
            <label>Estado/UF:
          <select className='input' name='Estado' defaultValue='' onChange={this.handleChange} required>
                <option value=''>Escolha um estado</option>
                {ufEstado}</select>
            </label>
            <>{this.isValidAddress()}</>
          </fieldset>
          <fieldset className='fieldset'>
            <legend className='legends'> Dados do último emprego </legend>
            <label> Resumo do Currículo:
              <textarea name='ResCurr' value={this.state.ResCurr} maxLength={1000} onChange={this.handleChange} required></textarea>
            </label>
            <label>Último cargo:
          <input className='input' type='text' name='Cargo' value={this.state.Cidade} maxLength={40} onChange={this.handleChange} onFocus={this.alertCargo} required />
            </label>
            <>{this.isValidCity()}</>
            <label> Descrição do último cargo
              <textarea name='ResCargo' value={this.state.ResCargo} maxLength={500} onChange={this.handleChange} required></textarea>
            </label>
          </fieldset>
        </form>
      </section>
    )
  }
}