
import './App.css';
import Footer from './footer';
import Header from './header';
import CoursesList from './course'
import Form from './form';
import Reputation from './reputation';

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
  const reputationData = [
    { title: "Completed Projects", value: 120 },
    { title: "Happy Clients", value: 95 },
    { title: "Team Members", value: 30 },
  ];
  return (
    <div className="App">
      <Header />
      {/* <CoursesList courses={arr} /> */}
      <Form />
      {/* <Reputation data={reputationData} />  */}
      <Footer />
    </div>
  );
}

export default App;
