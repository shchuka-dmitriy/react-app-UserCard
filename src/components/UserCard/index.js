import React       from 'react';
import UserPicture from '../UserPicture';

function UserCard (props) {
  const { user } = props;
  return <div>
    <UserPicture className={this.className}/>
    {`${user.firstName} ${user.lastName}`}
  </div>;
}

export default UserCard;