/*компонент - загрузчик данных*/

import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import UserList             from '../UserList';

class ListDataLoader extends Component {
  constructor (props) {
    super( props );
    this.state = {
      isFetching: false,
      items: [],
      error: null,
    };
  }

  componentDidMount () {
    this.loadData()
  }

  loadData = () => {

  };

  render () {
    return (
      <UserList users={this.state.items}>
        {

        }
      </UserList>
    );
  }

}

export default ListDataLoader;