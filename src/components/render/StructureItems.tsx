import * as React from 'react';
import {connect} from 'react-redux';
import StructureCol from "./StructureCol";

interface StructureItemsProps {
  structureCols: object,
  structureItemsOrder: string[],
  structureItems: string[]
}

const StructureItems: React.FC<StructureItemsProps> = props => {
  return (
    <>
      {props.structureItemsOrder.map((item, i) => {
        return (
          <div key={`${item}-${i}`} style={props.structureItems[item].styles.main}>
            {props.structureItems[item].colsId.map((item, i) => {
              return <StructureCol key={`${item}-${i}`} styles={props.structureCols[item].styles.main} isEmpty={true}/>
            })}
          </div>)
      })}
    </>
  )
};

const mapStateToProps = state => {
  return {
    structureItems: state.structureItems,
    structureCols: state.structureCols,
    structureItemsOrder: state.structureItemsOrder
  }
};

export default connect(mapStateToProps, null)(StructureItems);