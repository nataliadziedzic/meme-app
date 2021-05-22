import { createStore, combineReducers } from 'redux';
import themeReducer from './reducers/themeReducer';

export const rootReducer = combineReducers({
  themeReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
