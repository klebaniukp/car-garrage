import { combineReducers } from '@reduxjs/toolkit';
import { setWarehousesReducer } from './setWarehousesReducer';

export const reducers = combineReducers({
    warehouses: setWarehousesReducer,
});
