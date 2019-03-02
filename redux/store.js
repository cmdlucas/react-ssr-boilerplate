import { createStore } from 'redux';
import Globalreducer from './reducers/Globalreducer';
import Globalmiddleware from './middleware/Globalmiddleware'
import globalsaga from './middleware/saga/Globalsaga';

const store = createStore(Globalreducer, Globalmiddleware);

sagaMiddleware.run(globalsaga)

export default store;