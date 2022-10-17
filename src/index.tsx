import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import { sagaMiddleware, setupStore } from './store/store';
import { countWatcher } from './saga/CountSaga';

const store = setupStore();
sagaMiddleware.run(countWatcher);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
