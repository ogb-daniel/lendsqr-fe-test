import React from 'react'
import { TableUser } from './TableUser';

interface TableUsersProps {
    currentUsers:Array<any>;
}

export const TableUsers: React.FC<TableUsersProps> = ({currentUsers}) => {
        return (
            <>
            {
                currentUsers && 
                currentUsers.map((user)=>(
                    <TableUser orgName={user.orgName} userName={user.userName} phoneNumber={user.phoneNumber} email={user.email} dateJoined={user.createdAt} />
                ))
            }
            </>
        );
}