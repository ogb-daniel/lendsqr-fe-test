import React, {useState} from 'react'
import { TableUsers } from './TableUsers';

interface PaginatedViewProps {
    currentUsers:Array<any>;
    selectedUserId:any;
    setSelectedUserId:any;
    show:any;
    setShow:any;
}

export const PaginatedView: React.FC<PaginatedViewProps> = ({show,setShow,selectedUserId,setSelectedUserId,currentUsers}) => {
   
    return (<>
 
    {
          currentUsers &&
      <TableUsers show={show} setShow={setShow} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} currentUsers={currentUsers}/>
      }
    </>
        );
}