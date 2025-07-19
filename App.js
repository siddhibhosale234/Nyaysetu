import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Disclaimer} from './Index.jsx'
import {RoleSelection} from './RoleSelection.jsx'
import {Signup} from './signupPage/Signup'
import {Login} from './LoginForm'
import {LawyerRegistration} from './LawyerRegistration'
import {LawyerRegistration1} from './LawyerRegistration1'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Disclaimer/>}></Route>
          <Route path="/choose" element={<RoleSelection/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/lawyer1" element={<LawyerRegistration/>}></Route>
          <Route path="/lawyer2" element={<LawyerRegistration1/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
