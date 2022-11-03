import React from 'react';

import '../css/lists.css';

import {FaPenSquare} from 'react-icons/fa';
import {AiTwotoneDelete} from 'react-icons/ai';

export default function Lists(props) {
const {todolists,setTodolists,showupdate,setShowupdate,setUtask,setUpdateid}=props;





const DeleteTask=(e)=> {
    let indexid=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
if(indexid) {
    let deltask=[...todolists];
    deltask.splice(indexid,1);
  
    setTodolists(deltask);
}

}

const MarkUpdate=(e)=> {

let indexid=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
if(indexid) {
setShowupdate(true);
setUtask(todolists[indexid].task);
setUpdateid(indexid);
}

}

const ClearAll=()=> {
    setTodolists([]);
}


  return (
    <>
    <div className='todolistscontainer'>
        {todolists&&<div className='todolists'>
            {todolists.map((list,index)=> (
                <div key={index} id={index}>
                    <p>{list.task} <span><i onClick={(e)=>MarkUpdate(e)}><FaPenSquare/></i> | <i onClick={(e)=>DeleteTask(e)}><AiTwotoneDelete/></i></span></p><hr/>

                </div>
            ))}
            
        </div>}

<div className='clearall'>
    <button onClick={(e)=>ClearAll(e)}>Clear All</button>
</div>

    </div>

    </>
  )
}
