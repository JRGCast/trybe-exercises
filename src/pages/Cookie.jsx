import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Cookie extends Component {
  constructor() {
    super()
    this.state = {
    cookieChoice: 'Biscoito'
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
  const {name} = this.props.match.params;
  const {cookieChoice} = this.state;
   return(
     <div>
   <h1>{name}, qual é o correto?</h1>
   <section onChange={this.handleChange}>
 <input type='radio' value='biscoito' name='cookieChoice' defaultChecked/>Biscoito
   <input type='radio' value='bolacha' name='cookieChoice'/>Bolacha
   </section>
   <Link to={`/food/${name}/${cookieChoice}`}>Prosseguir</Link>
   </div>
   )
 }
}