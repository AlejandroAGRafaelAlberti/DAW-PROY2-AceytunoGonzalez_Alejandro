import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Academics from './components/Academics';
import PortFolio from './components/PortFolio';
import Utility from './components/Utility';
import TicTac from './components/TicTac';
import React, {useState} from 'react';

function App() {
  const [section, setsection] = useState("About")
  const changeSection = (id) =>{
    setsection(id)
  }
  return (
    <div className="container-fluid" id='tictactoe'>
      <Header section={section} onChange={changeSection}/>
      {section === "About" && <About/>}
      {section === "Academics" && <Academics/>}
      {section === "PortFolio" && <PortFolio/>}
      {section === "Utility" && <Utility/>}
      {section === "TicTac" && <TicTac/>}
      <Footer/>
    </div>
  );
}


export default App;
