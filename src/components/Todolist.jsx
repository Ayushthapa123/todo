import '../css/todolist.css';

import React, { useState } from 'react';

import Lists from './Lists';


export default function Todolist() {
const [todolists,setTodolists]=useState([]);
const [task,setTask]=useState('');
const [utask,setUtask]=useState('');
const [showupdate,setShowupdate]=useState(false);
const [updateid,setUpdateid]=useState('');


const updateTodoList=(e)=> {
  e.preventDefault();
 
let newtodolist=[...todolists];
if(task.length>1) {
newtodolist.push({task:task,done:false});
setTodolists(newtodolist);

setTask(' ')

}else {
  alert("Can not add an Empty List")
}

 
}


const UpdateTask=(e)=> {
  e.preventDefault();
  setShowupdate(false);

  if(updateid) {
  let newtodolists=[...todolists];
  newtodolists[updateid].task=utask;
  setTodolists(newtodolists);
  }


}

  return (
    <>
    <div className='todolist'>
      <form onSubmit={(e)=>updateTodoList(e)}>
        {showupdate &&<input type='text' value={utask} onChange={(e)=>setUtask(e.target.value)}/> }
        {!showupdate &&<input type='text' placeholder='Enter Your Task' value={task} onChange={(e)=>setTask(e.target.value)}/>}
        {!showupdate &&<button type='submit'>Add Task</button>}
        {showupdate &&<button onClick={(e)=> UpdateTask(e)}>Update</button>}
      </form>
    </div>

    <div>
      <Lists todolists={todolists} setTodolists={setTodolists} showupdate={showupdate} setShowupdate={setShowupdate} utask={utask} setUtask={setUtask}
      updateid={updateid} setUpdateid={setUpdateid}
      />
    </div>
    </>
  )
}
