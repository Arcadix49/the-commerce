import {Register} from './components/Register.js';
import { BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "../src/pages/Home.js";
import {Login} from './components/Login.js'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/register"  element={<Register/>}/>
        <Route path="/auth/login"  element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
