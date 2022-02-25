export interface Warehouse {
    _id: string;
    name: string;
    location: Location;
    cars: {
        location: string;
        vehicles: Car[];
    };
}

interface Location {
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
