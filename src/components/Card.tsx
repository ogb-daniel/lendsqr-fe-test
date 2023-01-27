import React from 'react'

interface CardProps {
    name:string;
    icon:any;
}

export const Card: React.FC<CardProps> = ({name,icon}) => {
        return (
            <div className='card'>
                <img src={icon} alt="users" />
                <p>{name}</p>
                <span>2,453</span>
            </div>
        );
}