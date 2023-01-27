import React from 'react'
import { Input } from '../components/Input';
const logo =  require('../images/logo.jpg');
const pablo =  require('../images/pablo.jpg');

export const Login: React.FC<{}> = ({}) => {
        return (
            <div className='login'>
                <div className='login__header'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='login__body'>
                    <img src={pablo}  alt='pablo' className='login__body__image'/>
                    <form className='login__form'>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                        <Input type='email' placeholder='Email'/>
                        <Input type='password' placeholder='Password'/>
                        <p className='forgot_password'>Forgot Password ?</p>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        );
}