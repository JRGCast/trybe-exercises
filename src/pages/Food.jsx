import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Food extends Component {
  constructor() {
    super()
    this.state = {
    foodChoice: 'Açaí',
    selectedBtn: 'none'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleColor = this.handleColor.bind(this)
  
}

handleSelection (position) {
  const {selectedBtn} = this.state;
  selectedBtn !== position ? this.setState({
   selectedBtn: position
  }) : this.setState({
    selectedBtn: 'none'
  })
}

handleColor(position) {
  const {selectedBtn} = this.state;
  let result
  selectedBtn === position ? result = {backgroundColor: 'purple', color: 'white'} : result = {backgroundColor: 'white', color: 'black'} 
  return result
}

handleChange({target}) {
const {name} = target;
const value = target.type === 'checkbox' ? target.checked : target.value  
this.setState({
  [name]: value
})

}

 render() {
  const {name, cookieChoice} = this.props.match.params;
  const {foodChoice} = this.state;
  const btnArr = [{id:1, value:'açaí'}, {id:2, value:'sopa'}, {id:3, value:'sushi'}]
   return(
     <div>
   <h1>{name}, escolheu {cookieChoice.toUpperCase()} como correto... qual destas é a pior?</h1>
   <section>
   {btnArr.map(({id,value}) => 
    <button key={id} 
    style={this.handleColor(id)} 
    onClick={(this.handleChange, () => this.handleSelection(id))} 
    value={value} 
    name='foodChoice'>{`${value.charAt(0).toUpperCase()}${value.slice(1)} !`}</button>
    )
   }
   </section>
   <Link to={`/animal/${name}/${cookieChoice}/${foodChoice}`}>Prosseguir</Link>
   </div>
   )
 }
}