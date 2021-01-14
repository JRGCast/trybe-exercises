import React, { Component } from 'react'
import database from './datas'

class Orders extends Component {
  render() {
    const { user, product, price } = this.props;
    return (

      < div >
        <h2>Orders Recently created</h2>
        <p> {user} </p> 
     {/* bought {product} for {price.value} {price.currency} </p> */}
      </div >)
  }
}

export default Orders