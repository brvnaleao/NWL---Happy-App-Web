import React from 'react';
import './styles/global.css'
import './styles/pages/landing.css'
import LogoImg from './images/Logo.svg';

import { FiArrowRight } from 'react-icons/fi';


function App() {
  return (
    <div id="page-landing">
     <div className="content-wrapper">
       <img src={LogoImg} alt="Happy"/>
       <main>
         <h1>Leve felicidade para o mundo</h1>
         <p>Visite orfanatos e mude o dia de muitas crianças</p>
       </main>
       <div className="location">
         <strong>Rio de Janeiro</strong>
         <span>Maricá</span>
       </div>

       <a href="#" id="enter-app">
         <FiArrowRight size={26} color="rgba (0, 0, 0, 0)" />
       </a>
     </div>
    </div>
  );
}

export default App;
