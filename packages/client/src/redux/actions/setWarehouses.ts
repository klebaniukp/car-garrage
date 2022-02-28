import { Warehouse } from '../../interfaces';

export const setWarehouses =
    (warehouses: Warehouse[]) =>
    (dispatch: (arg0: { type: string; payload: Warehouse[] }) => void) => {
        try {
            dispatch({
                type: 'SET_WAREHOUSES',
                payload: warehouses,
            });
        } catch (error) {
            console.log(error);
        }
    };
