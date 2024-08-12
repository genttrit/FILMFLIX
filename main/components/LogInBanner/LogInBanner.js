import React from "react";
import "./LogInBanner.scss";
import NavLogIn from "../NavLogIn/NavLogIn";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function LogInBanner({userData,username, setUsername}) {
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();


  let [usernameInput,setUsernameInput] = useState('')
  let [passwordInput,setPasswordInput] = useState('');

  const inputRefEmail = useRef();
  const inputRefPassword = useRef();

  const handleClickEmailFocus = (e) =>{
    e.preventDefault();
    setTimeout(() => {
        inputRefEmail.current.focus();
    }, 0);
    
  }

  const handleClickPasswordFocus = (e) =>{
    e.preventDefault();
    setTimeout(() => {
        inputRefPassword.current.focus();
    }, 0);
  }

  const handleUsernameInput = (e) =>{
    setUsernameInput(e.target.value);

  }

  const handlePasswordInput = (e) =>{
    setPasswordInput(e.target.value);
  }



  const handleLogInVerification = (e) =>{
    e.preventDefault();
    const user = userData.find((e)=>{
      return (e.username === usernameInput && e.password === passwordInput)
    })
    if(user){
      console.log('successful login');
      handleSetUsername(usernameInput);
      navigate('/home');
    } else {
      console.log('invalid data');
      setLoginError(true);
    }
  }

  const handleKeyDownVerification = (e) =>{
    if (e.key === "Enter") {
      const user = userData.find((e)=>{
        return (e.username === usernameInput && e.password === passwordInput)
      })
      if(user){
        console.log('successful login');
        setUsername(usernameInput);
        navigate('/home');
      } else {
        console.log('invalid data');
        setLoginError(true);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownVerification);

    return () => {
      window.removeEventListener("keydown", handleKeyDownVerification);
    };
  }, [usernameInput, passwordInput]);

  

  return (
    <>
    <div className="LogInBanner">
    <NavLogIn />
      <div className="container">
      <h1>Sign In</h1>
        <div onClick={e => handleClickEmailFocus(e)}className="signIn">
          <label>Username or e-mail</label>
            <input ref={inputRefEmail} 
                  placeholder="type here..."
                  onChange={e =>handleUsernameInput(e)} 
                  type='text'/>
        </div>
        <div onClick={e => handleClickPasswordFocus(e)} className="signIn">
          <label>Password</label>
            <input ref={inputRefPassword}
                  placeholder="type here..."
                  onChange={e =>handlePasswordInput(e)} 
                  type='password' />
        </div>

        <button onClick={e => handleLogInVerification(e)}
                >Log in</button>
        {loginError && <p className='errorMsg'><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>Invalid data, please try again!</p>}
        <h5>Ready to watch? Enter your details to enjoy your membership.</h5>
      </div>
    </div>
    </>
  );
}

export default LogInBanner;
