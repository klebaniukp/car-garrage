export interface Warehouse {
    _id: string;
    name: string;
    location: Location;
    cars: {
        location: string;
        vehicles: Car[];
    };
}

export interface Location {
    lat: string;
    long: string;
}

export interface Car {
    _id: number;
    make: string;
    model: string;
    year_model: number;
    price: number;
    licensed: boolean;
    date_added: string;
}

export interface ActiveCar {
    _id: number;
    make: string;
    model: string;
    year_model: number;
    price: number;
    licensed: boolean;
    date_added: string;
    location: Location;
    warehouseName: string;
}

export interface DefaultProps {
    center: { lat: number; lng: number };
    zoom: number;
    key: string;
}
