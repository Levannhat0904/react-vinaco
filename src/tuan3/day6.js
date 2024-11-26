import { useState } from "react";
function Day6(){
    const courses =[
        {name: 'React', id: 1},
        {name: 'JavaScript', id: 2},
        {name: 'HTML', id: 3},
        {name: 'CSS', id: 4},
        {name: 'Python', id: 5},
        {name: 'Django', id: 6},
        {name: 'Node.js', id: 6},
        {name: 'Express.js', id: 7},
    ]
    const [selectedCourse, setSelectedCourse] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        if(name && email){
            alert(`Welcome ${name}, your email is ${email}`)
        } else {
            alert('Please fill in all fields')
        }
        setName('')
        setEmail('')
 
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
            {courses.map((course, index) => (
                <div key={index}>
                   <input type="radio"
                   onChange={()=>selectedCourse(course.id)}
                   />
                        {course.name}
                </div>
            ))}
           <button onClick={handleSubmit}> Register</button>
        </div>
    )
}
export default Day6;