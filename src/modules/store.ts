import { createStore, applyMiddleware, compose, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { Task } from 'redux-saga';

import logger from 'redux-logger';
import rootReducer from './index';

export interface SagaStore extends Store {
	sagaTask?: Task;
}

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const middlewares = [sagaMiddleware, logger];

	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middlewares))
			: composeWithDevTools(applyMiddleware(...middlewares));

	const store = createStore(rootReducer, enhancer);

	// TODO rootSaga 생성 해주어야 함.
	// (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
