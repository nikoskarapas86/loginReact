
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Login from './login';
import TableTodos from './tableTodos';

function App() {
  const [isLoggedIn, setLoggedIn] = useState('');
  useEffect(() => { setLoggedIn(localStorage.getItem('isLoggedIn')) })
  // setLoggedIn(localStorage.get('isLoggedIn'))
  // console.log(isLoggedIn)
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', '1')
  }

  return (
    localStorage.getItem('isLoggedIn') == 0 ? <Login handleSubmit={handleSubmit} /> :
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
