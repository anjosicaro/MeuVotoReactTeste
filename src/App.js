import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import Infos from './Components/Infos'
import Candidatos from './Components/Candidatos'
import SobreNos from './Components/SobreNos'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path='/SobreNos' element={<SobreNos/>}/>
      </Routes>
      <Infos />

      <Candidatos />
  
    </Router>
    </>
  );
}

export default App;
