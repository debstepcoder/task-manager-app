// taskReducer.js
const taskReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return [...state, action.payload];
      case 'EDIT_TASK':
        return state.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      case 'DELETE_TASK':
        let v =  state.filter((task) => task.id !== action.payload);
        console.log('v---', v);
        return state.filter((task) => task.id !== action.payload);
      // Handle other task-related actions here.
      default:
        return state;
    }
  };
  
  export default taskReducer;