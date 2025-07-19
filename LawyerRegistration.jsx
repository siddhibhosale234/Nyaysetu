import a from './NyaysetuLogo.png'
import './LawyerRegistration.css'
import { useNavigate } from 'react-router-dom';
export function LawyerRegistration(){
    const navigate=useNavigate()
    return(<>
    <div className="background">
       <div id='login'>
            <img src={a} alt="" id='logo'></img>
            <h1 id='head'>ENTER YOUR DETAILS FOR PROFILE</h1>
            <input type='text' placeholder='Enter your Full Name' required id='name'/>
            <input type='number' placeholder='Enter your Age' required id='age'/>
            <input type='date' placeholder='Enter your  Date of Birth' required id='DOB'/>
            <input type='email' placeholder='Enter your Email ID' required id='email'/>
            <button type="submit" onClick={()=>{navigate('/lawyer2')}}>Next</button>
       </div>
    </div>
    </>);
}
