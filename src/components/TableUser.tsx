import moment from 'moment';
import React, { useState } from 'react'
const more = require('../images/more.png');
const viewDetails = require('../images/eye.png');
const blacklist = require('../images/blacklist.png');
const activate = require('../images/activate.png');
interface TableUserProps {
    orgName:string;
    userName:string;
    email:string;
    phoneNumber:string;
    dateJoined:string;
    id:string;
    setSelectedUserId:any;
    show?:any;
    setShow?:any;
}


export const TableUser: React.FC<TableUserProps> = ({setShow,show=false,setSelectedUserId,id,orgName,userName,email,phoneNumber,dateJoined}) => {
  return (
            <div className='table__user' >
            <span>{orgName}</span>
            <span>{userName}</span>
            <span style={{gridColumn:'span 3'}}>{email}</span>
            <span>{phoneNumber}</span>
            <span>{moment.utc(dateJoined).format("MMM DD, YYYY LT").toString()}</span>
            <span className='hack'> <span className='pill'>Active</span>
              <img onClick={(e)=>{
                setShow(id);
                e.stopPropagation();
              }} src={more} alt="more" className='more'/> 
            {
              show &&
              <div className='modal'>
                <div onClick={(e)=>{
                  setSelectedUserId(id)
                  e.stopPropagation()
                }}><img src={viewDetails} alt="eye" />View Details</div>
                <div><img src={blacklist} alt="blacklist" />Blacklist User</div>
                <div><img src={activate} alt="activate" />Activate User</div>
              </div>
            }
              </span>
          </div>
        );
}