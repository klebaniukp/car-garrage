import { AxiosService } from './AxiosService';
import { Warehouse } from '../interfaces';

export class WarehousesService {
    axiosService: AxiosService;
    constructor(axiosService: AxiosService) {
        this.axiosService = axiosService;
    }
    getWarehouses(): Promise<Warehouse[]> {
        const apiUrl = process.env.REACT_APP_BACKEND_URL_LOCAL as string;

        return Promise.all([
            this.fetchWarehouses(apiUrl + 'api/v1/warehouses'),
        ]).then((res) => {
            return res[0].warehouses;
        });
    }
    fetchWarehouses(url: string) {
        return this.axiosService.get(url).then((res) => {
            return res.data;
        });
    }
}
