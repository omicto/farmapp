import React from 'react';
import { Link } from 'react-router-dom';



const LinkMessage = ({ to, onClick, text }) => {

    const getTime = () => {
        const [hours, minutes,] = new Date().toTimeString().split(' ')[0].split(':');
        return `${hours > 12 ? `0${hours % 12}` : hours}:${minutes}`;
    }
    return (
        <div className="rcw-response">
            <div className="rcw-message-text">
                <Link to={to} onClick={onClick}>
                    {text}
                </Link>
            </div>
            <span className="rcw-timestamp">
                {getTime()}
            </span>
        </div>
    )
}

export default LinkMessage;