import * as React from 'react';
import {connect} from 'react-redux';
import { useDrop } from 'react-dnd';
import cx from 'clsx';
import dndTypes from '../../constants/dndTypes';
import {addStructureItem} from '../../actions';
import structureItemsStyles from '../../collections/structureItemsStyles';
import StructureItems from '../../components/render/StructureItems';

import styles from './Preview.module.sass';

interface PreviewProps {
  bodyStylesMain: object,
  templateStylesWrapper: object,
  structureItemsOrder: string[],
  addStructureItem: (id: string, sortableId: number, styles: object, colsId: string[], colsStyles: object[]) => void
}

const Preview: React.FC<PreviewProps> = props => {
  const { bodyStylesMain, templateStylesWrapper, structureItemsOrder, addStructureItem } = props;

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

      if (structureItemsStyles) addItem(structureId, structureItemsOrder.length, structureItemsStyles.parent, colsId(), structureItemsStyles.cols[dropItem.cols]);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const addItem = (id, sortableId, styles, colsId, colsStyles) => {
    addStructureItem(id, sortableId, styles, colsId, colsStyles);
  };

  const isActive = canDrop && !isOver;
  const isCanDrop = canDrop && isOver;

  return (
    <div className={cx(styles.previewWrapper, isActive && styles.isActive, isCanDrop && styles.canDrop)} ref={drop}>
      <table style={bodyStylesMain}>
        <tbody>
        <tr>
          <td>
            <table style={templateStylesWrapper}>
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
