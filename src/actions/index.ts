import * as types from '../constants/ActionTypes';


interface selectMenu {
  type: types.SELECT_MENU;
  menu: string;
}

interface addStructureItem {
  type: types.ADD_STRUCTURE_ITEM,
  id: string,
  styles: object,
  colsId: string[],
  colsStyles: object[]
}

export function selectMenu(menu: string): selectMenu {
  return {
    type: types.SELECT_MENU,
    menu
  }
}

export function addStructureItem(id: string, styles: object, colsId: string[], colsStyles: object[]): addStructureItem {
  return {
    type: types.ADD_STRUCTURE_ITEM,
    id,
    styles,
    colsId,
    colsStyles
  }
}