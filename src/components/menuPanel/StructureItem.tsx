import * as React from 'react';
import { useDrag } from 'react-dnd';
import { ControlPanelStructureItem } from '../../styles';
import dndTypes from '../../constants/dndTypes';

interface StructureItemProps {
  cols: number;
}

const StructureItem: React.FC<StructureItemProps> = (props) => {
  const cols = props.cols;

  const [{ isDragging }, drag] = useDrag({
    item: { cols, type: dndTypes.STRUCTURE },
    // end: (dropResult?: { cols: number }) => {
    //   if (dropResult) return dropResult;
    // },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  let createCollection = (quantity): number[] => {
    if (!quantity) return;
    let resArray = [];

    for (let i = 0; i < quantity; i++) {
      resArray.push(i);
    }
    return resArray;
  };

  return (
    <ControlPanelStructureItem ref={drag} width={100 / props.cols - 4}>
      {props.cols && props.cols > 1 ? (
        createCollection(props.cols).map((item, i) => <div key={i}></div>)
      ) : (
        <div></div>
      )}
    </ControlPanelStructureItem>
  );
};

export default StructureItem;
