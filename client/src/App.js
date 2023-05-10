import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import LandingPage from './components/landingPage/views';
import Login from './components/login/hooks/index'
import Author from './components/author/author'
import Home from './components/home/home';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<LandingPage/>}/>
      <Route path="/login" element={<Login/>} />
     <Route path="/author" element={<Author/>}/>
     <Route path="/home" element={<Home/>}/>


      {/* <Route path="/home" element={<home/>}/> */}
    </Routes>
   </BrowserRouter>
  );
}

export default App;
