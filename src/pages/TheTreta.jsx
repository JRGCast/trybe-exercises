import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class TheTreta extends Component {

  render() {
    const {name, cookieChoice, foodChoice, animalChoice} = this.props.match.params;
    return (
      <main>
        <h1>EXTRA! EXTRA!</h1>
        <p>"Em entrevista internacional, {name} teve que debater sobre a discussão mais acirrada do século, é biscoito ou bolacha? {name} foi direto na canela dizendo que o certo é {cookieChoice}! E ainda complementou que {foodChoice === 'sopa' ? `${foodChoice} não é janta` : `${foodChoice} é ruim`} e que nem seu {animalChoice} come!"</p>
      </main>
    )
  }
}