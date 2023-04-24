import book from '../assets/book.svg';
import moon from '../assets/moon.svg';
import '../App.css'
import { useState } from 'react';
export const Header=({modeloFN}:any)=>{
    const [cor,setCor]=useState<boolean>(false);
    const handleClick=()=>{
       if(cor){
        setCor(false);
        modeloFN(cor);
       }else{
        setCor(true);
        modeloFN(cor)
       }
    }

    return <header>
        <div className='headerBook'>
            <img src={book} alt=""/>
        </div>
        <div>
            <div className='headerMoon' onClick={handleClick}>
            <img src={moon} alt="" />
            </div>
        </div>
    </header>
}