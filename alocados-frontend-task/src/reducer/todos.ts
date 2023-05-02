// todos.js
const initialState = {
  todos: [],
};

export interface todoProps {
  id: number
} 

const todosReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo:todoProps) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;