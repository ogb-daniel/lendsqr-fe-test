import React ,{ useRef,useState} from 'react'
const searchIcon = require('../images/search.png')
interface InputProps {
    type:string;
    placeholder:string;
    search?:boolean;

}



export const Input: React.FC<InputProps> = ({type,placeholder,search}) => {
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
            <div className={`input_container`}>
                
                <input className={`input ${type === 'password' || search ? 'show_bar' : ""} `} ref={ref} type={type} placeholder={placeholder} />
                {type === 'password' && <span onClick={handleShowPassword}>SHOW</span>}
                
                {search && <div className='search'><img src={searchIcon} alt="search" /></div>}
            </div>
        );
}