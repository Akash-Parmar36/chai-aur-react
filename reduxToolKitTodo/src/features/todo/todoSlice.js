import {createSlice , nanoid} from '@reduxjs/toolkit'
 
//for getting data from Local Storage
const loadTodosFromLocalStorage = () => {
      const serializedTodos = localStorage.getItem("todos");
    //   console.log(serializedTodos)
    //   console.log(typeof(serializedTodos))
    //   console.log(serializedTodos.length)
    //   console.log(JSON.parse(serializedTodos))
    //   console.log(typeof(JSON.parse(serializedTodos)))
    //   console.log(JSON.parse(serializedTodos).length)
      return JSON.parse(serializedTodos).length != 0 ? JSON.parse(serializedTodos) : [{id : 1 , text : "Hello World"}];
};

const initialState = {
    todos : loadTodosFromLocalStorage(),
    inputValue : "" ,
    checkValue : true ,
    id : null
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state , action) => {//state is your current state and action is your data and here , action is text
                const todo = {
                     id:nanoid(),
                     text:action.payload
                }

                state.todos.push(todo);
        },

        removeTodo : (state , action) => {//here , action  is id
               state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        updateTodo : (state , action) => {//here , action is object containing id and updated text
               state.todos.map((todo) => todo.id === action.payload.id ? todo.text = action.payload.text : todo); 
               state.checkValue = true;
               state.id = null;
        },


        updateInput : (state , action) => {//here , state is inputValue and  action is input-text field value
             state.inputValue = action.payload;
        },

        updateInputAndCheck : (state , action) => {//here, action is id
              for(const todo of state.todos){
                  if(todo.id === action.payload){
                     state.inputValue = todo.text;
                     state.checkValue = false;
                     todo.text = "";
                     state.id = todo.id;
                  }
              }
        }
    }
})

export const {addTodo , removeTodo , updateTodo , updateInputAndCheck , updateCheck , updateInput} = todoSlice.actions

export default todoSlice.reducer