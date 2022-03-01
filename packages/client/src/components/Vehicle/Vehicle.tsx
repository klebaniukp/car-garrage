import React from 'react';
import { useDispatch } from 'react-redux';

import { Car, Location, ActiveCar } from '../../interfaces';

const Vehicle = (props: {
    car: Car;
    location: Location;
    warehouseName: string;
}) => {
    const { car, warehouseName, location } = props;
    const dispatch = useDispatch();

    const licenseState = {
        isDisabled: false,
    };

    if (car.licensed) licenseState.isDisabled = true;

    const handleActiveCarButton = () => {
        const payload: ActiveCar = {
            ...car,
            warehouseName: warehouseName,
            location: location,
        };

        dispatch({ type: 'SET_ACTIVE_CAR', payload: payload });
    };

    return (
        <div className='card m-2' style={{ width: '16vw' }}>
            <div className='card-header'>{car.make}</div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{car.model}</li>
                <li className='list-group-item'>{car.price} $</li>
                {licenseState.isDisabled ? (
                    <li className='list-group-item'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            disabled>
                            details
                        </button>
                    </li>
                ) : (
                    <li className='list-group-item'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={() => handleActiveCarButton()}>
                            details
                        </button>
                    </li>
                )}
                <li className='list-group-item'>{car.date_added}</li>
            </ul>
        </div>
    );
};

export default Vehicle;
