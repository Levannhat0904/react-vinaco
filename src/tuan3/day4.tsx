import Reputation from "../reputation";
import Form from "../form";
function Day4() {
  const reputationData = [
    { title: "Completed Projects", value: 120 },
    { title: "Happy Clients", value: 95 },
    { title: "Team Members", value: 30 },
  ];
  return (
    <div>
      <h1>Day4</h1>
      <Reputation data={reputationData} />
      <Form />
    </div>
  );
}
// function App() {
//   const arr = [
//     {
//       name: 'javascript'
//     },
//     {
//       name: 'React'
//     },
//     {
//       name: 'Node.js'
//     },
//     {
//       name: 'Python'
//     }
//   ];
//   const reputationData = [
//     { title: "Completed Projects", value: 120 },
//     { title: "Happy Clients", value: 95 },
//     { title: "Team Members", value: 30 },
//   ];
//   return (
//     <div className="App">
//       <Header />
//       {/* <CoursesList courses={arr} /> */}
//       <Form />
//       {/* <Reputation data={reputationData} />  */}
//       <Footer />
//     </div>
//   );
// }
export default Day4;
