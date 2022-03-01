import { ActiveCar } from '../../interfaces';

export const setActiveCar =
    (activeCar: ActiveCar) =>
    (dispatch: (arg0: { type: string; payload: ActiveCar }) => void) => {
        try {
            dispatch({
                type: 'SET_ACTIVE_CAR',
                payload: activeCar,
            });
        } catch (error) {
            console.log(error);
        }
    };
