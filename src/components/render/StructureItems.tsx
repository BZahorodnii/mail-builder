import * as React from 'react';
import {connect} from 'react-redux';
import StructureItem from './StructureItem/StructureItem';
import {moveStructureItem} from '../../actions';

interface StructureItemsProps {
  templateStylesMain: object,
  structureCols: object,
  structureItemsOrder: string[],
  structureItems: string[],
  moveStructureItem: (structureItems: object) => void
}

const StructureItems: React.FC<StructureItemsProps> = props => {
  const { templateStylesMain, structureCols, structureItemsOrder, structureItems, moveStructureItem } = props;
  
  const moveItem = (dragIndex: number, hoverIndex: number) => {
    let dragItemId = structureItemsOrder[dragIndex];
    let newArr = structureItemsOrder.slice();
    newArr.splice(dragIndex, 1);
    newArr.splice(hoverIndex, 0, dragItemId);
    moveStructureItem(newArr);
  };

  return (
    <div style={templateStylesMain}>
      {structureItemsOrder.map((item, i) => {
        return (
          <StructureItem 
            key={`${item}`}
            index={i}
            id={structureItems[item].sortableId}
            moveStructureItem={moveItem}
            structureItemCols={structureItems[item].colsId}
            structureItemStyles={structureItems[item].styles.main}
          />
        )
      })}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    templateStylesMain: state.template.styles.main,
    structureItems: state.structureItems,
    structureCols: state.structureCols,
    structureItemsOrder: state.structureItemsOrder
  }
};

const mapDispatchToProps = dispatch => {
  return {
    moveStructureItem: structureItems => {
      dispatch(moveStructureItem(structureItems));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StructureItems);