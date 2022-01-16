import React from 'react';
import '../styles/pin_styles.css';

function Pin() {
    return (
        <div>
            <input type='file' name='picture' id='picture' value='' />
            
            <div className='card'>
                <div className='pin_title'></div>

                <div className='pin_modal'>

                </div>

                <div className='pin_image'>
                    <img src='' alt='pin_image' />
                </div>
            </div>
        </div>
    )
}

export default Pin;