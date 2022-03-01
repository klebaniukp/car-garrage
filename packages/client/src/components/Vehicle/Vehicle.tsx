import React from 'react';
import { Car } from '../../interfaces';

const Vehicle = (props: { car: Car }) => {
    const { car } = props;

    return (
        <div className='card m-2' style={{ width: '16vw', height: '26.5vh' }}>
            <div className='card-header'>{car.make}</div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{car.model}</li>
                <li className='list-group-item'>{car.price}</li>
                <li className='list-group-item'>
                    licensed: {car.licensed.toString()}
                </li>
                <li className='list-group-item'>{car.date_added}</li>
            </ul>
        </div>
    );
};

export default Vehicle;
