import { ActiveCar } from '../../interfaces';

export const setActiveCarReducer = (
    state: ActiveCar | null,
    action: { type: string; payload: ActiveCar[] },
) => {
    try {
        switch (action.type) {
            case 'SET_ACTIVE_CAR':
                return action.payload;
            default:
                if (state) return state;
                else return null;
        }
    } catch (error) {
        console.log(error);
    }
};
