import React, { useState } from 'react'
import { TableUser } from './TableUser';

interface TableUsersProps {
    currentUsers:Array<any>;
    selectedUserId:any;
    setSelectedUserId:any;
    show:any;
    setShow:any;
}

export const TableUsers: React.FC<TableUsersProps> = ({show,setShow,setSelectedUserId,currentUsers}) => {
     
    return (
            <>
            {
                currentUsers && 
                currentUsers.map((user)=>{
                    if(show === user.id){
                        return <TableUser show={true} setSelectedUserId={setSelectedUserId} key={user.id} id={user.id} orgName={user.orgName} userName={user.userName} phoneNumber={user.phoneNumber} email={user.email} dateJoined={user.createdAt} />
                    }
                    return <TableUser setShow={setShow} setSelectedUserId={setSelectedUserId} key={user.id} id={user.id} orgName={user.orgName} userName={user.userName} phoneNumber={user.phoneNumber} email={user.email} dateJoined={user.createdAt} />
})
            }
            </>
        );
}