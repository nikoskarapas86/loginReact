
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {  Spinner, Table,Button } from 'react-bootstrap';
import TableTodos from './tableTodos';


const URL = "https://jsonplaceholder.typicode.com/todos";
function App() {

  const [todos, setTodos] = useState([])
//first http req with fetch api
  // function getTODOS() {
  //   return fetch(URL)
  // }

  // useEffect(() => { getTODOS().then(res => res.json()).then(res => setTodos(res)) })

//second way with async await
// useEffect(()=>{
//   async function getTds(){
//     let result =await fetch(URL);
//     result =  await result.json();
//     setTodos(result);
//   }
//   getTds();
// })

//third way with axios

useEffect(()=>{axios.get(URL).then(res => setTimeout(()=>{setTodos(res.data) },4000)   )})

  return (
    <div >
     {todos.length>0?<TableTodos todos ={todos}/>:<Spinner animation="border" size="lg"/>} 
    </div>
  );
}

export default App;
