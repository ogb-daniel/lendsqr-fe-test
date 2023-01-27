import React from 'react'
import { Users } from './Users';
interface DashboardBodyProps {
    activeScreen:string;
}


export const DashboardBody: React.FC<DashboardBodyProps> = ({activeScreen}) => {
    let dashBody:any = <h1>{activeScreen}</h1>;
if (activeScreen === 'Users') {
    dashBody = <Users />    
}
    return (
            <div className='dashboard__main__body'>
               {dashBody}
            </div>
        );
}