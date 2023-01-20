import mapboxgl from 'mapbox-gl';
import { useEffect, useState } from 'react';
import bus from '../svg/bus-solid.svg'
import taxi from '../svg/taxi-solid.svg'
import 'mapbox-gl/dist/mapbox-gl.css'
import { fetchDataBus, fetchDataTaxi } from '../utils/fecth';


interface Props {
    icon: 'bus' | 'taxi'
}

export const ServiceMap = (props: Props) => {

    let map: mapboxgl.Map | null = null;
    const [currentIcon, setCurrentIcon] = useState<'bus' | 'taxi'>(props.icon)
    const [value, setValue] = useState<boolean>(true)

    const handleChangeIcon = (currentIcon: string) => {
        if (currentIcon === 'bus') {
            setValue(false)
            setCurrentIcon('taxi')
        }
        if (currentIcon === 'taxi') {
            setValue(false)
            setCurrentIcon('bus')
        }

    }


    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRhYWMiLCJhIjoiY2xjdHkyb2JxMDNnMDN2czVkdzJkbGpqayJ9.h9kw0S8xqW20zE1z72z-Pw';
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-79.19941948695276, -3.9873904285577377],
            zoom: 14,
            interactive: true,
        });
        if (value === true) {
            fetchDataBus().then(data => {
                for (let i = 0; i < data.length; i++) {
                    const el = document.createElement('div');
                    el.className = 'marker'
                    el.style.backgroundImage = `url(${bus})`
                    el.style.width = '35px'
                    el.style.height = '35px'
                    el.style.backgroundSize = '100%'
                    map && new mapboxgl.Marker({ element: el }).setLngLat([data[i].coords[0], data[i].coords[1]])
                        .addTo(map);
                }
            })
        }
        if (currentIcon === 'bus') {
            fetchDataBus().then(data => {
                for (let i = 0; i < data.length; i++) {
                    const el = document.createElement('div');
                    el.className = 'marker'
                    el.style.backgroundImage = `url(${bus})`
                    el.style.width = '35px'
                    el.style.height = '35px'
                    el.style.backgroundSize = '100%'
                    map && new mapboxgl.Marker({ element: el }).setLngLat([data[i].coords[0], data[i].coords[1]])
                        .addTo(map);
                }
            })
        }
        if (currentIcon === 'taxi') {

            fetchDataTaxi().then(data => {
                for (let i = 0; i < data.length; i++) {
                    const el = document.createElement('div');
                    el.className = 'marker'
                    el.style.backgroundImage = `url(${taxi})`
                    el.style.width = '35px'
                    el.style.height = '35px'
                    el.style.backgroundSize = '100%'
                    map && new mapboxgl.Marker({ element: el }).setLngLat([data[i].coords[0], data[i].coords[1]])
                        .addTo(map);
                }
            })
        }

        return () => {
            if (map) map.remove();
        }
    }, [currentIcon])

    return (
        <>
            <div className="alert alert-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="alert">
                Click para cambiar de transporte: &emsp;
                <button type="button" className="btn btn-primary btn-lg active" onClick={() => handleChangeIcon(currentIcon)}> K-{currentIcon.toUpperCase()}</button>
            </div>
            <div className="div-container" style={mapContainerStyle()}>
                <div id='map' style={{ width: '100%', height: '100%', position: 'absolute', borderRadius: '5px', overflow: 'hidden' }}></div>
            </div>
        </>
    );
}

const mapContainerStyle = () => ({
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    textAlign: 'center',
    margin: '40px',
    width: '1255px',
    height: '500px',
    position: 'relative',
    borderRadius: '5px'
} as const)

//edit svg
// https://mediamodifier.com/svg-editor#