import * as React from 'react';
import {connect} from 'react-redux';
import {selectMenu} from '../../actions';
import StructureItem from '../../components/menuPanel/StructureItem/StructureItem';
import ContentItems from '../../components/menuPanel/ContentItems/ContentItems';

import styles from './ControlPanel.module.sass';

interface ControlPanelProps {
  onClickMenu: (trigger: string) => void,
  selectedMenu: string
}

const ControlPanel: React.FC<ControlPanelProps> = props =>  {
  return (
    <div className={styles.controlPanelWrapper}>
      <div className={styles.controlPanelMenuWrapper}>
        <div className={`${styles.controlPanelMenuItem} ${props.selectedMenu === 'content' ? styles.controlPanelMenuItemActive : ''}`} onClick={() => {props.onClickMenu('content')}}>Content</div>
        <div className={styles.controlPanelMenuItem} onClick={() => {props.onClickMenu('design')}}>Design</div>
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
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedMenu: state.selectedMenu
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickMenu: trigger => {
      dispatch(selectMenu(trigger));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);