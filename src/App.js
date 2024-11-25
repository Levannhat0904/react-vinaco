import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './footer';
import Header from './header';
import Day2 from './tuan3/day2';
import Day3 from './tuan3/day3';
import Day4 from './tuan3/day4';
import Day5 from './tuan3/day5';
import Day6 from './tuan3/day6';
function App() {
  return(
    <div className='App'>
      <Header/>
      <nav className='navbar'>
        <ul className='navbar-list'>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day2'> Day2 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day3'> Day3 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day4'> Day4 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day5'> Day5 </Link></li>
          <li className='navbar-item'> <Link className='navbar-item-link' to='/day6'> Day6 </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/day2' element={<Day2 />} />
        <Route path='/day3' element={<Day3 />} />
        <Route path='/day4' element={<Day4 />} />
        <Route path='/day5' element={<Day5 />} />
        <Route path='/day6' element={<Day6 />} />
      </Routes>
      <Footer/>
    </div>
  )
}
export default App;
