import React, { Component } from 'react';
import UserCard             from '../UserCard';
import { loadJson }         from '../../utils';
import REST_API_BASE_URL from '../../constants';

class UserList extends Component {
  constructor (props) {
    super( props );
    this.state = {
      users: [],
      isFetching: false,
      error: null
    };
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map( (user) => {
      return (
        <li key={user.id}>

          <UserCard user={user}/>
        </li>
      );
    } );
  };

  componentDidMount () {
    loadJson( '/users.json' )
      .then()
      .catch();
  }

  render () {
    const { isFetching } = this.state;

    if (isFetching) {
      return <div>Loading...</div>;
    } else {
      return (
        <ol>
          {
            this.renderUsers()
          }
        </ol>
      );
    }
  }
}

export default UserList;