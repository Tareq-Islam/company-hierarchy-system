import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Department from "./Department/Department";
import Employee from "./Employee/Employee";
import Home from "./Home/Home";
import Nav from "./Layout/Header/nav";
import Role from "./Role/Role";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>  
        <Switch>
          <Route path="/employee">
            <Employee />
          </Route>
          <Route path="/department">
            <Department />
          </Route>
          <Route path="/role">
            <Role />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </div>  
    </Router>    
  );
}

export default App;
