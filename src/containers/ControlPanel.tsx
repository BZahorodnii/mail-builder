import * as React from 'react';
import {connect} from 'react-redux';
import {selectMenu} from '../actions';
import StructureItem from '../components/menuPanel/StructureItem';
import ContentItems from '../components/menuPanel/ContentItems';
import {H1, ControlPanelWrapper, ControlPanelWrapperIn, ControlPanelMenuWrapper, ControlPanelMenuItem} from '../styles';

interface ControlPanelProps {
  onClickMenu: (trigger: string) => void,
  selectedMenu: string
}

const ControlPanel: React.FC<ControlPanelProps> = props =>  {
  return (
    <ControlPanelWrapper>
      <ControlPanelMenuWrapper>
        <ControlPanelMenuItem active={props.selectedMenu === 'content'} onClick={() => {props.onClickMenu('content')}}>Content</ControlPanelMenuItem>
        <ControlPanelMenuItem active={props.selectedMenu === 'design'} onClick={() => {props.onClickMenu('design')}}>Design</ControlPanelMenuItem>
      </ControlPanelMenuWrapper>
      <ControlPanelWrapperIn>
        <H1>Structure</H1>
        <>
          <StructureItem cols={1}/>
          <StructureItem cols={2}/>
          <StructureItem cols={3}/>
          <StructureItem cols={4}/>
        </>
        <H1>Content</H1>
        <ContentItems/>
      </ControlPanelWrapperIn>
    </ControlPanelWrapper>
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