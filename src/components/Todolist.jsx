import '../css/todolist.css';

import React, { useState } from 'react';
import uuid from 'react-uuid';

import Lists from './Lists';


export default function Todolist() {
const [todolists,setTodolists]=useState([]);
const [task,setTask]=useState('');
const [description,setDescription]=useState('');
const [category,setCategory]=useState('general');
const [showupdatebutton,setShowupdatebutton]=useState(false);
const [updateindex,setUpdateindex]=useState('');

const [categories,setCategories]=useState(["general","coding","office","home"]);
const [customcategory,setCustomcategory]=useState('');


const updateTodoList=(e)=> {
e.preventDefault();
let newtodolist=[...todolists];
   if(task.length>1) {
     newtodolist.push({id:uuid(),task:task,description,category,completed:false});
     setTodolists(newtodolist);

     setTask('')
     setDescription('')
    // setCategory('general')

    }else {
       alert("Can not add an Empty List")
}


}


const UpdateTask=(e)=> {
  e.preventDefault();
  setShowupdatebutton(false);

 

  if(updateindex>-1) {
    
     let newtodolists=[...todolists];
     newtodolists[updateindex].task=task;
     newtodolists[updateindex].description=description;
     newtodolists[updateindex].category=category;
     setTodolists(newtodolists);
     setTask('');
     setDescription('');
     // setCategory('');
  }
}

const Addcustomcategory=()=> {
  if(customcategory.length>1) {
     let newcategories=[...categories];
     newcategories.push(customcategory);
     setCategories(newcategories);
     setCustomcategory('')
  }else {
    alert("can not add empty category")
  }

}


  return (
    <>
    <div className='todolist'>
      <form onSubmit={(e)=>updateTodoList(e)}>
        {/* {showupdate &&<input type='text' value={utask} onChange={(e)=>setUtask(e.target.value)}/> } */}
        <input type='text' placeholder='Enter Your Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        {!showupdatebutton &&<button type='submit'>Add Task</button>}
        {showupdatebutton &&<button onClick={(e)=> UpdateTask(e)}>Update</button>}
        <textarea type='text' placeholder='Describe Your Task' value={description} onChange={(e)=>setDescription(e.target.value)}/>

      </form>

      <div className='categories'>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          {categories.map((category,index)=> (
        
          <option key={index} value={category}>{category}</option>
          
      ))}
        </select>

        <input placeholder='Custom Category' value={customcategory} onChange={(e)=>setCustomcategory(e.target.value)}/><button type='submit' onClick={(e)=> Addcustomcategory(e)}>Add</button>
      </div>

     
    </div>

    <div>
      <Lists todolists={todolists} setTodolists={setTodolists} setShowupdatebutton={setShowupdatebutton} 
      updateindex={updateindex} setUpdateindex={setUpdateindex}
      task={task} setTask={setTask}
      setDescription={setDescription}
      setCategory={setCategory}
      category={category}
      categories={categories}
      />
    </div>
    </>
  )
}
