import React from 'react';
import '../styles.css';
import Card from './Card';

const PinterestLayout = () => {
    return (
        <div style={styles.pin_container}>
            <Card size='small' />            
            <Card size='medium'/>
            <Card size='large'/>
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: 'black',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center'
    }
}

export default PinterestLayout;
