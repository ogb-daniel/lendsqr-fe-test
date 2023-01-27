import React from 'react'
import { TableUser } from './TableUser';
import ReactPaginate from 'react-paginate';
import { TableUsers } from './TableUsers';
import { PaginatedView } from './PaginatedView';
const filter = require('../images/filter.png');

interface TableProps {
    users:Array<any>;
    currentUsers:Array<any>;
    selectedUserId:any;
    setSelectedUserId:any;
    show:any;
    setShow:any;
}

export const Table: React.FC<TableProps> = ({show,setShow,users,currentUsers,selectedUserId,setSelectedUserId}) => {
        return (
            <div className='table'>
                <div className='table__header'>
                    <span className='header' >organization <img src={filter} alt="filter" /></span>
                    <span className='header'>username <img src={filter} alt="filter" /></span>
                    <span className='header' style={{gridColumn:'span 3'}}>email <img src={filter} alt="filter" /></span>
                    <span className='header'>phone number <img src={filter} alt="filter" /></span>
                    <span className='header'>date joined <img src={filter} alt="filter" /></span>
                    <span className='header'>status <img src={filter} alt="filter" /></span>
                  
                </div>
              <PaginatedView show={show} setShow={setShow} currentUsers={currentUsers} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId}/>
                   
            </div>
        );
}