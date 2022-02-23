import { map } from 'nanostores';

export interface StructureItems {
  [key: string]: { colsId: string[], sortableId: number };
}

export const structureItems = map<StructureItems>({});

export function addStructureItem(id: string, colsId: string[], sortableId: number) {
  structureItems.setKey(id, { colsId, sortableId })
}
