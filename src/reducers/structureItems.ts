import {ADD_STRUCTURE_ITEM} from '../constants/actionTypes';

const structureItem = (state = {}, action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      return {
        ...state,
        styles: action.styles,
        colsId: action.colsId,
        sortableId: action.sortableId
      };
    default:
      return state;
  }
};

const structureItems = (state = {}, action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      return {
        ...state,
        [action.id]: structureItem(state[action.id], action)
      };
    default:
      return state;
  }
};

export default structureItems;