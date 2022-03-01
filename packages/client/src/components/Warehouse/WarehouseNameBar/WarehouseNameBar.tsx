import React from 'react';

const WarehouseNameBar = (props: { warehouse: string }) => {
    return (
        <div className='bg-light' style={{ width: '75vw' }}>
            <h3>{props.warehouse}</h3>
        </div>
    );
};

export default WarehouseNameBar;
