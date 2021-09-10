import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
const URL = "https://jsonplaceholder.typicode.com/todos";
export default function Header() {
    const history = useHistory();
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        if (todos.length > 0) history.push('/todos', { data: todos })
    }, [todos])

    function getTodos() {
        axios.get(URL).then(res => {
            setTodos(res.data)

        })
    }

    return (
        <nav>
            <button onClick={getTodos}>todos</button>

        </nav>
    )
}