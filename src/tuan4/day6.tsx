import React from 'react';
import { useState } from "react";
interface Course {
    name: string;
    id:number;
}
interface IProps{
    courses: Course[];
    id:number;
    prev:number;
}
type IdType = number; 
function Day6(){
    const courses =[
        {name: 'React', id: 1},
        {name: 'JavaScript', id: 2},
        {name: 'HTML', id: 3},
        {name: 'CSS', id: 4}
    ]
    const coursesCheckBox =[
        {name: 'React', id: 1},
        {name: 'JavaScript', id: 2},
        {name: 'HTML', id: 3},
        {name: 'CSS', id: 4}
    ]
    const [selectedCourse, setSelectedCourse] = useState(1)
    const [checkBox, setcheckBox] = useState<IdType[]>([]); 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(checkBox)
    const handleSubmit = () => {
        if(name && email){
            alert(`Welcome ${name}, your email is ${email}`)
        } else {
            alert('Please fill in all fields')
        }
        setName('')
        setEmail('')
 
    }
    const handleCheckBox = (id:IdType) => {
        setcheckBox(prev=>{
            if(checkBox.includes(id)){
                return checkBox.filter(item =>item !==id)
            } else {
                return [...prev, id]
            }
        })
 
    }
    
    return (
        <div>
           <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
           />
           <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
            <h2>Course List</h2>
            {coursesCheckBox.map((course, index) => (
                <div key={index}>
                   <input type="checkbox"
                   checked={checkBox.includes(course.id) }
                   onChange={()=>handleCheckBox(course.id)}
                   /> 
                        {course.name}
                </div>
            ))}
            {courses.map((course, index) => (
                <div key={index}>
                   <input type="radio"
                   checked={selectedCourse === course.id }
                   onChange={()=>setSelectedCourse(course.id)}
                   /> 
                        {course.name}
                </div>
            ))}
           <button onClick={handleSubmit}> Register</button>
        </div>
    )
}
export default Day6;