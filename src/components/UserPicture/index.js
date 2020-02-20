/*import React, { Component } from 'react';
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

 export default UserPicture;*/

import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class UserPicture extends Component {
  constructor (props) {
    super( props );
    this.state = {
      error: null,
    };
  }

  onErrorHandler = (e) => {
    this.setState( {
                     error: e.error,
                   } );
  };

  render () {
    if (this.state.error) {
      return <span>AC</span>;
    } else {
      return <img {...this.props} onError={this.onErrorHandler}/>;
    }
  }
}

/*классу добавляем св-во - "пропсы по умолчанию"  */
UserPicture.defaultProps = {
  className: '',
};

/*классу добавляем св-во - "какие типы пропсов мы ожидаем"  */
UserPicture.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default UserPicture;