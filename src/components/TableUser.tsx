import moment from 'moment';
import React from 'react'
const more = require('../images/more.png');
interface TableUserProps {
    orgName:string;
    userName:string;
    email:string;
    phoneNumber:string;
    dateJoined:string;

}


export const TableUser: React.FC<TableUserProps> = ({orgName,userName,email,phoneNumber,dateJoined}) => {
        return (
            <div className='table__user'>
            <span>{orgName}</span>
            <span>{userName}</span>
            <span style={{gridColumn:'span 3'}}>{email}</span>
            <span>{phoneNumber}</span>
            <span>{moment.utc(dateJoined).format("MMM DD, YYYY LT").toString()}</span>
            <span className='hack'> <span className='pill'>Active</span>  <img src={more} alt="more" className='more'/></span>
          </div>
        );
}