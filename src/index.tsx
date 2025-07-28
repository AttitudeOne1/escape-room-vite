import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchQuestsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';
import { HelmetProvider } from 'react-helmet-async';

store.dispatch(fetchQuestsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <HistoryRouter history={browserHistory}>
          <ToastContainer />
          <App />
        </HistoryRouter>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
