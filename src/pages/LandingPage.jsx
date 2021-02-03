import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import cookieMonster from '../images/cookieMonster.jpg'

export default class LandingPage extends Component {
 
  
  render() {
    return (
<div className="app">
        <h1>THE TRETA HAS BEGUN!</h1>
        <p>Clique na imagem para ir para a treta!</p>
        <Link to='./name'>
        <img src={cookieMonster} alt="o certo é bolacha"/>
        </Link>
      </div>
    )
  }
}
