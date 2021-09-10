import { useState } from "react"


export default function Login(props) {
    const handleSubmit =props.handleSubmit
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <input type="submit" value="submit" />
            </form>
        </div>

    )

}