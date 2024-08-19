
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, editTodos, removeTodo, delTodos, setTodos } from '../../Store/Slices/Slices';
import DisplayTodos from '../DisplayTodos';

const Main = () => {
  const dispatch = useDispatch();
  
const todos=  useSelector((state) => state.todos || []);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const btnClicked = () => {
    if (input.trim()) {
      if (isEditing) {
        dispatch(editTodos({ id: currentTodoId, newText: input }));
        setIsEditing(false);
        setCurrentTodoId(null);
      } else {
        dispatch(addTodo({ id: new Date().getTime(), text: input }));
      }
      setInput("");
    }
  }

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (savedTodos && Array.isArray(savedTodos)) {
      dispatch(setTodos(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos",JSON.stringify(todos))
  }, [todos])
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const DelButton = (id) => {
    dispatch(removeTodo(id));
  }

  const editButton = (id, text) => {
    setIsEditing(true);
    setCurrentTodoId(id);
    setInput(text);
    dispatch(editTodos(id, text))
  }
 const DelAll = () => {
   dispatch(delTodos())
 }
 
  return (
    <section className="body-font text-gray-600  bg-purple-50 h-screen">
      <div className="container mx-auto px-3 py-10">
        <h1 className="title-font my-12 text-center md:text-[3.5rem] font-bold capitalize text-gray-900 text-3xl">Do it today</h1>
        <div className="relative mb-4 flex flex-col md:flex-row w-full md:w-5/6 mx-auto justify-around items-center">
          <input
            type="text"
            id="todoInput"
            name="todoInput"
            className="h-16 rounded-lg w-[80%] bg-white border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Write your todo"
            value={input}
            onChange={inputHandler}
          />
          <button className="my-6 w-[80%] text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded-lg text-lg md:hidden" onClick={btnClicked}>
            {isEditing ? 'Edit Todo' : 'Add Todo'}
          </button>
          <button className="my-6 w-16 h-16 rounded-lg text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 text-lg hidden md:inline-flex justify-center items-center" onClick={btnClicked}>
            <i className="ri-add-line text-4xl font-semibold "></i>
          </button>
        </div>
      </div>
      <div className=' w-full md:w-3/4 px-8  mx-auto my-3'>

      <h3 className=" text-3xl font-semibold text-gray-700  ">Your Todos</h3>
      </div>

      {todos.map((item, index) => (
        <DisplayTodos
          key={index}
          item={item.text}
          DelButton={() => DelButton(index)}
          editButton={() => editButton(item.id, item.text)}
          DelAll={DelAll}
        />
      ))}
     {todos.length > 0 && (
      <div className=" w-full md:w-3/4 px-8 justify-end flex mx-auto">
  <button 
    className="mb-8 mt-2 text-white bg-red-800 border-0 py-2 px-8 focus:outline-none
    hover:bg-red-600 rounded text-lg" 
    onClick={DelAll}
  >
    Delete All Todos
  </button>

      </div>
)}

    </section>
  );
}

export default Main;
