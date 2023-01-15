import mapboxgl from 'mapbox-gl';
import React from 'react';
import bus from '../svg/bus-solid.svg'

export class ServiceMap extends React.Component {
  map: mapboxgl.Map | null = null;
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRhYWMiLCJhIjoiY2xjdHkyb2JxMDNnMDN2czVkdzJkbGpqayJ9.h9kw0S8xqW20zE1z72z-Pw';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-79.19941948695276 , -3.9873904285577377],
            zoom: 14
        });
        
        this.map.on('load', () => {
            if (this.map) {
                const el = document.createElement('img');
                // el.innerHTML = `<i class="fa-solid fa-bus"></i>`
                el.style.position = 'absolute'
                el.style.width = `15px`
                el.style.height = `15px`
                el.style.color ='blue'
                el.src = `${bus}`
                // el.style.backgroundImage = `url(${bus})`

                const marker = new mapboxgl.Marker(el).setLngLat([-79.19941948695276, -3.9873904285577377])
                .addTo(this.map);
            }
        });
    }

    componentWillUnmount() {
        if(this.map) this.map.remove();
    }

    render() {
        return (
            <div className="div-container" style={mapContainerStyle()}>
                <div id='map' style={{width: '100%', height: '100%', position: 'absolute', borderRadius:'5px', overflow: 'hidden'}}></div>
            </div>
        );
    }
}
const mapContainerStyle = () => ({ 
  boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' ,
  textAlign:'center',
  margin: '40px',
  width: '1600px', 
  height: '500px',
   position: 'relative',
   borderRadius:'5px'
} as const)

