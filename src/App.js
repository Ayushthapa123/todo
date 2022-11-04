import './css/app.css';


import Todolist from './components/Todolist';



import {BsMoonStarsFill} from 'react-icons/bs';

function App() {
  return (
    <div className="app">

  <div className='app-title'>
    <h1>My Todo List</h1>
  </div>

  <div>
    <Todolist/>
  </div>
  
  <div className='moonicon'>
     <span><BsMoonStarsFill/></span> 
  </div>
  
    </div>
  );
}

export default App;
