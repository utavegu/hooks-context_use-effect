import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

function List(props) {

  const USERS = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

  const [userList, setUserList] = useState([])

  useEffect(() => {
    // Пока самая программа-минимум. Трай-кэтч-финалли позже допилю
    const fetchData = async () => {
      const response = await fetch(USERS);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
			const data = await response.json();
      setUserList(data);
    }
    fetchData();		
  }, [])

  const handleChange = (evt) => {
    console.log(evt.target.value)
  }

  return (
    <form action="">
      <ul>
        {userList.map(user =>
          <li key={user.id}>
            <label>
              <input onChange={(evt) => handleChange(evt)} type="radio" name="users" value={user.id}/>{user.name}
            </label>
          </li>
        )}
      </ul>
    </form>
  )
}

// List.propTypes = {

// }

export default List

