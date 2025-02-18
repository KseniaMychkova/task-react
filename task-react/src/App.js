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
import UseState1 from './tasks/06.useState/1'
import UseState2 from './tasks/06.useState/2'
import UseState3 from './tasks/06.useState/3'
import UseState4 from './tasks/06.useState/4'
import UseState5 from './tasks/06.useState/5'
import UseState6 from './tasks/06.useState/6'
import UseState7 from './tasks/06.useState/7'
import UseState8 from './tasks/06.useState/8'
import UseState9 from './tasks/06.useState/9'
import UseState10 from './tasks/06.useState/10'
import UseState11 from './tasks/06.useState/11'
import UseState12 from './tasks/06.useState/12'
import UseState13 from './tasks/06.useState/13'
import UseState14 from './tasks/06.useState/14'
import UseState15 from './tasks/06.useState/15'
import UseState16 from './tasks/06.useState/16'
import UseState17 from './tasks/06.useState/17'
import UseState18 from './tasks/06.useState/18'
import UseState19 from './tasks/06.useState/19'
import UseEffect1 from './tasks/07.useEffect/1'
import UseEffect2 from './tasks/07.useEffect/2'
import UseEffect3 from './tasks/07.useEffect/3'
import UseEffect4 from './tasks/07.useEffect/4'
import UseEffect5 from './tasks/07.useEffect/5'
import UseRef1 from './tasks/08.useRef/1'
import UseRef2 from './tasks/08.useRef/2'
import UseRef3 from './tasks/08.useRef/3'
import UseRef4 from './tasks/08.useRef/4'
import UseRef5 from './tasks/08.useRef/5'
import UseRef6 from './tasks/08.useRef/6'

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
      <Route path='/usestate/1' element={<UseState1></UseState1>}></Route>
      <Route path='/usestate/2' element={<UseState2></UseState2>}></Route>
      <Route path='/usestate/3' element={<UseState3></UseState3>}></Route>
      <Route path='/usestate/4' element={<UseState4></UseState4>}></Route>
      <Route path='/usestate/5' element={<UseState5></UseState5>}></Route>
      <Route path='/usestate/6' element={<UseState6></UseState6>}></Route>
      <Route path='/usestate/7' element={<UseState7></UseState7>}></Route>
      <Route path='/usestate/8' element={<UseState8></UseState8>}></Route>
      <Route path='/usestate/9' element={<UseState9></UseState9>}></Route>
      <Route path='/usestate/10' element={<UseState10></UseState10>}></Route>
      <Route path='/usestate/11' element={<UseState11></UseState11>}></Route>
      <Route path='/usestate/12' element={<UseState12></UseState12>}></Route>
      <Route path='/usestate/13' element={<UseState13></UseState13>}></Route>
      <Route path='/usestate/14' element={<UseState14></UseState14>}></Route>
      <Route path='/usestate/15' element={<UseState15></UseState15>}></Route>
      <Route path='/usestate/16' element={<UseState16></UseState16>}></Route>
      <Route path='/usestate/17' element={<UseState17></UseState17>}></Route>
      <Route path='/usestate/18' element={<UseState18></UseState18>}></Route>
      <Route path='/usestate/19' element={<UseState19></UseState19>}></Route>
      <Route path='/useeffect/1' element={<UseEffect1></UseEffect1>}></Route>
      <Route path='/useeffect/2' element={<UseEffect2></UseEffect2>}></Route>
      <Route path='/useeffect/3' element={<UseEffect3></UseEffect3>}></Route>
      <Route path='/useeffect/4' element={<UseEffect4></UseEffect4>}></Route>
      <Route path='/useeffect/5' element={<UseEffect5></UseEffect5>}></Route>
      <Route path='/useref/1' element={<UseRef1></UseRef1>}></Route>
      <Route path='/useref/2' element={<UseRef2></UseRef2>}></Route>
      <Route path='/useref/3' element={<UseRef3></UseRef3>}></Route>
      <Route path='/useref/4' element={<UseRef4></UseRef4>}></Route>
      <Route path='/useref/5' element={<UseRef5></UseRef5>}></Route>
      <Route path='/useref/6' element={<UseRef6></UseRef6>}></Route>
    </Routes>
  );
}

export default App;
