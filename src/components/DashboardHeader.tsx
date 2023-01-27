import React from 'react'
import { Input } from './Input';
const logo =  require('../images/logo.jpg');
const avatar =  require('../images/avatar.jpg');
const bell =  require('../images/bell.png');
const down =  require('../images/down.png');
interface DashboardHeaderProps {

}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({}) => {
        return (
            <div className='dashboard__header'>
                <img src={logo} alt="logo" />
                <Input placeholder='Search for anything' type='text' search={true} />
                <div className='dashboard__header__right'>
                    <li className='docs'><a href="#">Docs</a></li>
                    <img className='bell' src={bell} alt="notifications" />
                    <div className='profile'>
                        <img className='profile__avatar' src={avatar} alt='avatar' />
                        <div className='profile__name'>
                            <span> <span>Adedeji</span> <img src={down} alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        );
}