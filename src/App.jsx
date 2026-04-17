import React from 'react';
import MyClients from './Components/MyClients';
const fetchUsers = fetch('http://localhost:3000/users').then(res=>res.json())
const App = () => {
  return (
    <div>
      <MyClients fetchUsers={fetchUsers}></MyClients>
    </div>
  );
};

export default App;