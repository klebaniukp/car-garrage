import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AxiosService } from './services/AxiosService';
import { WarehousesService } from './services/WarehousesService';

import Warehouse from './components/Warehouse';
import WarehouseDataSideBar from './components/Warehouse/WarehouseDataSideBar';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const warehousesService = new WarehousesService(
            new AxiosService(axios),
        );

        warehousesService.getWarehouses().then(warehouses => {
            dispatch({ type: 'SET_WAREHOUSES', payload: warehouses });
        });
    }, [dispatch]);

    return (
        <div className='d-flex flex-row'>
            <div
                style={{ width: '75vw', height: '100vh' }}
                className='overflow-scroll'>
                <Warehouse />
            </div>
            <div
                style={{ width: '25vw', height: '100vh' }}
                className='float-end'>
                <WarehouseDataSideBar carName={'Toyota'} />
            </div>
        </div>
    );
}

export default App;
