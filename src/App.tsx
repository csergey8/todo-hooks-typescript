import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { TodosPage } from './Pages/TodosPage';
import { AboutPage } from './Pages/AboutPage';




const App: React.FC = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={TodosPage} path={"/"} exact/>  
        <Route component={AboutPage} path={"/about"}/>  
      </Switch>  
    </BrowserRouter>
  );
}

export default App;
