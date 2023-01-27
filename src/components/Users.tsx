import React ,{useEffect, useState} from 'react'
import { Card } from './Card';
import { Table } from './Table';
const card1 = require('../images/card1.png');
const card2 = require('../images/card2.png');
const card3 = require('../images/card3.png');
const card4 = require('../images/card4.png');
interface UsersProps {

}

export const Users: React.FC<UsersProps> = ({}) => {
    const [users, setUsers] = useState<Array<any>>([]);
    const [selectedId, setSelectedId] = useState(0);
    const [selectedUserId, setSelectedUserId] = useState();
    const [show, setShow] = useState<any>(); 
    let usersPerPage = 10;
    let renderedPage = selectedId * usersPerPage;
    const currentUsers = users.slice(renderedPage,renderedPage + usersPerPage);
    let amount = 0;
    useEffect(() => {
        const fetchUsers =async()=>{
           const response = await fetch('http://localhost:8010/proxy/lendsqr/api/v1/users');
            const users = await response.json();
            setUsers(users);
            console.log(users);
            
        }
        fetchUsers();

    }, [])
      function displayPageNumbers(){
        let elements = [];
        let pageCount = users.length / usersPerPage;
        for (let index = 0; index < pageCount; index++) {
           
               elements.push(<span>{index+1}</span>)
        }
        return elements
      }
        return (
            <div onClick={()=>setShow('')}>
<h1>Users</h1>
            <div className='card__container'>
            <Card name="users" icon={card1} amount={users.length}/>
            <Card name="active users" icon={card2} amount={users.length}/>
            <Card name="users with loans" icon={card3} amount="12,453"/>
            <Card name="users with savings" icon={card4} amount="102,453"/>
            </div>
            <Table show={show} setShow={setShow} users={users} currentUsers={currentUsers} selectedUserId={selectedUserId} setSelectedUserId={setSelectedUserId} />
            <div className='paginate'>
                <span>Showing 
                    <select name="amount" id="amount">
                        {
                           users.map((_,id)=>{
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