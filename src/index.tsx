import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {store} from "./app/store";

const container = document.getElementById('root')!;
const root = createRoot(container);
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
