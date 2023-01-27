import React, { useEffect, useState } from 'react'
import { BaseUser } from './BaseUser';
import { Card } from './Card';
import { Table } from './Table';
const card1 = require('../images/card1.png');
const card2 = require('../images/card2.png');
const card3 = require('../images/card3.png');
const card4 = require('../images/card4.png');
interface UsersScreenProps {
    users:any;
    setUsers:any;
    setSelectedUserId:any;
    selectedUserId:any;
}

export const UsersScreen: React.FC<UsersScreenProps> = ({selectedUserId,users,setUsers,setSelectedUserId}) => {
    const [selectedId, setSelectedId] = useState(0);
    const [show, setShow] = useState<any>(); 

    let isLoading = true;

    if(users.length > 0){
        isLoading = false;
    }
    let usersPerPage = 10;
    let amount = 0;
    let renderedPage = selectedId * usersPerPage;
    const currentUsers = users.slice(renderedPage,renderedPage + usersPerPage);

    function displayPageNumbers(){
        let elements = [];
        let pageCount = users.length / usersPerPage;
        for (let index = 0; index < pageCount; index++) {
           
               elements.push(<span>{index+1}</span>)
        }
        return elements
      }   
      useEffect(() => {
        const fetchUsers =async()=>{
           const response = await fetch('http://localhost:8010/proxy/lendsqr/api/v1/users');
            const users = await response.json();
            setUsers(users);
            console.log(users);
      
        }
        fetchUsers();

    }, [])
    return (
            <div onClick={()=>setShow('')}>
            <h1>Users</h1>
                        <div className='card__container'>
                        <Card>
                            <BaseUser name="users" icon={card1} amount={users.length} />
                            </Card> 
                        <Card>
                            <BaseUser name="active users" icon={card2} amount={users.length} />
                            </Card> 
                        <Card>
                            <BaseUser name="users with loans" icon={card3} amount="12,453" />
                            </Card> 
                        <Card>
                            <BaseUser name="users with savings" icon={card4} amount="102,453" />
                            </Card> 
                     
                        </div>
                        <Table isLoading={isLoading} show={show} setShow={setShow} users={users} currentUsers={currentUsers} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
                        <div className='paginate'>
                            <span>Showing 
                                <select name="amount" id="amount">
                                    {
                                       users.map((_: any,id: React.Key | null | undefined)=>{
                                        amount += 1;
                                        
                                        return(
                                            <option key={id} selected={users.length === amount} value={amount}>{amount}</option>
                                        )
                                       })
                                    }
                                </select>
                                 out of {users.length}</span>
                            <div className='page_count'>
                                <button className={`prev `} disabled={selectedId === 0} onClick={()=>setSelectedId(selectedId - 1)}>
                                    <div className={`${selectedId === 0 ? "disabled" : ""}`}></div>
                                    <div className={`${selectedId === 0 ? "disabled" : ""}`}></div>
                                </button>
                                    {displayPageNumbers().map((el,id)=>{
                                        return(
                                            
                                            <span onClick={()=>{
                                                setSelectedId(id)
                                            }} key={id} className={`${id === selectedId ? 'selectedPage' : ''}`} style={{marginLeft:'20px'}}>
                                                {el}
                                            </span>
                                        )
                                    }
                                    )}
                                <button className={`next `} disabled={selectedId+1 === users.length / usersPerPage} onClick={()=>setSelectedId(selectedId + 1)}>
                                <div className={`${selectedId+1 === users.length / usersPerPage ? 'disabled':""}`}></div>
                                <div className={`${selectedId+1 === users.length / usersPerPage ? 'disabled':""}`}></div>
            
            
                                </button>
                            </div>
                        </div>
                        </div>
        );
}