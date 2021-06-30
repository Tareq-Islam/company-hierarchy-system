import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Department from "./Department";
import Employee from "./Employee";
import Home from "./Home";
import Nav from "./nav";
import Role from "./Role";

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
