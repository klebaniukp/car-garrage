import { Warehouse } from '../../interfaces';

export const setWarehousesReducer = (
    state: Warehouse[],
    action: { type: string; payload: Warehouse[] }
) => {
    try {
        switch (action.type) {
            case 'SET_WAREHOUSES':
                return action.payload;
            default:
                if (state) return state;
                else return [];
        }
    } catch (error) {
        console.log(error);
    }
};
