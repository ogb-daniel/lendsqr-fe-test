import React ,{ useRef,useState} from 'react'
const searchIcon = require('../images/search.png')
interface InputProps {
    type:string;
    placeholder:string;
    search?:boolean;
    value:any;
    onChange:any;
    className?:any;
}



export const Input: React.FC<InputProps> = ({className,value,onChange,type,placeholder,search}) => {
    const ref = useRef<HTMLInputElement>(null);    
    const [showPass,setShowPass] = useState(false);
    
    const handleShowPassword=()=>{
        if (!showPass) {
            ref.current!.type = 'string' 
            setShowPass(true);
        }else{
            ref.current!.type = 'password' 
            setShowPass(false);
        }
    }
    return (
            <div className={`input_container ${className}`}>
                
                <input value={value} onChange={onChange} className={`input ${type === 'password' || search ? 'show_bar' : ""} `} ref={ref} type={type} placeholder={placeholder} />
                {type === 'password' && <span onClick={handleShowPassword}>{showPass ? "HIDE" : 'SHOW'}</span>}
                
                {search && <div className='search'><img src={searchIcon} alt="search" /></div>}
            </div>
        );
}