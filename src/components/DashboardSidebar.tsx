import React from 'react'
import { businesses, customers, settings } from '../helper';
import { DashboardListItem } from './DashboardListItem';
const downArrow =  require('../images/downArrow.png');
const briefcase =  require('../images/briefcase.png');
const signOut =  require('../images/signout.png');
interface DashboardSidebarProps {
    active:string;
    setActive:React.Dispatch<React.SetStateAction<string>>;
}


export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({active,setActive}) => {
        return (
            <div className='dashboard__main__sidebar'>
                <li className='list-item'>
                <img src={briefcase} alt="briefcase" />
                <span>Switch Organization </span>
                <img src={downArrow} alt="down" />
                </li>
                
                <DashboardListItem name='Dashboard' icon={briefcase} active={active === 'Dashboard'} setActive={setActive} />
                    <p className='header'>Customers</p>
    
                    {
                        customers.map(({name,icon},id)=>{
                            if(active === name){
                                return (

                                    <DashboardListItem name={name} icon={icon} active={true} key={id}/>
                                    )
                                }
                               return <DashboardListItem name={name} icon={icon} key={id} setActive={setActive}/>
                        }
                    )
                    }
   
                    <p className='header'>Businesses</p>
                    {
                        businesses.map(({name,icon},id)=>{
                            if(active === name){
                                return (

                                    <DashboardListItem key={id} name={name} icon={icon} active={true} />
                                    )
                                }
                               return <DashboardListItem key={id} name={name} icon={icon} setActive={setActive}/>
                        }
                    )
                    }
             
      
                    <p className='header'>Settings</p>
                    {
                        settings.map(({name,icon},id)=>{
                            if(active === name){
                                return (

                                    <DashboardListItem name={name} key={id} icon={icon} active={true} />
                                    )
                                }
                               return <DashboardListItem key={id} name={name} icon={icon} setActive={setActive}/>
                        }
                    )
                    }

                   
                    <li  className='list-item footer'>
                        <img src={signOut} alt="signout" />
                        <span>Logout</span>
                    </li>

                    <li className='list-item'>v1.2.0</li>


          
            </div>
        );
}