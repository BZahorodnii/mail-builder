import {ADD_STRUCTURE_ITEM, MOVE_STRUCTURE_ITEM} from '../constants/ActionTypes';

const structureItemsOrder = (state = [], action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      return [...state, action.id];
    case MOVE_STRUCTURE_ITEM:
      return action.structureItems;
    default:
      return state;
  }
};

export default structureItemsOrder;