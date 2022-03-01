import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Warehouse as IWarehouse } from '../../interfaces';

import WarehouseNameBar from './WarehouseNameBar';
import WarehouseVehicleContainer from './WarehouseVehicleContainer';

const Warehouse = () => {
    const warehouses: IWarehouse[] = useSelector(
        (state: RootState) => state.warehouses,
    );

    return (
        <div>
            {warehouses.map(warehouse => {
                console.log(warehouse.cars.vehicles);
                return (
                    <div key={warehouse._id}>
                        <WarehouseNameBar warehouse={warehouse.name} />
                        <WarehouseVehicleContainer
                            vehicles={warehouse.cars.vehicles}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Warehouse;
