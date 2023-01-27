import React ,{useEffect, useState} from 'react'
import { UserDetail } from './UserDetail';

import { UsersScreen } from './UsersScreen';

interface UsersProps {

}

export const Users: React.FC<UsersProps> = ({}) => {
    const [users, setUsers] = useState<Array<any>>([]);
    
    const [selectedUserId, setSelectedUserId] = useState();
    
    let renderedPage = <UsersScreen selectedUserId={selectedUserId} users={users} setUsers={setUsers} setSelectedUserId={setSelectedUserId} />
  if(selectedUserId){
    renderedPage = <UserDetail setSelectedUserId={setSelectedUserId} selectedUserId={selectedUserId}/>
  }
        return (
            <div>
                {renderedPage}
            </div>
           
            
        );
}