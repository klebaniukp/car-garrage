import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ActiveCar as IActiveCar, DefaultProps } from '../../interfaces';

const Map = (props: { defaultProps: DefaultProps }) => {
    const { defaultProps } = props;

    const activeCar: IActiveCar = useSelector(
        (state: RootState) => state.activeCar,
    );

    const API_KEY = process.env.REACT_APP_API_KEY as string;

    const position = {
        lat: 0.1234,
        lng: 0.1234,
    };
    const { warehouseName } = activeCar;

    if (activeCar !== undefined) {
        console.log([activeCar.location.lat, activeCar.location.long]);
        position.lat = parseFloat(activeCar.location.lat);
        position.lng = parseFloat(activeCar.location.long);
    }

    return (
        <div
            style={{
                height: '35vh',
                width: '25vw',
                position: 'absolute',
                bottom: '0',
                right: '0',
            }}>
            <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals={true}
                bootstrapURLKeys={{ key: API_KEY }}>
                {warehouseName !== undefined ? (
                    <CarComp
                        text={warehouseName}
                        lat={position.lat}
                        lng={position.lng}
                    />
                ) : (
                    <CarComp
                        text={'warehouse name'}
                        lat={position.lat}
                        lng={position.lng}
                    />
                )}
            </GoogleMapReact>
        </div>
    );
};

export default Map;

const CarComp = (props: { lat: number; lng: number; text: string }) => {
    return (
        <>
            <b style={{ fontSize: '5vh', color: 'red', fontWeight: '1000' }}>
                *
            </b>
        </>
    );
};
