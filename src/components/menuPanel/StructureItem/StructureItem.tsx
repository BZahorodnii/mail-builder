import * as React from 'react';
import { useDrag } from 'react-dnd';
import cx from 'clsx';
import dndTypes from '../../../constants/dndTypes';

import styles from './StructureItem.module.sass';

interface StructureItemProps {
  cols: number;
}

const StructureItem: React.FC<StructureItemProps> = props => {
  const { cols } = props;

  const [, drag] = useDrag({
    type: dndTypes.STRUCTURE,
    item: { cols },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  let createCollection = (quantity): number[] => {
    if (!quantity) return;
    let resArray = [];

    for (let i = 0; i < quantity; i++) {
      resArray.push(i);
    }
    return resArray;
  };

  const classNames = cx(
    styles.structureItem,
    props.cols === 2 && styles.cols2,
    props.cols === 3 && styles.cols3,
    props.cols === 4 && styles.cols4,
  )

  return (
    <div className={classNames} ref={drag}>
      {props.cols && props.cols > 1 ? (
        createCollection(props.cols).map((item, i) => <div key={i}></div>)
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default StructureItem;
