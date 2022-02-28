import React from 'react';
import axios from 'axios';
import { AxiosService } from './services/AxiosService';
import { WarehousesService } from './services/WarehousesService';

function App() {
    React.useEffect(() => {
        const warehousesService = new WarehousesService(
            new AxiosService(axios)
        );

        warehousesService.getWarehouses().then((warehouses) => {
            console.log(warehouses);
        });
    }, []);
    return (
        <div>
            <div>App</div>
        </div>
    );
}

export default App;
