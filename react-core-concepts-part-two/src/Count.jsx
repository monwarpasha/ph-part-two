import { useState } from "react"



export default function Count() {

    const [count,setCount] = useState(0);

    // console.log(add, add[1]);

    function handleAdd() {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }


    return(
        <div style={{border: "2px solid red", padding: "20px", margin: "20px", borderRadius: "10px"}}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd} style={{marginRight: "10px"}}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}