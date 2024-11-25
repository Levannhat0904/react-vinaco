
import './App.css';

function App() {
  const courses = [
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
  ]
  const jsx = (
    <ul>
      { courses.map(course =>
           <li key={course.name}>{course.name}</li>
      )}
    </ul>
  )
  return (
    <>
      {jsx}
    </>
  )
}

export default App;
