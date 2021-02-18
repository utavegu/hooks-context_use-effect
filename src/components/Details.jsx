import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function Details({selectedUser}) {

  const USERS_INFO = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser}.json`

  const [userInfo, setUserInfo] = useState({
    name: "",
    avatar: "",
    details: {
      city: "",
      company: "",
      position: "",
    }
  })

  useEffect(() => {
    // Пока самая программа-минимум. Трай-кэтч-финалли позже допилю
    
      const fetchData = async () => {
        if (selectedUser !== undefined) {
          const response = await fetch(USERS_INFO);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          setUserInfo(data);
      }
    }
    fetchData();		
  }, [selectedUser])

  return (
    <>
    <img src="" alt=""/>
    <p>{userInfo.name}</p>
    <p>City: {userInfo.details.city}</p>
    <p>Company: {userInfo.details.company}</p>
    <p>Position: {userInfo.details.position}</p>
    </>
  )
}

Details.propTypes = {

}

export default Details

