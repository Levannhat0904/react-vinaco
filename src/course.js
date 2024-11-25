const arr = [
    {
      name: 'javascript'
    },
    {
      name: 'React'
    },
    {
      name: 'Node.js'
    },
    {
      name: 'Python'
    }
  ];
const courses =() => {   
    return (
      <ul className='coursesList'>
        { arr.map(course =>
             <li key={course.name}>{course.name}</li>
        )}
      </ul>
    )
}

export default courses;