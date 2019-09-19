import * as React from 'react';
import {
  useDrag,
  useDrop,
  DropTargetMonitor
} from 'react-dnd';
import {XYCoord} from 'dnd-core';
import dndTypes from '../../constants/dndTypes';
import {connect} from 'react-redux';
import {StructureSectionCol} from '../../styles';

interface DragItem {
  index: number
  id: number
  type: string
}

interface StructureItemProps {
  id: number,
  index: number,
  structureItemStyles: object,
  structureItemCols: string[],
  structureCols: object,
  moveStructureItem: (dragIndex: number, hoverIndex: number) => void
}

const StructureItem: React.FC<StructureItemProps> = props => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: dndTypes.STRUCTURE_SORTABLE,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current!.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      props.moveStructureItem(dragIndex, hoverIndex);
      
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    item: {
      type: dndTypes.STRUCTURE_SORTABLE,
      id: props.id,
      index: props.index
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div ref={ref} style={{
      ...props.structureItemStyles,
      opacity
    }}>
      {props.structureItemCols.map((item, i) => {
        return <StructureSectionCol key={`${item}-${i}`} className={'-empty'} style={props.structureCols[item].styles.main}/>
      })}
    </div>)

};

const mapStateToProps = state => {
  return {
    structureCols: state.structureCols,
  }
};

export default connect(mapStateToProps, null)(StructureItem);