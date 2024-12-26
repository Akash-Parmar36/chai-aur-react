import { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { addTodo , updateCheck , updateInput , updateTodo} from '../features/todo/todoSlice';

function AddTodo() {
    
    const check  = useSelector(state => state.checkValue); // true for AddTodo and false for UpdateTodo
    const input  = useSelector(state => state.inputValue);
    const id = useSelector(state => state.id);
    const dispatch = useDispatch();
 
    const addTodoHandler = (e) => {
         e.preventDefault();
         dispatch(addTodo(input));
         dispatch(updateInput(""));
    }

    const updateTodoHandler = (e) => {
          e.preventDefault();
          dispatch(updateTodo({id : id , text : input}));
          dispatch(updateInput(""));
    }

  return (
    <form onSubmit={check === true ? addTodoHandler : updateTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => dispatch(updateInput(e.target.value))}
      required
    />
     
    {check === true ? <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button> : <button
      type="submit"
      className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
    >
      Update Todo
    </button>}
  </form>
  )
}

export default AddTodo