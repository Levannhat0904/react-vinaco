interface Course {
  name: string; // Mỗi course cần có thuộc tính name
}
interface Props {
  courses: Course[]; // Mảng chứa các course
}
const courses =({courses}:Props) => {   
    return (
      <ul className='coursesList'>
        {courses.map(course =>
             <li key={course.name}>{course.name}</li>
        )}
      </ul>
    )
}

export default courses;