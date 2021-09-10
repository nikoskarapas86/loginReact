
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import TableTodos from './tableTodos';

function App() {

  return (
    <BrowserRouter>
    <Header />    
    <Switch>
      <Route exact path='/todos' component={TableTodos} />
    
    </Switch>
  </BrowserRouter>
    // <div >
    //  {todos.length>0?<TableTodos todos ={todos}/>:<Spinner animation="border" size="lg"/>} 
    // </div>
  );
}

export default App;
