import { atom } from 'nanostores';

export const structureItemsOrder = atom<string[]>([]);

export function addStructureItemId(id: string) {
  structureItemsOrder.set([...structureItemsOrder.get(), id]);
}

export function reorderStructureItems(dragIndex: number, hoverIndex: number) {
  let dragItemId = structureItemsOrder.get()[dragIndex];
  let newArr = structureItemsOrder.get().slice();
  newArr.splice(dragIndex, 1);
  newArr.splice(hoverIndex, 0, dragItemId);
  structureItemsOrder.set(newArr);
}
