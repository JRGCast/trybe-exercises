import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Food extends Component {
  constructor() {
    super()
    this.state = {
    animalChoice: 'cachorro'
    }

    this.handleChange = this.handleChange.bind(this)
}

handleChange({target}) {
const {name} = target;
const value = target.type === 'checkbox' ? target.checked : target.value  
this.setState({
  [name]: value
})
}

 render() {
  const {name, cookieChoice, foodChoice} = this.props.match.params;
  const {animalChoice} = this.state;
   return(
     <div>
   <h1>{name}, escolheu {cookieChoice.toUpperCase()} como correto, e elegeu {foodChoice.toUpperCase()} como a pior... qual animal prefere?</h1>
   <select name='animalChoice' onChange={this.handleChange}>
  <option value='cachorro'>Cachorro</option>
  <option value='gato'>Gato</option>
   </select>
    <Link to={`/treta/${name}/${cookieChoice}/${foodChoice}/${animalChoice}`}>Prosseguir para a treta</Link>
   </div>
   )
 }
}