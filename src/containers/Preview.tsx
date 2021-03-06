import * as React from 'react';
import {connect} from 'react-redux';
import {PreviewWrapper} from '../styles';
import { useDrop } from 'react-dnd';
import dndTypes from '../constants/dndTypes';
import {addStructureItem} from '../actions';
import structureItemsStyles from '../collections/structureItemsStyles';
import StructureItems from '../components/render/StructureItems';

interface PreviewProps {
  bodyStylesMain: object,
  templateStylesWrapper: object,
  structureItemsOrder: string[],
  addStructureItem: (id: string, sortableId: number, styles: object, colsId: string[], colsStyles: object[]) => void
}

const Preview: React.FC<PreviewProps> = props => {
  const structureItems = props.structureItemsOrder;

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: dndTypes.STRUCTURE,
    drop: (props, monitor) => {
      const dropItem = monitor.getItem();
      const structureId: string = `structure-${Date.now()}`;
      const colsId = (): string[] => {
        let colsIdArr: string[] = [];
        for (let i = 0; i < dropItem.cols; i++) {
          colsIdArr.push(`${structureId}-${i + 1}`);
        }
        return colsIdArr;
      };

      if(structureItemsStyles) addStructureItem(structureId, structureItems.length, structureItemsStyles.parent, colsId(), structureItemsStyles.cols[dropItem.cols]);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      isDrop: monitor.getDropResult() && monitor.getDropResult().isDrop ? monitor.getDropResult().isDrop : false
    }),
  });

  const addStructureItem = (id, sortableId, styles, colsId, colsStyles) => {
    props.addStructureItem(id, sortableId, styles, colsId, colsStyles);
  };

  const isActive = canDrop && isOver;
  let backgroundColor: string;
  if (isActive) {
    backgroundColor = 'rgba(255,255,37, .2)';
  } else if (canDrop) {
    backgroundColor = 'rgba(255,255,37, .1)';
  }

  return (
    <PreviewWrapper ref={drop} background={backgroundColor}>
      <table style={props.bodyStylesMain}>
        <tbody>
        <tr>
          <td>
            <table style={props.templateStylesWrapper}>
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
    </PreviewWrapper>
  );
};

const mapStateToProps = state => {
  return {
    bodyStylesMain: state.body.styles.main,
    templateStylesWrapper: state.template.styles.wrapper,
    structureItemsOrder: state.structureItemsOrder
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStructureItem: (id, sortableId, styles, colsId, colsStyles) => {
      dispatch(addStructureItem(id, sortableId, styles, colsId, colsStyles));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
