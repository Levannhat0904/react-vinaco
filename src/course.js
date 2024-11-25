const courses =({courses}) => {   
    return (
      <ul className='coursesList'>
        {courses.map(course =>
             <li key={course.name}>{course.name}</li>
        )}
      </ul>
    )
}

export default courses;