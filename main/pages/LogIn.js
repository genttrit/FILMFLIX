import React, {useEffect, useState, useContext} from 'react'
import NavLogIn from '../components/NavLogIn/NavLogIn'
import LogInBanner from '../components/LogInBanner/LogInBanner'
import { AppContext } from '../app';

function LogIn() {
  const [userData, setUserData] = useState([]);
  
  const {username, setUsername} = useContext(AppContext);

  // const handleSetUsername = (usernameFromChild) => {
  //   localStorage.setItem('username',usernameFromChild)
  //   setUsername(usernameFromChild);
  // }

  useEffect(()=>{
      const fetchInfo = async () => {
        try{
          const resp= await fetch('../JSON/db.json');
          const data = await resp.json();
          setUserData(data.users);
          // console.log(data.users);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchInfo();
  },[]);


  return (
    <div className='logInContainer'>
      <LogInBanner 
                  userData={userData} 
                  // setUsername={setUsername}
                  // handleSetUsername={handleSetUsername}
                  />
    </div>
  )
}

export default LogIn