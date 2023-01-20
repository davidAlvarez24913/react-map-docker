import axios from 'axios';

interface Bus{
    placa: string
    coords: number[];
    kilometraje: number
}
interface Taxi{
    placa: string
    coords: number[];
    kilometraje: number
}
export const fetchDataBus = () => {
    const response =  axios.get('http://127.0.0.1:8000/buses').then(data => JSON.stringify(data.data))
    const result = response.then( data => JSON.parse(data)).catch( e => e)
    return result
}  
export const fetchDataTaxi =  () => {
    const response =  axios.get('http://127.0.0.1:8000/taxis').then(data => JSON.stringify(data.data))
    const result = response.then( data => JSON.parse(data)).catch( e => e)
    return result
}  