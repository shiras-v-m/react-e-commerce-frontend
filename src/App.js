import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
  <>
  <Routes>
    <Route path=''  element={<Home/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path='/signup'  element={<Signup/>} />
  </Routes>
  </>
  );
}

export default App;
