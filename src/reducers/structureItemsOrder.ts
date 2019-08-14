import {ADD_STRUCTURE_ITEM} from '../constants/actionTypes';

const structureItemsOrder = (state = [], action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      return [...state, action.id];
    default:
      return state;
  }
};

export default structureItemsOrder;