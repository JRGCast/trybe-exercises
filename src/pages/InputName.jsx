import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookie from './Cookie'


export default class InputName extends Component {
constructor(){
  super()
  this.state = {
    inputName: 'Estranho'
  }
  this.handleChange = this.handleChange.bind(this)
}

handleChange({target}) {
const {name, value} = target;
this.setState({
  [name]: value
})
}



render() {
  const {inputName} = this.state
  return (
    <div>
    {console.log(inputName)}
    <h2>Qual é o seu nome?</h2>
  <input name='inputName' type='text' placeholder='Insira seu nome' onChange={this.handleChange}/>
  <Link to={`/cookie/${inputName}`}><button>Prosseguir</button></Link>
  </div>
  )
}
}