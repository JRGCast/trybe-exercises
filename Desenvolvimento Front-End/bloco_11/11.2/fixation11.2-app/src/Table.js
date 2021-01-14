import React, { Component } from 'react';
import Image from './Image';
import UserProfile from './UserProfile';
import Orders from './Orders'
import database from './datas'
const { users, products } = database;

class Table extends Component {
  render() {

    return (
      <main>
      <section>
        {users.map((user) => {
          const { name, email, id } = user;
          return (<UserProfile name={name} email={email} id={id} />)
        })}
      </section>
      <section>
        {products.map(items => {
          const {headphone, energyDrink} = items;
          const {user} = energyDrink;
          
          return (<Orders user={user} />)
        })}
      </section>
      </main>
    );
  }
}

export default Table;
