import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { Table } from './Table';
import { Users } from './Users';
const card1 = require('../images/card1.png');
const card2 = require('../images/card2.png');
const card3 = require('../images/card3.png');
const card4 = require('../images/card4.png');
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