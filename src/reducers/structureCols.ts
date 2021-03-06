import {ADD_STRUCTURE_ITEM} from '../constants/actionTypes';

const structureCol = (state = {}, action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      return {
        ...state,
        parentId: action.id,
        styles: action.colsStyles
      };
    default:
      return state;
  }
};

const structureCols = (state = {}, action) => {
  switch (action.type) {
    case ADD_STRUCTURE_ITEM:
      let items = {...state};
      action.colsId.map((item) => {
        items[item] = structureCol(state[item], action)
      });
      return {...items};
    default:
      return state;
  }
};

export default structureCols;