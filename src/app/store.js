import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {reducer as formReducer} from 'redux-form';
import dataReducer from '../features/dataSlice'

const reducer = combineReducers({
    form: formReducer,
    data: dataReducer
})

export const store = configureStore({
    reducer
});
