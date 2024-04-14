import React from 'react'
import { useEffect, useState } from "react";
import TodoDetails from "./components/TodoDetails";
import "./index.css";

function App() {

let toDoData = [
  {
    id:1,
    Name:"Office Task-1",
    Desc:"Task1111111111111111",
    Status:"Not Completed"
  },
  {
    id:2,
    Name:"Office Task-2",
    Desc:"Task22222222222",
    Status:"Completed"
  },
  {
    id:3,
    Name:"Office Task-3",
    Desc:"Task3333333333333",
    Status:"Completed"
  },
];
const [todolist, setTodo] = useState([]);

const [formState, setFormState] = useState({});

const loadData = async () => {
  setTodo(toDoData);
};

const crupToDo = (e) => {
  e.preventDefault();
  alert("Todo saved successfuly");
  if (formState.id) {
    updateTodo();
  } else {
    createTodo();
  }
  setFormState({});
};
const createTodo = () => {
  const tempProd = { ...formState };

  tempProd.id = (todolist.length+1);
  tempProd.Status = "Not Completed"

  setTodo([...todolist, tempProd]);
};

const handleChange = (e) => {
  setFormState({
    ...formState,
    [e.target.name]: e.target.value,
  });
};

const handleSelect = (e) => {
  console.log(e.target.innerHTML);
  let tempList = [];
  console.log("completed list... "+tempList.length);
  let temptoDoObj = {};
  document.getElementById("toDoSelList").innerHTML = e.target.innerHTML;
  if(e.target.innerHTML !== "All"){
    for(let i =0 ;i < toDoData.length; i++){
      temptoDoObj = toDoData[i];
      if(temptoDoObj.Status === e.target.innerHTML){
        tempList.push(temptoDoObj);
      }
    }
  }
  else{
    tempList = toDoData;
  }
  console.log("completed list... "+tempList.length);
  setTodo(tempList);
};

const updateTodo = () => {
  const index = todolist.findIndex((product) => product.id === formState.id);

  const tempProds = [...todolist];

  tempProds[index] = formState;

  setTodo(tempProds);
};

// Edit a todo list
const editProduct = (pdId) => {
  const pdData = todolist.find((todo) => todo.id === pdId);

  setFormState(pdData);
};

// Delete a todolist
const deleteProduct = (todoId) => {
  setTodo(todolist.filter(({ id }) => todoId !== id));
};

useEffect(() => {
  loadData();
}, []);

  return (
    <>
      <div><h3 className='headText'>My todo</h3></div>
      <form onSubmit={crupToDo}>
        <div className="inDiv">
        <input type="text" name="Name" placeholder="Todo Name" className='form-control textDesign' onChange={handleChange} value={formState.Name || ""}/><br /><br />
        <input type="text" name="Desc" placeholder="Todo Description" className='form-control textDesign' onChange={handleChange} value={formState.Desc || ""}/>
        <button type="submit" value="Add Todo" className="btn btn-success btnDesign">Add ToDo</button>
        {/* <input type="button" name="title" placeholder="" value="Add Todo" className="btn btn-success btnDesign"/> */}
        </div>
      </form>
      <div className="mytoDoList">
        <section className='titleSec'>
          <h3 className='navText'>My Todos</h3>
          <h3 className='navButton'>Status Filter :
          <div>
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="toDoSelList">
            All
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#" onClick={handleSelect}>All</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>Completed</a></li>
            <li><a className="dropdown-item" href="#" onClick={handleSelect}>Not Completed</a></li>
          </ul>
        </div>
          </h3>
        </section>
        <section className='listOfTodo'>
        {console.log(toDoData.length)}
            {
              todolist.map((todoData) => {
                return <TodoDetails {...todoData} keys={todoData.id} deleteProduct={deleteProduct}
                editProduct={editProduct}/>
              })
            }
        </section>
      </div>
    </>
  )
}

export default App
