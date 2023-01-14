import {Map} from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';


export const ServiceMap =()=>{
    
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRhYWMiLCJhIjoiY2xjdHkyb2JxMDNnMDN2czVkdzJkbGpqayJ9.h9kw0S8xqW20zE1z72z-Pw';
      const lati = () =>{
        return navigator.geolocation.getCurrentPosition(({coords})=>{return(coords.latitude.toString())}) as unknown as number
      }
  const long =() =>{ return navigator.geolocation.getCurrentPosition(({coords})=>{return(coords.longitude)}) as unknown as number} 

  // dddd
  useEffect(() =>{
    const map = new Map({
    container: 'map' , // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [long() , lati()], // starting position [lng, lat]
    zoom: 14, // starting zoom
    });
  })
    return (
        <>
        <div className="map-container">
            <div  id='map' style={{width: '400px', height: '300px'}}></div>
        </div>
        </>
    )
}