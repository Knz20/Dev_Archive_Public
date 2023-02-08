import './App.css'

import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/page_register';
import { Acceuil } from './pages/Page_acceuil';
import { Connec } from './pages/page_login';
import { Astuces } from './pages/page_astuces';




function App() { 
  return (
    <Routes>
      <Route path='/' element={<Acceuil />} /> 
      <Route path='/login' element={<Connec />} />
      <Route path='/register' element={<Register />} /> 
      <Route path='/astuces' element={<Astuces />} />
    </Routes>
  );
}

export default App;
 
