
import Disclaimer from './index.jsx';
import './App.css';
import { Login } from './LoginForm';
// import { LawyerRegistration } from './LawyerRegistration';
// import { LawyerRegistration1 } from './LawyerRegistration1';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import { OurService } from './OurServices';
// import { RoleSelection } from './RoleSelection';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<LawyerRegistration/>}> </Route>
        <Route path='/signup' element={<LawyerRegistration1/>}> </Route>
      </Routes>
      </BrowserRouter> */}
      {/* <OurService/> */}
      {/* <RoleSelection/> */}
      {/* <Login/> */}
      <Disclaimer/>
    </div>
  );
}

export default App;
