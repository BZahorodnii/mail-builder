import * as React from 'react';
import {
  useDrag,
  useDrop,
  DropTargetMonitor
} from 'react-dnd';
import {XYCoord, Identifier} from 'dnd-core';
import {DragItem} from '../../../interfaces';
import dndTypes from '../../../constants/dndTypes';
import {connect} from 'react-redux';

import styles from './StructureItem.module.sass';

interface StructureItemProps {
  id: number,
  index: number,
  structureItemStyles: object,
  structureItemCols: string[],
  structureCols: object,
  moveStructureItem: (dragIndex: number, hoverIndex: number) => void
}

const StructureItem: React.FC<StructureItemProps> = props => {
  const { id, index, structureItemStyles, structureItemCols, structureCols, moveStructureItem } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: dndTypes.STRUCTURE_SORTABLE,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveStructureItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: dndTypes.STRUCTURE_SORTABLE,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{
      ...structureItemStyles,
      opacity
    }}>
      {structureItemCols.map((item, i) => {
        return <div key={`${item}-${i}`} className={`${styles.sectionCol} ${styles.empty}`} style={structureCols[item].styles.main}/>
      })}
    </div>)

};

const mapStateToProps = state => {
  return {
    structureCols: state.structureCols,
  }
};

export default connect(mapStateToProps, null)(StructureItem);