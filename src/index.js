import React from 'react';
import { Routes , Switch, Route , BrowserRouter ,} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './Components/Navbar' ;
import Ashome from './Components/Ashome'
import Loginform from './Components/Loginform';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   

<>
<Navbar />
<br/>
<Ashome />
<br/>
<Loginform />

 </>

);

