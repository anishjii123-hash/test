

import { createStore } from 'redux';

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";


const initialState = {
    task: [
  ],
};
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            };

        case DELETE_TASK:
            return {
                ...state,
                task: state.task.filter((_,index) => index !== action.payload),
            };

        default:
            return state;
    }
};


export const store = createStore(taskReducer);

export const addList = (...data) => ({
    type: ADD_TASK,
    payload: data,
});

export const deleteList = (index) => ({
    type: DELETE_TASK,
    payload: index,
});
 store.dispatch(addList("apple"))
 store.dispatch(addList("nmango"))
 store.dispatch(addList("pineapple"))
 store.dispatch(addList("orange"))
 console.log("updated", store.getState())


 