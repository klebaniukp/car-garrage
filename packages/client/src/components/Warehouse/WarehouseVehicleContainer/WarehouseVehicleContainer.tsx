import React, { useCallback } from 'react';
import { Car, Location } from '../../../interfaces';

import Vehicle from '../../Vehicle';

const WarehouseVehicleContainer = (props: {
    vehicles: Car[];
    location: Location;
    warehouseName: string;
}) => {
    const { vehicles, location, warehouseName } = props;

    const renderVehicles = useCallback(() => {
        return vehicles.map(vehicle => {
            return (
                <div key={vehicle._id}>
                    <Vehicle
                        car={vehicle}
                        location={location}
                        warehouseName={warehouseName}
                    />
                </div>
            );
        });
    }, [vehicles, location, warehouseName]);

    return (
        <div
            className='d-flex flex-row justify-content-start flex-wrap overflow-scroll'
            style={{ width: '74vw', height: '40vh' }}>
            {renderVehicles()}
        </div>
    );
};

export default WarehouseVehicleContainer;
