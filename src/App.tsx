import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import Header from "./header";
import Day2W3 from "./tuan3/day2";
import Day3W3 from "./tuan3/day3";
import Day4W3 from "./tuan3/day4";
import Day5W3 from "./tuan3/day5";
import Day6W3 from "./tuan3/day6";
import Day2W4 from "./tuan4/day2";
import Day3W4 from "./tuan4/day3";
import Day4W4 from "./tuan4/day4";
import Day5W4 from "./tuan4/day5";
import Day6W4 from "./tuan4/day6";

const weeks = [
  { id: "W3", days: [2, 3, 4, 5, 6] },
  { id: "W4", days: [2, 3, 4, 5, 6] },
];

const components = {
  Day2W3: Day2W3,
  Day3W3: Day3W3,
  Day4W3: Day4W3,
  Day5W3: Day5W3,
  Day6W3: Day6W3,
  Day2W4: Day2W4,
  Day3W4: Day3W4,
  Day4W4: Day4W4,
  Day5W4: Day5W4,
  Day6W4: Day6W4,
} as const;



function App() {
  return (
    <div className="App">
      <Header />
      {/* <nav className='navbar'>
        <ul className='navbar-list mt-100'>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day2W3'> Day2-tuan3 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day3W3'> Day3-tuan3 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day4W3'> Day4-tuan3 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day5W3'> Day5-tuan3 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day6W3'> Day6-tuan3 </Link></li>
        </ul>
        <ul className='navbar-list'>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day2W4'> Day2-tuan4 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day3W4'> Day3-tuan4 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day4W4'> Day4-tuan4 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day5W4'> Day5-tuan4 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day6W4'> Day6-tuan4 </Link></li>
        </ul>
      </nav> */}
      <nav className="navbar">
        {weeks.map((week) => (
          <ul className="navbar-list mt-100" key={week.id}>
            {week.days.map((day) => (
              <li className="navbar-item" key={`day${day}${week.id}`}>
                <Link className="navbar-item-link" to={`/day${day}${week.id}`}>
                  {`Day${day}-tuan${week.id}`}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      {/* <Routes>
        <Route path='/day2W3' element={<Day2W3 />} />
        <Route path='/day3W3' element={<Day3W3 />} />
        <Route path='/day4W3' element={<Day4W3 />} />
        <Route path='/day5W3' element={<Day5W3 />} />
        <Route path='/day6W3' element={<Day6W3 />} />
        <Route path='/day2W4' element={<Day2W4 />} />
        <Route path='/day3W4' element={<Day3W4 />} />
        <Route path='/day4W4' element={<Day4W4 />} />
        <Route path='/day5W4' element={<Day5W4 />} />
        <Route path='/day6W4' element={<Day6W4 />} />
      </Routes> */}
      {/*  { id: 'W4', days: [2, 3, 4, 5, 6] }, */}
      <Routes>
        {weeks.map((week) =>
          week.days.map((day) => {
            console.log("week.id = ", week.id);
            console.log("day = ", day);
            const key = `Day${day}${week.id}` as keyof typeof components;
            const Component = components[key];
            return (
              <Route
                key={`route-day${day}${week.id}`}
                path={`/day${day}${week.id}`}
                element={<Component />}
              />
            );
          })
        )}
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
