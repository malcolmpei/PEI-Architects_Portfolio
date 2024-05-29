import '../stylesheets/HomePage.css'
import Timeline from "../components/Timeline";
import {useState} from "react";
import {WelcomePage} from "../components/WelcomePage";

const HomePage = () => {
    const [enter, setEnter] = useState(false)
    const toggleEnter = (Boolean) => setEnter(Boolean)
    
    return (
        <div className={'home'}>
            <WelcomePage toggleEnter={toggleEnter} entered={enter}/>
            <Timeline entered={enter} toggleEnter={toggleEnter}/>
        </div>
    )
}

export default HomePage