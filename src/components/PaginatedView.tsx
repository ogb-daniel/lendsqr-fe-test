import React from 'react'
import { TableUsers } from './TableUsers';

interface PaginatedViewProps {
    currentUsers:Array<any>;
}

export const PaginatedView: React.FC<PaginatedViewProps> = ({currentUsers}) => {
       
    return (<>
    
    {
          currentUsers &&
      <TableUsers currentUsers={currentUsers}/>
      }
    </>
        );
}