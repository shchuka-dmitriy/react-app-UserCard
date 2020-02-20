import React       from 'react';
import UserPicture from '../UserPicture';
import styles      from './UserCard.module.css';

function UserCard (props) {
  const { user } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={user.profilePicture} alt={'user'}/>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.fullName}>{`${user.firstName} ${user.lastName}`}</div>
        <div className={styles.email}>{`${user.email}`}</div>
      </div>
    </div>);
}

export default UserCard;