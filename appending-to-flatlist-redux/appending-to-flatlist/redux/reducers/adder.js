import { ADD } from '../actionTypes/index';

const initial_state = {
  list: [],
}
export default function (state = initial_state, action){
switch(action.type){
case ADD:{
  const  {item} = action.payload
  return {
    list : [...state.list, item] 
  } 
}
  default:
  return state
  
}
}