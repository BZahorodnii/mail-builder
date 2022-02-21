import * as React from 'react';
import menuContentComponents from '../../../collections/menuContentComponents';

import styles from './ContentItems.module.sass';

const ContentItems: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {
        menuContentComponents && menuContentComponents.length ? menuContentComponents.map((item, i) => {
          return (
            <div key={`${item.title}-i`} className={styles.item}>
              {item.title}
            </div>
          )
        }) : null
      }
    </div>
  );
};

export default ContentItems;