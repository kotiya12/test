
import React  from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import  SignUp from './Components/SignUp';
import ResetPassword from './Components/ResetPassword';
import add from './Components/add';

import './App.css';
import {
  BrowserRouter ,
  Switch,
  Route,

} from "react-router-dom";
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path ="/" component={Home} />
      <Route exact path = "/login" component ={Login} />    
      <Route exact path = "/signup" component ={SignUp} />   
      <Route exact path = "/forgotpassword" component ={ForgotPassword} />
      <Route exact path = "/resetpassword" component ={ResetPassword} />
      {/* <Route exact path = "/add" component ={add} /> */}
      <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
    
  );
};

export default App;
