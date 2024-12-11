import './App.css';
import { Routes, Route } from 'react-router-dom'
import JSX1 from './tasks/04.jsx/1'
import JSX2 from './tasks/04.jsx/2'
import JSX3 from './tasks/04.jsx/3'
import JSX4 from './tasks/04.jsx/4'
import JSX5 from './tasks/04.jsx/5'
import JSX6 from './tasks/04.jsx/6'

function App() {
  return (
    <Routes>
      <Route path='/jsx/1' element={<JSX1></JSX1>}></Route>
      <Route path='/jsx/2' element={<JSX2></JSX2>}></Route>
      <Route path='/jsx/3' element={<JSX3></JSX3>}></Route>
      <Route path='/jsx/4' element={<JSX4></JSX4>}></Route>
      <Route path='/jsx/5' element={<JSX5></JSX5>}></Route>
      <Route path='/jsx/6' element={<JSX6></JSX6>}></Route>
    </Routes>
  );
}

export default App;
