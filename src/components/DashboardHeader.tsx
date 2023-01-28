import React, {useState,ChangeEvent} from 'react'
import { Input } from './Input';
const logo =  require('../images/logo.jpg');
const avatar =  require('../images/avatar.jpg');
const bell =  require('../images/bell.png');
const down =  require('../images/down.png');
interface DashboardHeaderProps {

}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({}) => {
    const [search, setSearch] = useState(""); 
    
    return (
            <div className='dashboard__header'>
                 <div className="menu-btn">
            <span className="menu-btn__burger"></span>
        </div>
                <img src={logo} alt="logo" />
                <Input value={search} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                    setSearch(e.target.value)
                }} className="nav" placeholder='Search for anything' type='text' search={true} />
                <div className='nav dashboard__header__right'>
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