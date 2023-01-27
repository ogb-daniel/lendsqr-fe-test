import React from 'react'

interface DashboardListItemProps {
    name:string;
    icon:any;
    active?:boolean;
    setActive?:any;
}

export const DashboardListItem: React.FC<DashboardListItemProps> = ({name,icon,active=false,setActive}) => {   
    return (
            <li onClick={()=>setActive(name)} className={`list-item ${active ? 'active' :''}`}>
            <img src={icon} alt="home" />
            <span>{name}</span>
            </li>
        );
}