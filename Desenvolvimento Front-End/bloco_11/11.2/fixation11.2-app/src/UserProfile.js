import React from 'react';
import Image from './Image';
import './UserProfile.css';

class UserProfile extends React.Component {
  render() {
    const { name, email, id } = this.props;
    return (
      <div>
        <h2 className='id'>{id}</h2>
        <h3 className='naime'> {name} </h3>
        <h3 className='email'> {email} </h3>
        {/* <Image source={this.props.user.avatar} alt='User avatar' /> */}
        <p>Next User</p>
      </div>
    );
  }
}

export default UserProfile;
