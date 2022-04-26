import React from 'react';
import { Routes , Switch, Router ,Route , BrowserRouter ,} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar' ;
import Ashome from './Components/Ashome'
import Loginform from './Components/Loginform';
import Fullregis from './Components/Fullregis'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<Routes>
      <Route path='/' element={<Ashome />}  />
      <Route path='home' element={<Ashome />} />
      <Route path='Registration' element={<Fullregis />} />
      <Route path="home" element={<Ashome />} />
      <Route path="Login" element={<Loginform />} />
    </Routes>
  </BrowserRouter>,



);

