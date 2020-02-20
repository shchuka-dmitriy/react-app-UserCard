import React    from 'react';
import UserList from './components/UserList';
import UserCard from './components/UserCard';

const testUser = {
  firstName: 'test',
  lastName: 'Testovich',
  email: 'test@gmail.com',
  profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZxB92o57fDLSau9cgX5Lcoj4Cks2aHhmGLKynf86TRW9MlG3K'
};

function App() {
  return (
    // <UserList />
    <UserCard user={testUser}/>
  );
}

export default App;
