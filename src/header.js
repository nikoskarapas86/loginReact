import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
const URL = "https://jsonplaceholder.typicode.com/todos";
export default function Header() {
    const history = useHistory();
    const [todos, setTodos] = useState([]);
    //   history.push('/todos')
    // useEffect(()=>{axios.get(URL).then(res => setTimeout(()=>{setTodos(res.data) },4000)   )})
    return (
        <nav>
            <button onClick={() => axios.get(URL).then(res =>setTodos(res.data))
            .then(() => history.push('/todos', { data: todos }))}>todos</button>

        </nav>
    )
}