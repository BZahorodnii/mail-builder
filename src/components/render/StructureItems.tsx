import * as React from 'react';
import { useStore } from '@nanostores/react';
import { structureItemsOrder } from '../../stores/structureItemsOrder';
import { structureItems } from '../../stores/structureItems';
import StructureItem from './StructureItem/StructureItem';

const StructureItems: React.FC = () => {

  const orderList = useStore(structureItemsOrder);
  const itemsList = useStore(structureItems)

  return (
    <div className="template">
      {orderList.map((item, i) => {
        if (!itemsList) return;
        return (
          <StructureItem 
            key={`${item}`}
            index={i}
            id={itemsList?.[item]?.sortableId}
            structureItemCols={itemsList?.[item]?.colsId}
          />
        )
      })}
    </div>
  )
};

export default StructureItems;