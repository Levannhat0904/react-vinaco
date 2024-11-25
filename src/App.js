
import './App.css';
import Footer from './footer';
import Header from './header';
function CoursesList() {
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
    <ul className='coursesList'>
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

function App() {
  return (
    <div className="App">
      <Header />
      <CoursesList />
      <Footer />
    </div>
  );
}

export default App;
