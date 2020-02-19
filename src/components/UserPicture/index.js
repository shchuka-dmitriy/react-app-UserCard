import React, { Component } from 'react';
import ColorHash            from 'color-hash';

class UserPicture extends Component {
  constructor (props) {
    super( props );
    this.state = {
      error: null
    };
    this.colorHash = new ColorHash();
  }

  onError = (e) => {
    this.style = {
      backgroundColor: this.colorHash.hex( `${this.props.firstName} ${this.props.lastName}` )
    };

    this.setState( {
                     error: e.error
                   } );
  };

  render () {
    const { error } = this.state;
    if (error) {
      return <div style={this.style}>{`${this.props.firstName[0]}${this.props.lastName[0]}`}</div>;
    } else {
      return (
        <img className={this.props.className} src={this.props.picture} alt="" onError={this.onError}/>
      );
    }
  }
}

export default UserPicture;