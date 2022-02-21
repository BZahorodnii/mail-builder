import {combineReducers} from 'redux';
import structureItemsOrder from './structureItemsOrder';
import structureItems from './structureItems';
import structureCols from './structureCols';
import * as types from '../constants/ActionTypes';

const selectedMenu = (state = 'structure', action: any) => {
  switch (action.type) {
    case types.SELECT_MENU:
      return action.menu;
    default:
      return state;
  }
};

const selectedStructureItem = (state = '', action: any) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return action.structureItem;
    case 'REMOVE_STRUCTURE_ITEM':
      return '';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  body: (state = {}) => state,
  template: (state = {}) => state,
  selectedMenu,
  structureItemsOrder,
  structureItems,
  structureCols
});

export default rootReducer;
