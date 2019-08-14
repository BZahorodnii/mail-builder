import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app{
    height: 100%;
  }
  body {
    font-family: 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  button, a {
    outline: none;
    background: none;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  min-height: 100%;
  font-size: 10px;
  line-height: 1.4;
  font-weight: 400;
  color: #333;
`;

export const ControlPanelWrapper = styled.div`
  width: 300px;
  border-right: 1px solid rgba(0,0,0, .1);
`;

export const ControlPanelWrapperIn = styled.div`
  padding: 10px;
`;

export const ControlPanelMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0,0,0, .1);
`;

interface ControlPanelMenuItemProps {
  active: boolean
}

export const ControlPanelMenuItem = styled.button`
   padding: 12px 0;
   text-align: center;
   width: 50%;
   font-size: 2.0em;
   line-height: 1.2;
   border: 0;
   cursor: pointer;
   background: ${(props: ControlPanelMenuItemProps) => props.active ? 'rgba(0,0,0, .1)' : 'none'};
   transition: all .4s ease;
   &:hover {
    background: rgba(0,0,0, .1);
   }
`;

interface ControlPanelStructureItemProps {
  width: number
}

export const ControlPanelStructureItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4% 2%;
    margin: 0 0 10px;
    color: #5C5C5C;
    border: 1px solid #D8D8D8;
    border-radius: 5px;
    cursor: grab;
    transition: all .4s ease;
    &:hover {
      border: 1px solid rgba(0,0,0, .25);
      background: rgba(5,1,243, .05);
    }
    &:active {
      cursor: grabbing;
    }
    div {
      position: relative;
      border-radius: 5px;
      height: 30px;
      margin: 0 2%;
      width: ${(props: ControlPanelStructureItemProps) => props.width ? `${props.width}%` : '100%'};
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0, .05 );
        border: 1px dashed rgba(0,0,0, .2);
      }
    }
`;

export const ControlPanelContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ControlPanelContentItem = styled.div`
  font-size: 1.4em;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(0,0,0, .1);
  padding: 10px;
  width: 30%;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: grab;
  transition: all .4s ease;
  &:nth-child(3n+2) {
    margin: 0 5% 15px;
  }
  &:hover {
    box-shadow: 0 0 0 1px rgba(0,0,0, .25);
    background: rgba(5,1,243, .05);
  }
  &:active {
    cursor: grabbing;
  }
`;

interface PreviewWrapperProps {
  background: string
}

export const PreviewWrapper = styled.div`
  flex-grow: 1;
  background: ${(props: PreviewWrapperProps) => props.background ? props.background : 'none'};
  transition: all .4s ease;
`;

export const H1 = styled.h1`
  font-size: 2.6em;
  font-weight: 1.2;
  margin: 0 0 10px;
`;

export const H2 = styled.h2`
  font-size: 2.2em;
  font-weight: 1.2;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 2em;
  font-weight: 1.2;
  margin: 0;
`;

export const Text = styled.div`
  font-size: 1.6em;
  margin: 0;
`;

// Template render Components
export const StructureSectionCol = styled.div`
  transition: all 2s ease;
	&.-empty {
    height: 60px;
    background: rgba(231, 249, 250, .5);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .1);
	}
	.-is-drag {
		background: rgba(231, 249, 250, .7);
	}
	.-can-drop {
		background: rgba(231, 249, 250, .9);
	}
`;

