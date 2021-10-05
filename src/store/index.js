import {composeWithDevTools} from 'redux-devtools-extension';
import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducer';

export const store = configureStore({
    reducer,
    composeWithDevTools,
});