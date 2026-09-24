import { useEffect, useState } from "react"
import User from "./User";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    const userStyle = {
        border: "2px solid blue",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px"
    }

    return (
        <div style={userStyle}>
            <h2>Users: {users.length}</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                {
                    users.map(user => <User user={user}></User>)
                }
            </div>
        </div>
    )
}