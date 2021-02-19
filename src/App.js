import './App.css';
import List from './components/List.jsx';
import Details from './components/Details.jsx';
import { useState } from 'react';

function App() {

  const [selectedUser, setSelectedUser] = useState()
  const handleSelectUser = (data) => {
    setSelectedUser(data);
  }

  return (
    <div className="container">
      <List onSelectUser={handleSelectUser}/>
      <Details selectedUser={selectedUser}/>
    </div>
  );
}

export default App;
