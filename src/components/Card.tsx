import React from 'react'

interface CardProps {
   children:any;
   extra?:string;
}

export const Card: React.FC<CardProps> = ({children,extra}) => {
        return (
            <div className={`card ${extra ? extra : ''}`}>
               {children}
            </div>
        );
}