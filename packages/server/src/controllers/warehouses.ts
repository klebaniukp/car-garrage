import { Request, Response } from 'express';
import { Car } from '../interfaces';
import { warehouses } from '../resources/warehouses';

export const warehousesController = (req: Request, res: Response) => {
    warehouses.forEach((warehouse) => {
        sortVehicles(warehouse.cars.vehicles);
    });

    res.status(200).json({ warehouses: warehouses });
};

const sortVehicles = (array: Car[]) => {
    array.sort((a, b) => {
        if (a.date_added < b.date_added) {
            return -1;
        } else if (a.date_added > b.date_added) {
            return 1;
        } else {
            return 0;
        }
    });

    return array;
};
