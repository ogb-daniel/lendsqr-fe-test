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
    const [active, setActive] = useState('General Details');  
    const [user, setUser] = useState<any>(null);  
    const localUserDetail = window.localStorage.getItem(selectedUserId)
   
    console.log(localUserDetail);
    
    useEffect(() => {
        const fetchUserDetail=async()=>{
            const response = await fetch(`http://localhost:8010/proxy/lendsqr/api/v1/users/${selectedUserId}`);
               const user = await response.json();
               console.log(user);
               window.localStorage.setItem(selectedUserId,JSON.stringify(user))
               setUser(user);
            }
            if(!localUserDetail){
                fetchUserDetail();
            }else{
                setUser(JSON.parse(localUserDetail))
            }
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
                            <p>{user.orgName}</p>
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
                        <span className={`${active === 'General Details' ? 'active' : ''}`} onClick={()=>setActive('General Details')}>General Details</span>
                        <span className={`${active === 'Documents' ? 'active' : ''}`} onClick={()=>setActive('Documents')}>Documents</span>
                        <span className={`${active === 'Bank Details' ? 'active' : ''}`} onClick={()=>setActive('Bank Details')}>Bank Details</span>
                        <span className={`${active === 'Loans' ? 'active' : ''}`} onClick={()=>setActive('Loans')}>Loans</span>
                        <span className={`${active === 'Savings' ? 'active' : ''}`} onClick={()=>setActive('Savings')}>Savings</span>
                        <span className={`${active === 'App and System' ? 'active' : ''}`} onClick={()=>setActive('App and System')}>App and System</span>
                    </div>
                </Card>
                }
                {
                       user  &&
                <RenderedDetail renderedId={active} user={user}/>
                }
             
               
            </div>
        );
}