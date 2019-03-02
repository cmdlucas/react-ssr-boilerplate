import { compose, applyMiddleware } from 'redux';
import saga from 'redux-saga';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export const sagaMiddleware = saga();

export default composeEnhancers( applyMiddleware(sagaMiddleware) ); //apply other middlewares in here