
import './App.css';
import Footer from './footer';
import Header from './header';
import CoursesList from './course'


function App() {
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
  return (
    <div className="App">
      <Header />
      <CoursesList courses={arr} />
      <Footer />
    </div>
  );
}

export default App;
