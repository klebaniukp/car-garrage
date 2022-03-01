import { combineReducers } from '@reduxjs/toolkit';

import { setWarehousesReducer } from './setWarehousesReducer';
import { setActiveCarReducer } from './setActiveCarReducer';

export const reducers = combineReducers({
    warehouses: setWarehousesReducer,
    activeCar: setActiveCarReducer,
});
