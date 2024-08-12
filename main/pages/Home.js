import React, {useContext} from 'react'
import Nav from '../components/Nav/Nav'
import Banner from '../components/Banner/Banner'
import Details from '../components/Detalis/Details';
import { AppContext } from "../app";

function Home() {

  const { details, setDetails } = useContext(AppContext);
  const {username, setUsername} = useContext(AppContext);

  const handleDetailsPopUp = (e) => {
    e.preventDefault();
    // console.log(details)
    setDetails(prevState => !prevState);
  };

  console.log(details);

  return (
    <>
        <Banner  details={details}
                username={username}
                setUsername={setUsername}
                handleDetailsPopUp={handleDetailsPopUp}/>
    </>
  )
}

export default Home