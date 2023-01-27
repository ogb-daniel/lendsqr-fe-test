import React from 'react'

interface CardProps {
    name:string;
    icon:any;
    amount:any;
}

export const Card: React.FC<CardProps> = ({name,icon,amount}) => {
        return (
            <div className='card'>
                <img src={icon} alt="users" />
                <p>{name}</p>
                <span>{amount}</span>
            </div>
        );
}