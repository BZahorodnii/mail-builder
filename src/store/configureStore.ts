import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import templateStyles from '../collections/templateStyles';

const logger = createLogger();

const initialState: object = {
  body: {
    styles: templateStyles.templateWrapper
  },
  template: {
    styles: templateStyles.template
  },
  selectedMenu: 'content',
  structureItemsOrder: [],
  structureItems: {},
  structureCols: {},
};

export default () => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      logger
    )
  )
}