import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './Home.js';
import ToDo from './ToDo.js';
import Submit from './Submit.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title="Home" initial = {true} />
         <Scene key = "todo" component = {ToDo} title = "To-Do" />
         <Scene key = "submit" component = {Submit} title = "Submit" />
      </Scene>
   </Router>
)
export default Routes;