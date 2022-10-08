import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Header from './Components/Header'
import './App.css';
import Footer from './Components/Footer'
import Lula from './Components/Lula';
import Bolsonaro from './Components/Bolsonaro';
import Recomendacao from './Components/Recomendacao';
import Candidatos from './Components/Candidatos';
import Infos from './Components/Infos';


function App() {
  
  return (
    <>
    <Router>
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path='/Infos' element={<Infos />} />
      <Route path='/Recomendacao' element={<Recomendacao/>}/>
      <Route path='/Candidatos' element={<Candidatos/>} />
      <Route path='/Lula' element={<Lula />} />
      <Route path='/Bolsonaro' element={<Bolsonaro />} />
      </Routes>
    
      <Footer />
  
    </Router>
    </>
  );
}

export default App;
