import { AxiosInstance, AxiosStatic } from 'axios';

export class AxiosService {
    axios: AxiosInstance;
    constructor(axios: AxiosStatic) {
        this.axios = axios.create();
    }
    get(url: string) {
        return this.axios.get(url);
    }
}
