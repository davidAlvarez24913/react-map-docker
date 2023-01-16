import { useState } from 'react';
import { ServiceMap } from './map';

export default function InteractiveMap() {

    return (
        <div>
            <div className="buttons" style={buttonsStyle}>
            </div>

            <ServiceMap icon={'bus'} />
        </div>
    )
}
const buttonsStyle = {
    display: 'flex',
    justifyContent: 'center'
}
