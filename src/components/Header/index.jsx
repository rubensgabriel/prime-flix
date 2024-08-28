import './header.css';
import { BsStarFill, BsHouseDoorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link className='logo' to='/'>Primeflix</Link>
            <div className='links'>
                <Link className='home' to='/'><BsHouseDoorFill/><span>INÍCIO</span></Link>
                <Link className='favoritos' to='/favoritos'><BsStarFill/><span>FAVORITOS</span></Link>
            </div>
            
        </header>
    )
}

export default Header;