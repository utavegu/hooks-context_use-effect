import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function Details({selectedUser}) {

  const USERS_INFO = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${selectedUser}.json`;

  const [userInfo, setUserInfo] = useState({
    name: "",
    avatar: "",
    details: {
      city: "",
      company: "",
      position: "",
    }
  })
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedUser !== undefined) {
        setLoading(true);
        try {
          const response = await fetch(USERS_INFO);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          setUserInfo(data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    }
    fetchData();		
  },
  [selectedUser])
  
  let userpic = (userInfo.avatar) ? "https://i.pravatar.cc/300?img=" : "";

  return (
    <>
      <div className="user-card">
        <img className="user-avatar" src={userpic + userInfo.id} alt={`Портрет пользователя ${userInfo.name}`} width="300" height="300"/>
        <p>{userInfo.name}</p>
        <p>City: {userInfo.details.city}</p>
        <p>Company: {userInfo.details.company}</p>
        <p>Position: {userInfo.details.position}</p>
      </div>
      
      <div className="loading-status">
        {isLoading && <p className="loading"></p>}
        {hasError && <p className="loading-error"><b>Ошибка загрузки!</b></p>}
      </div>
    </>
  )
}

Details.propTypes = {
  selectedUser: PropTypes.string,
}

export default Details

