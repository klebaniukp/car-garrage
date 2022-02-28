import React from 'react';

export const WarehouseNameBar = (props: { warehouse: string }) => {
    return (
        <div>
            <h3>{props.warehouse}</h3>
        </div>
    );
};
