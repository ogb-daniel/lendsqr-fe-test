import React, { useEffect, useState } from 'react'
import { Card } from './Card';
import { RenderedDetail } from './RenderedDetail';
const back = require('../images/back.png');
const starFull = require('../images/starFull.png');
const starOut = require('../images/starOut.png');
// const user = require('../images/user.png');
interface UserDetailProps {
    selectedUserId:any;
    setSelectedUserId:any;
}

export const UserDetail: React.FC<UserDetailProps> = ({setSelectedUserId,selectedUserId}) => {
    const [active, setActive] = useState(0);  
    const [user, setUser] = useState<any>(null);  
    useEffect(() => {
        const fetchUserDetail=async()=>{

            const response = await fetch(`http://localhost:8010/proxy/lendsqr/api/v1/users/${selectedUserId}`);
               const user = await response.json();
               console.log(user);
               setUser(user);
            }
            fetchUserDetail();
    }, [])
     
    return (
            <div className='details'>
                <span onClick={()=>setSelectedUserId('')} className='back'><img src={back} alt="back" /> Back to Users</span>
                <div className='details__header'>
                <h1>User Details</h1>
                <div className='action_btns'>
                    <button className='btn blacklist'>Blacklist user</button>
                    <button className='btn activate'>Activate user</button>
                </div>
                </div>
                {
              
                    user &&
                    <Card extra='extra'>
                    <div className='details__user'>
                        <img className='details__user__avatar' src={user.profile.avatar} alt="user" />
                        <div>
                            <h3>{user.userName}</h3>
                            <p>aomapfaw</p>
                        </div>
                        <div>
                            <p>User's Tier</p>
                            <span>
                            <img src={starFull} alt="star" />
                            <img src={starOut} alt="star" />
                            <img src={starOut} alt="star" />
                            </span>
                        </div>
                        <div>
                            <h3>${user.accountBalance}</h3>
                            <p style={{fontSize:'12px'}}>{user.accountNumber}</p>
                        </div>
                    </div>

                    <div className='details__nav'>
                        <span className={`${active === 0 ? 'active' : ''}`} onClick={()=>setActive(0)}>General Details</span>
                        <span className={`${active === 1 ? 'active' : ''}`} onClick={()=>setActive(1)}>Documents</span>
                        <span className={`${active === 2 ? 'active' : ''}`} onClick={()=>setActive(2)}>Bank Details</span>
                        <span className={`${active === 3 ? 'active' : ''}`} onClick={()=>setActive(3)}>Loans</span>
                        <span className={`${active === 4 ? 'active' : ''}`} onClick={()=>setActive(4)}>Savings</span>
                        <span className={`${active === 5 ? 'active' : ''}`} onClick={()=>setActive(5)}>App and System</span>
                    </div>
                </Card>
                }
                {
                    user &&
                <RenderedDetail renderedId={active} user={user}/>
                }
             
               
            </div>
        );
}