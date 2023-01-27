import React, { useState } from 'react'
import { DashboardBody } from './DashboardBody';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardMainProps {

}

export const DashboardMain: React.FC<DashboardMainProps> = ({}) => {
    const [activeId, setActiveId] = useState('Users');    
    return (
            <div className='dashboard__main'>
                <DashboardSidebar setActive={setActiveId} active={activeId}/>
                <DashboardBody />
            </div>
        );
}