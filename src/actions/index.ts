import * as types from '../constants/actionTypes';


interface selectMenu {
  type: types.SELECT_MENU;
  menu: string;
}

interface addStructureItem {
  type: types.ADD_STRUCTURE_ITEM;
  id: string;
  sortableId: number;
  styles: object;
  colsId: string[];
  colsStyles: object[];
}

interface moveStructureItem {
  type: types.MOVE_STRUCTURE_ITEM;
  structureItems: object;
}


export function selectMenu(menu: string): selectMenu {
  return {
    type: types.SELECT_MENU,
    menu
  }
}

export function addStructureItem(id: string, sortableId: number, styles: object, colsId: string[], colsStyles: object[]): addStructureItem {
  return {
    type: types.ADD_STRUCTURE_ITEM,
    id,
    sortableId,
    styles,
    colsId,
    colsStyles
  }
}

export function moveStructureItem(structureItems: object): moveStructureItem {
  return {
    type: types.MOVE_STRUCTURE_ITEM,
    structureItems
  }
}