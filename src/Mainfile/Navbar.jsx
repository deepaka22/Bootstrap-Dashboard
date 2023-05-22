import './Navbar.css';

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';



const Navbar = ()=>{

    
    return (
        
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id='nav-bg'>
  <div class="container-fluid " id='nav-bg'>
    
    <div className='naving-items' >
    <form class="d-flex" role="search">
        <input class="form-control " type="search" placeholder="Search for... " aria-label="Search " id='input-bg'/>
        <button id="searchIcon" type="submit"> <SearchIcon  /></button>
    </form>
    </div>
    
      <ul class="navbar-nav mb-2 mb-lg-0  " className='ul-elements'>
        <li >
        <IconButton
          size="large"
          aria-label="show 3+ new notifications"
          color="inherit"
        >
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        </li>
        <li>
        <IconButton  size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={7} color="error">
            <MailIcon />
          </Badge>
        </IconButton></li>
        <li id='im-dp'>

        <IconButton  size="large" color="inherit" sx={{ p: 0 }} >
        <Avatar alt="" src="/static/images/avatar/2.jpg" />
        </IconButton></li>    
        
        
         </ul>  
    
        </div>
    
  
</nav>
        )
}

export default Navbar;