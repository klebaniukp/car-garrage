import React, { useCallback } from 'react';
import { Car } from '../../../interfaces';

import Vehicle from '../../Vehicle';

const WarehouseVehicleContainer = (props: { vehicles: Car[] }) => {
    const { vehicles } = props;

    const renderVehicles = useCallback(() => {
        return vehicles.map(vehicle => {
            return (
                <div key={vehicle._id}>
                    <Vehicle car={vehicle} />
                </div>
            );
        });
    }, [vehicles]);

    return (
        <div
            className='d-flex flex-row justify-content-start flex-wrap overflow-scroll'
            style={{ width: '75vw', height: '40vh' }}>
            {renderVehicles()}
        </div>
    );
};

export default WarehouseVehicleContainer;
