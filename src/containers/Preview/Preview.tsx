import * as React from 'react';
import { useDrop } from 'react-dnd';
import { useStore } from '@nanostores/react';
import cx from 'clsx';
import dndTypes from '../../constants/dndTypes';
import { structureItemsOrder } from '../../stores/structureItemsOrder';
import { addStructureItemId } from '../../stores/structureItemsOrder';
import { addStructureItem } from '../../stores/structureItems';
import StructureItems from '../../components/render/StructureItems';

import styles from './Preview.module.sass';

const Preview: React.FC = () => {
  const orderList = useStore(structureItemsOrder);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: dndTypes.STRUCTURE,
    drop: (props, monitor) => {
      const dropItem: any = monitor.getItem();
      const structureId: string = `structure-${Date.now()}`;
      const colsId = (): string[] => {
        let colsIdArr: string[] = [];
        for (let i = 0; i < dropItem.cols; i++) {
          colsIdArr.push(`${structureId}-${i + 1}`);
        }
        return colsIdArr;
      };

      addStructureItemId(structureId);
      addStructureItem(structureId, colsId(), orderList.length);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && !isOver;
  const isCanDrop = canDrop && isOver;

  const classNames = cx(
    styles.previewWrapper,
    isActive && styles.isActive,
    isCanDrop && styles.canDrop
  );

  return (
    <div className={classNames} ref={drop} id="template">
      <table className="wrapper">
        <tbody>
        <tr>
          <td>
            <table className="template-wrapper">
              <tbody>
              <tr style={{verticalAlign: 'top'}}>
                <td>
                   <StructureItems/>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Preview;
