import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
export const Header = () => {
  return (
    <div>
        <ul>
            <li id="title">
            <i class="fas fa-home"></i> 
            CovidStat
            </li>
            <li>
           <Link to="/countries" style={{color:'white',textDecoration:'none'}}> Countries </Link>
           </li> 
            <li>
           <Link to="/reports" style={{color:'white',textDecoration:'none'}}> Reports </Link>
           </li> 
           <li>
           <Link to="/CovidStat-ReactApp" style={{color:'white',textDecoration:'none'}}> Home </Link>
           </li> 
        </ul>
    </div>
  )
}

export default Header;