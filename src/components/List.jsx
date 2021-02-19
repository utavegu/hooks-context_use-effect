import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function List({onSelectUser: handleSelectUser}) {

  const USERS = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const [userList, setUserList] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USERS);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setUserList(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
      fetchData();		
    }, [])

  const handleChange = (evt) => {
    handleSelectUser(evt.target.value);
  }

  return (
    <>
      <div className="loading-status">
        {isLoading && <p className="loading"></p>}
        {hasError && <p className="loading-error"><b>Ошибка загрузки!</b></p>}
      </div>
      
      <form action="">
        <ul className="user-list">
          {userList.map(user =>
            <li className="user-item" key={user.id}>
              <input className="user-choice" id={user.id} onChange={(evt) => handleChange(evt)} type="radio" name="users" value={user.id}/>
              <label htmlFor={user.id}>{user.name}</label>
            </li>
          )}
        </ul>
      </form>
    </>
  )
}

List.propTypes = {
  onSelectUser: PropTypes.func,
}

export default List

