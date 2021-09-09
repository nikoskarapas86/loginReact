import { useEffect, useState } from "react";
import {  Table,Button } from 'react-bootstrap';

export default function TableTodos(props){
 const [todos,setTodos] = useState([]);

 useEffect(()=>{setTodos(props.todos)});
return(
<Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>completed</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.slice(0,10).map((item,index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{String(item.completed)}</td>
              <td><Button  variant="primary" onClick={()=> alert(String(item.completed))} >click</Button></td>
            </tr>))}
        </tbody>
      </Table>
)


}