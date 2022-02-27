import * as React from 'react';
import StructureItem from '../../components/menuPanel/StructureItem/StructureItem';
import ContentItems from '../../components/menuPanel/ContentItems/ContentItems';
import SaveBtn from '../../components/menuPanel/SaveBtn/SaveBtn';

import styles from './ControlPanel.module.sass';


const ControlPanel: React.FC = () =>  {
  return (
    <div className={styles.controlPanelWrapper}>
      <div className={styles.controlPanelMenuWrapper}>
        <div className={styles.controlPanelMenuItem}>Content</div>
        <div className={styles.controlPanelMenuItem}>Design</div>
      </div>
      <div className={styles.controlPanelWrapperIn}>
        <div className={styles.title}>Structure</div>
        <>
          <StructureItem cols={1}/>
          <StructureItem cols={2}/>
          <StructureItem cols={3}/>
          <StructureItem cols={4}/>
        </>
        <div className={styles.title}>Content</div>
        <ContentItems/>
        <div className={styles.title}>
          <SaveBtn />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;