import * as React from 'react';
import {StructureSectionCol} from '../../styles';

interface StructureColProps {
  styles: object,
  isEmpty: boolean
}

const StructureCol: React.FC<StructureColProps> = props => {
  return (
    <StructureSectionCol className={props.isEmpty ? '-empty' : ''} style={props.styles} />
  )
};


export default StructureCol;