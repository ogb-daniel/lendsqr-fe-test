import React , {ChangeEvent, useState,SyntheticEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
const logo =  require('../images/logo.jpg');
const pablo =  require('../images/pablo.jpg');

export const Login: React.FC<{}> = ({}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const login =(e:SyntheticEvent)=>{
        e.preventDefault();
        if (!email && !password) {
            setError('Enter your email and password')
            return;
        }
        if(!email){
            setError("Enter your email")
            return;
        }

        if(!password){
            setError("Enter your password")
            return;
        }
            navigate('/dashboard')
        
    }
        return (
            <div className='login'>
                <div className='login__header'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='login__body'>
                    <img src={pablo}  alt='pablo' className='login__body__image'/>
                    <form className='login__form' onSubmit={login}>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                        {error && <span style={{color:'red'}}>{error}</span>}
                        <Input value={email} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                            if(error){
                                setError("")
                            }
                            setEmail(e.target.value);
                        }} type='email' placeholder='Email'/>
                        <Input value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                           if(error){
                            setError("")
                        }
                           setPassword(e.target.value)
                        }} type='password' placeholder='Password'/>
                        <p className='forgot_password'>Forgot Password ?</p>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
        );
}