import a from './NyaysetuLogo.png'
import './LawyerRegistration1.css'
import {useNavigate} from 'react-router-dom';
export function LawyerRegistration1(){
    const navigate=useNavigate();
    return(<>
    <div className="background">
       <div id='login'>
            <img src={a} alt="" id='logo'></img>
            <h1 id='head'>ENTER YOUR DETAILS FOR PROFILE</h1>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:"30px"}}>
                <div style={{display:"flex", gap:"30px", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <input type='number' placeholder='Enter your Bar Council Number' required id='name'/>
            <select name="City of Practice" id="">
                <option value="City of Practice" disabled selected hidden>City of Practice</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Aurangabad">Aurangabad</option>
            </select>
            <textarea name="" id="" placeholder='Enter your Experience'></textarea>
            <select>
                <option value="Legal Specialization" disabled selected hidden>Legal Specialization</option>
                <option value="Civil Law">Civil Law</option>
                <option value="Criminal Law">Criminal Law</option>
                <option value="Family Law">Family Law</option>
                <option value="Accident Claims">Accident Claims</option>
                <option value="Labour Law">Labour Law</option>
                <option value="Consumer Protection">Consumer Protection</option>
                <option value="Cooperative Society">Cooperative Society</option>
                <option value="Real Estate">Real Estate/RERA</option>
                <option value="Corporate Law">Corporate Law</option>
                <option value="Intellectual Property">Intellectual Property</option>
                <option value="Taxation">Taxation</option>
                <option value="Service Law">Service Law</option>
                <option value="Cyber Law">Cyber Law</option>
                <option value="Banking and Finance Law">Banking and Finance Law</option>
                <option value="Arbitration and Mediation">Arbitration and Mediation</option>
                <option value="Constitutional Law and Writs">Constitutional Law and Writs</option>
                <option value="Environmental Law">Environmental Law(NGT)</option>
                <option value="IT/Tech Legal">IT/Tech Legal</option>
            </select>
            <select name="" id="">
                <option value="Court Level" disabled selected hidden>Court Level</option>
                <option value="Taluka Court">Taluka Court/Junior Civil Court</option>
                <option value="District Court">District Court/Sessions Court</option>
                <option value="Family Court">Family Court</option>
                <option value="Labour Court">Labour Court/Industrial Tribunal</option>
                <option value="Consumer Court">Consumer Court(District/State/National)</option>
                <option value="Cooperative Court">Cooperative Court</option>
                <option value="RERA Tribunal">RERA Tribunal</option>
                <option value="High Court">High Court</option>
                <option value="Supreme Court">Supreme Court of India</option>
                <option value="City Civil">City Civil Court</option>
                <option value="City Sessions">City Sessions Court</option>
            </select>
            </div>
            <div style={{display:"flex", gap:"30px", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <textarea name="" id="" placeholder='Document Type'></textarea>
            <textarea name="" id="" placeholder='Service Type'></textarea>
            <textarea name="" id="" placeholder='Language Preferences'></textarea>
            <input type="text" placeholder='Location'/>
            <select name="" id="">
                <option value="" disabled selected hidden>Mode of Service</option>
                <option value="">Online</option>
                <option value="">In-Person</option>
            </select>
            </div>
            </div>
            <button type="submit" onClick(()=>{navigate("/login")})>Done</button>
       </div>
    </div>
    </>);
}
