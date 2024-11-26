import { useState } from "react";
import Button from "../button";
import TodoList from "./todolist";
function Day5(){
    const [counter, setCounter] = useState(1)
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <Button onClick={handleClick}>Click me</Button>
            <TodoList />
        </div>
    )
}
export default Day5;