import  {ADD} from '../actionTypes/index';

export const Add = item => ({
  type: ADD,
  payload: {item: item}
});