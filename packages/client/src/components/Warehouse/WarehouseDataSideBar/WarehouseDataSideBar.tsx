import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import { ActiveCar } from '../../../interfaces';
import Map from '../../Map';

const WarehouseDataSideBar = () => {
    const activeCar: ActiveCar = useSelector(
        (state: RootState) => state.activeCar,
    );

    const defaultProps = {
        center: {
            lat: 0.12345,
            lng: 0.12345,
        },
        zoom: 5,
        key: process.env.REACT_APP_API_KEY as string,
    };

    if (activeCar !== null) {
        defaultProps.center = {
            lat: parseInt(activeCar.location.lat),
            lng: parseInt(activeCar.location.long),
        };
    }

    return (
        <>
            {activeCar === null ? (
                <></>
            ) : (
                <div
                    className='d-flex flex-column justify-content-between'
                    style={{ width: '25vw' }}>
                    <h3 className='text-center border-bottom'>
                        {activeCar.make}: {activeCar.model}
                    </h3>
                    <div>
                        <ul>
                            <li>{activeCar.make}</li>
                            <li>{activeCar.model}</li>
                            <li>{activeCar.year_model}</li>
                            <li>{activeCar.price} $</li>
                            <li>{activeCar.date_added}</li>
                        </ul>
                    </div>
                    <Map defaultProps={defaultProps} />
                </div>
            )}
        </>
    );
};

export default WarehouseDataSideBar;
