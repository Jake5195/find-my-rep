import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';
import environment from '../environments.json';

const enhancers = [];
// const middleware = [thunk];

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: any;
	}
}

if (environment.environment === 'dev') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

// const composedEnhancers = compose(
//     applyMiddleware(...middleware),
//     ...enhancers
// );

const store = createStore<RootState, any, any, any>(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop: any) => noop));

export default store;

// FOR REDUX PERSIST
// export default () => {
//     let store = createStore<RootState & PersistPartial, any, any, any>(persistedReducer, compose(applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (noop: any) => noop));
//     let persistor = persistStore(store);
//     return { store, persistor };
// };
