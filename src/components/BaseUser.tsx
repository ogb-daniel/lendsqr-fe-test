import React from 'react'

interface BaseUserProps {
    name:string;
    icon:any;
    amount:any;
}

export const BaseUser: React.FC<BaseUserProps> = ({name,icon,amount}) => {
        return (
            <div>
                 <img className='actionIcon' src={icon} alt="users" />
                <p className='actionName'>{name}</p>
                <span className='actionAmount'>{amount}</span>
            </div>
        );
}