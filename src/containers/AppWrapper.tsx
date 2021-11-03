import * as React from 'react';
import ControlPanel from './ControlPanel';
import Preview from './Preview';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GlobalStyle, Wrapper } from '../styles';

const AppWrapper: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <DndProvider backend={HTML5Backend}>
          <ControlPanel />
          <Preview />
        </DndProvider>
      </Wrapper>
    </>
  );
};

export default AppWrapper;
