import React from 'react';

const Card = (props) => {
    return (
        <div 
            style={{
                ...styles.pin,
                ...styles[props.size]
            }}
        >
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'green'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Card;