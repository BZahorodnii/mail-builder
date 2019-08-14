import * as React from 'react';
import menuContentComponents from '../../collections/menuContentComponents';
import {
  ControlPanelContentWrapper,
  ControlPanelContentItem
} from '../../styles';

const ContentItems: React.FC = () => {
  return (
    <ControlPanelContentWrapper>
      {
        menuContentComponents && menuContentComponents.length ? menuContentComponents.map((item, i) => {
          return (
            <ControlPanelContentItem key={`${item.title}-i`}>
              {item.title}
            </ControlPanelContentItem>
          )
        }) : null
      }
    </ControlPanelContentWrapper>
  );
};

export default ContentItems;