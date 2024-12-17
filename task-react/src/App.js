import './App.css';
import { Routes, Route } from 'react-router-dom'
import JSX1 from './tasks/04.jsx/1'
import JSX2 from './tasks/04.jsx/2'
import JSX3 from './tasks/04.jsx/3'
import JSX4 from './tasks/04.jsx/4'
import JSX5 from './tasks/04.jsx/5'
import JSX6 from './tasks/04.jsx/6'
import JSX7 from './tasks/04.jsx/7'
import JSX8 from './tasks/04.jsx/8'
import JSX9 from './tasks/04.jsx/9'
import JSX10 from './tasks/04.jsx/10'
import Event1 from './tasks/05.event/1'
import Event2 from './tasks/05.event/2'
import Event3 from './tasks/05.event/3'
import Event4 from './tasks/05.event/4'
import Event5 from './tasks/05.event/5'
import Event6 from './tasks/05.event/6'

function App() {
  return (
    <Routes>
      <Route path='/jsx/1' element={<JSX1></JSX1>}></Route>
      <Route path='/jsx/2' element={<JSX2></JSX2>}></Route>
      <Route path='/jsx/3' element={<JSX3></JSX3>}></Route>
      <Route path='/jsx/4' element={<JSX4></JSX4>}></Route>
      <Route path='/jsx/5' element={<JSX5></JSX5>}></Route>
      <Route path='/jsx/6' element={<JSX6></JSX6>}></Route>
      <Route path='/jsx/7' element={<JSX7></JSX7>}></Route>
      <Route path='/jsx/8' element={<JSX8></JSX8>}></Route>
      <Route path='/jsx/9' element={<JSX9></JSX9>}></Route>
      <Route path='/jsx/10' element={<JSX10></JSX10>}></Route>
      <Route path='/event/1' element={<Event1></Event1>}></Route>
      <Route path='/event/2' element={<Event2></Event2>}></Route>
      <Route path='/event/3' element={<Event3></Event3>}></Route>
      <Route path='/event/4' element={<Event4></Event4>}></Route>
      <Route path='/event/5' element={<Event5></Event5>}></Route>
      <Route path='/event/6' element={<Event6></Event6>}></Route>
    </Routes>
  );
}

export default App;
