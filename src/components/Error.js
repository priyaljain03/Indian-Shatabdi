import React,{useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import '../css/Error.css';
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function Error() {
    const context = useContext(ThemeContext)
    const { switchState, switchTheme } = context;
  
    return (
        <div className="error__box">
            <div className="icon"><BsFillExclamationTriangleFill /></div>
            <div>
            <p style={{color:switchState=='white'?'black':'white',textAlign:'center'}}> There seems to be some Problem. Please Try again after some time.</p>
            </div>
        </div>
    
  )
}

export default Error