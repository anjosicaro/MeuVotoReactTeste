import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Infos from './Components/Infos'
import Candidatos from './Components/Candidatos'
import SobreNos from './Components/SobreNos'
import './App.css';
import Footer from './Components/Footer'
import Recomendacao from './Components/Recomendacao'
import { useRef } from 'react'

function App() {
  const Candidatoshref= useRef()
  return (
    <>
    <Router>
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path='/SobreNos' element={<SobreNos/>}/>
      </Routes>
    
      <Footer />
  
    </Router>
    </>
  );
}

export default App;
