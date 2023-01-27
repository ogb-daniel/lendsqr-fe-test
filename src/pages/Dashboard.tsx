import React from 'react'
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardMain } from '../components/DashboardMain';


export const Dashboard: React.FC<{}> = ({}) => {
        return (
            <div className='dashboard'>
                <DashboardHeader />
                <DashboardMain />
            </div>
        );
}