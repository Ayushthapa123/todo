import React, { useState } from 'react';


import '../css/lists.css';

import {FaPenSquare} from 'react-icons/fa';
import {AiTwotoneDelete} from 'react-icons/ai';
import {ImCheckboxUnchecked} from 'react-icons/im';
import {ImCheckboxChecked} from 'react-icons/im'

export default function Lists(props) {
const {todolists,setTodolists,setShowupdatebutton,setUpdateindex,setTask,
    setDescription,setCategory,categories,category}=props;


 const [filter,setFilter]=useState('all');
 const [currentcategory,setCurrentcategory]=useState('');





const DeleteTask=(e)=> {
    let deleteid=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
if(deleteid) {
    let deleteindex=todolists.findIndex( element => {
        if (element.id == deleteid) {
          return true;
        }
      });

    let deltask=[...todolists];
    deltask.splice(deleteindex,1);
  
    setTodolists(deltask);
}

}

const MarkUpdate=(e)=> {

let updateid=e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
if(updateid) {
    let localupdateindex=todolists.findIndex( element => {
        if (element.id == updateid) {
          return true;
        }
      });


setShowupdatebutton(true);
setTask(todolists[localupdateindex].task);
setDescription(todolists[localupdateindex].description);
setCategory(todolists[localupdateindex].category);
setUpdateindex(localupdateindex);
}
}

const MarkComplete=(e)=> {

    let updateid=e.target.parentElement.parentElement.parentElement.id;
    if(updateid) {
        console.log(updateid);
        let updateindex=todolists.findIndex( element => {
            if (element.id == updateid) {
              return true;
            }
          });
        let newtodolists=[...todolists];
        newtodolists[updateindex].completed=!newtodolists[updateindex].completed;
    setTodolists(newtodolists);
    }
    
    }


const ClearAll=()=> {
    setTodolists([]);
}



const Changecolor=(e)=> {
    let collection=document.getElementsByClassName('filterbutton');
    
    for (let x=0;x<collection.length;x++) {
        collection[x].style.backgroundColor="black";
        e.target.style.backgroundColor="red";
      }
}

  return (
    <>
    <div className='todolistscontainer'>


        {todolists&&<div className='todolists'>
        <div className='filtercategories'>
        <div>
            <button onClick={(e)=>{setFilter("all");Changecolor(e)}} className="filterbutton">All</button ><button onClick={(e)=>{setFilter("completed");Changecolor(e)}} className="filterbutton">Completed</button>
            <button onClick={(e)=>{setFilter("notcompleted");Changecolor(e)}} className="filterbutton">Not Completed</button>
        </div>

        <div>
        {categories.map((category,index)=>(
            <button key={index} className="filterbutton" onClick={(e)=>{setFilter("categories");Changecolor(e);setCurrentcategory(category)}}>{category}</button>
        ))}

        </div>
         </div>

        {filter=="all" &&<div>
            {todolists.map((list,index)=> (
                <div key={list.id} id={list.id}>
                    <p>{!todolists[index].completed &&<i onClick={(e)=>MarkComplete(e)}><ImCheckboxUnchecked/></i>}{todolists[index].completed &&<i onClick={(e)=>MarkComplete(e)}><ImCheckboxChecked/></i>}<b>{list.task}</b> <span><i onClick={(e)=>MarkUpdate(e)}><FaPenSquare/></i> | <i onClick={(e)=>DeleteTask(e)}><AiTwotoneDelete/></i></span></p>
                    <i>{list.description}</i>
                    
                    <hr/>

                </div>
            ))}
        </div>  }   

        {filter=="completed" &&<div>
            {todolists.filter((list,index)=> {
            if(list.completed==true) {
            return list
       }
         }).map((list,index)=> (
                <div key={list.id} id={list.id}>
                    <p><i onClick={(e)=>MarkComplete(e)}><ImCheckboxChecked/></i><b>{list.task}</b> <span><i onClick={(e)=>MarkUpdate(e)}><FaPenSquare/></i> | <i onClick={(e)=>DeleteTask(e)}><AiTwotoneDelete/></i></span></p>
                    <i>{list.description}</i>
                    
                    <hr/>

                </div>
            ))}
        </div>  }   

        {filter=="notcompleted" &&<div>
            {todolists.filter((list,index)=> {
            if(list.completed==false) {
            return list
       }
         }).map((list,index)=> (
                <div key={list.id} id={list.id}>
                    <p><i onClick={(e)=>MarkComplete(e)}><ImCheckboxUnchecked/></i><b>{list.task}</b> <span><i onClick={(e)=>MarkUpdate(e)}><FaPenSquare/></i> | <i onClick={(e)=>DeleteTask(e)}><AiTwotoneDelete/></i></span></p>
                    <i>{list.description}</i>
                    
                    <hr/>

                </div>
            ))}
        </div>  }  
     

        {filter=="categories" &&<div>
            {todolists.filter((list,index)=> {
            if(list.category==currentcategory) {
            return list
       }
         }).map((list,index)=> (
                <div key={list.id} id={list.id}>
                    <p>{!todolists[index].completed &&<i onClick={(e)=>MarkComplete(e)}><ImCheckboxUnchecked/></i>}{todolists[index].completed &&<i onClick={(e)=>MarkComplete(e)}><ImCheckboxChecked/></i>}<b>{list.task}</b> <span><i onClick={(e)=>MarkUpdate(e)}><FaPenSquare/></i> | <i onClick={(e)=>DeleteTask(e)}><AiTwotoneDelete/></i></span></p>
                    <i>{list.description}</i>
                    
                    <hr/>

                </div>
            ))}
        </div>  } 



        </div>}

<div className='clearall'>
    <button onClick={(e)=>ClearAll(e)}>Clear All</button>
</div>

    </div>

    </>
  )
}
