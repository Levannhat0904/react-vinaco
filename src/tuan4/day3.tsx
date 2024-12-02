import React, {useState} from 'react';

function Day3(){
    const [count, setCount] = useState(1)
    const handleSubmit = ()=>{
        setCount(10)
    }
    console.log("re-render")
    return (
        <div>
            <h1>Làm header - footer {count}</h1>
            <button onClick={handleSubmit}>
                click me
            </button>
        </div>
    )
}
export default Day3;