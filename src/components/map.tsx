import mapboxgl from 'mapbox-gl';
import { useEffect, useState } from 'react';
import bus from '../svg/bus-solid.svg'
import taxi from '../svg/taxi-solid.svg'
import 'mapbox-gl/dist/mapbox-gl.css'


const data = [{ "coords": [-79.19941948695270, -3.9873904285577377] },
{ "coords": [-79.20022261279688, -3.9975011184782288] },
{ "coords": [-79.20064002011549, -3.9766535017870956] },
{ "coords": [-79.20759680950445, -3.9779027081044394] },
{ "coords": [-79.20481409373158, -3.989617394839942] }]

interface Props {
    icon: 'bus' | 'taxi'
}

export const ServiceMap = (props: Props) => {

    let map: mapboxgl.Map | null = null;
    const [currentIcon, setCurrentIcon] = useState<'bus' | 'taxi'>(props.icon)

    const handleChangeIcon = (currentIcon: string) => {
        if (currentIcon == 'bus') {
            setCurrentIcon('taxi')
            console.log(currentIcon)
        }
        if (currentIcon == 'taxi') {
            setCurrentIcon('bus')
            console.log(currentIcon)
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
        data.map((d) => {
            const el = document.createElement('div');
            el.className = 'marker'
            el.style.backgroundImage = (currentIcon == 'bus') ? `url(${bus})` : `url(${taxi})`
            el.style.width = '30px'
            el.style.height = '30px'
            el.style.backgroundSize = '100%'
            map && new mapboxgl.Marker({ element: el }).setLngLat([d.coords[0], d.coords[1]])
                .addTo(map);
        });
        return () => {
            if (map) map.remove();
        }
    }, [currentIcon])

    return (
        <>
            Click para cambiar de transporte: <button onClick={() => handleChangeIcon(currentIcon)}>Visualizar : {currentIcon}</button>
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
    width: '1600px',
    height: '500px',
    position: 'relative',
    borderRadius: '5px'
} as const)

//edit svg
// https://mediamodifier.com/svg-editor#