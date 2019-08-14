import * as React from 'react';
import StructureItem from './StructureItem';


const StructureItems: React.FC<{}> = () => {
  return (
    <>
      <StructureItem cols={1}/>
      <StructureItem cols={2}/>
      <StructureItem cols={3}/>
      <StructureItem cols={4}/>
    </>
  );
};

export default StructureItems;