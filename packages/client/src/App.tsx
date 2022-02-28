import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AxiosService } from './services/AxiosService';
import { WarehousesService } from './services/WarehousesService';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        const warehousesService = new WarehousesService(
            new AxiosService(axios)
        );

        warehousesService.getWarehouses().then((warehouses) => {
            dispatch({ type: 'SET_WAREHOUSES', payload: warehouses });
        });
    }, [dispatch]);

    return (
        <div>
            <div>App</div>
        </div>
    );
}

export default App;
