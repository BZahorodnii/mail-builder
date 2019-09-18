import * as React from 'react';
import {connect} from 'react-redux';
import StructureItem from './StructureItem';
import {moveStructureItem, selectMenu} from '../../actions';

interface StructureItemsProps {
  templateStylesMain: object,
  structureCols: object,
  structureItemsOrder: string[],
  structureItems: string[],
  moveStructureItem: (structureItems: object) => void
}

const StructureItems: React.FC<StructureItemsProps> = props => {
  const moveStructureItem = (dragIndex: number, hoverIndex: number) => {
    let dragItemId = props.structureItemsOrder[dragIndex];
    let newArr = props.structureItemsOrder.slice();
    newArr.splice(dragIndex, 1);
    newArr.splice(hoverIndex, 0, dragItemId);
    props.moveStructureItem(newArr);
  };

  return (
    <div style={props.templateStylesMain}>
      {props.structureItemsOrder.map((item, i) => {
        return <StructureItem key={`${item}`} moveStructureItem={moveStructureItem} index={i} id={props.structureItems[item].sortableId} structureItemCols={props.structureItems[item].colsId} structureItemStyles={props.structureItems[item].styles.main} />
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