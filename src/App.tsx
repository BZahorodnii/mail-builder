import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ControlPanel from './containers/ControlPanel/ControlPanel';
import Preview from './containers/Preview/Preview';

import styles from './App.module.sass';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <DndProvider backend={HTML5Backend}>
        <ControlPanel />
        <Preview />
      </DndProvider>
    </div>
  )
};

export default App;
