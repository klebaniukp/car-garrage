import React from 'react';

const WarehouseDataSideBar = (props: { carName: string }) => {
    return (
        <div style={{ width: '25vw' }}>
            <h3 className='text-center border-bottom'>{props.carName}</h3>
        </div>
    );
};

export default WarehouseDataSideBar;
