import React from 'react';

const Disclaimer = ({text}) => {
    return (
        <div style={{
            backgroundColor: " #00897C",
            color: "white",
            height:"100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h2><strong>{text}</strong></h2>
        </div>
    )
}

export default Disclaimer;