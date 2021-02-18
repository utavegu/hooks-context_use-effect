// import logo from './logo.svg';
import './App.css';
import List from './components/List.jsx';
import Details from './components/Details.jsx';
import { useState } from 'react';

function App() {
  /*
  1) Проптайпсы
  2) Прелоадер
  3) Трай-кэтч
  4) Внешний вид
  */
  const [selectedUser, setSelectedUser] = useState()
  const handleSelectUser = (data) => {
    setSelectedUser(data);
  }
  return (
    <>
      <List onSelectUser={handleSelectUser}/>
      <Details selectedUser={selectedUser}/>
    </>
  );
}

export default App;
