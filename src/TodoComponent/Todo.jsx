import {useState} from 'react';

export default function Todo() {
   const [task,setTask] = useState("");
   const [todolist,setTodoList] =useState([]);

   

   const writeTask = (e)=>{
     setTask((task)=>{
        task = e.target.value
        return task;
     })
   }

   const formSubmit = (e) =>{
        e.preventDefault(); //prevent default submission
      setTodoList(
        () =>{
           let initArray = todolist;
           initArray

        }
      );
   }



  return (
    <div className="container flex mx-auto  bg-cyan-900">
      <div className="todo-input text-white font-bold border-8 border-yellow-600  ">
      <h1>Jervis Todo</h1>
        <form className='p-20' onSubmit={formSubmit}>
           <input className='text-black' type="text" value={task} onChange={writeTask} placeholder='Enter Todo Task' name="todo" ></input>
           <button className='button md rounded p-1 ml-4 bg-yellow-600' type="submit">Add</button>
        </form>
        
      </div>

      <div className="todo-output border-8 border-yellow-600 w-96 overflow ">
        <div className=''>
        
        </div>
      </div>
    </div>
  );
}
