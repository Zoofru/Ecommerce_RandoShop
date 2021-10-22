import { Link } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useContext, useEffect } from "react";
import { UserContext } from '../context/usercontext';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CaLogin from "./calogin";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [ca, setCa] = useState(false)
    const { userState, fetchUser } = useContext(UserContext)
    const [user, setUser] = userState
    const [anchorEl, setAnchorEl] = useState(null)
    const openMenu = Boolean(anchorEl)

    const handleMenuClick = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleMenuClose = (e) => {
        setAnchorEl(null)
        console.log(e);
        if(e.target.childNodes[0].data === 'Logout') {
            localStorage.removeItem('uID')
            window.location.reload()
        }
    }

    const handleOpen = e => { 
        if(user) { 
            handleMenuClick(e)
        } else {
            setOpen(true)
        }
    }
    const handleClose = _ => { setOpen(false) }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        width: 300,
        outline: 'none',
    };

    const iconStyle = {
        fill: '#EB6123',
        transform: 'scale(2.0)',
        marginBottom: '0px',
        marginTop: '2px'
    }

    const usernameStyle = {
        color: 'white',
        marginBottom: '0px',
        marginTop: '0px'
    }

    useEffect(fetchUser, [])
    console.log(user);

    return (
        <div className='nav'>
            <div>
                <Link to='/' className='nameIconLink' style={{ 'textDecoration' : 'none'}}>
                    <h1 className='nameIcon'>RandoShop</h1>
                </Link>
            </div>
            <form className='navForm'>
                <input className='navInput' required spellCheck='false'></input>
            </form>
            <div className='accountNCart'>
                <div>
                    <AccountCircleIcon
                        className='iconH40p-active'
                        style={iconStyle}
                        onClick={handleOpen}
                    />
                    <p style={usernameStyle}>Hello, {user ? user.username : 'Login' }</p>

                </div>
                <AddShoppingCartIcon
                    className='iconH40p-active'
                    style={iconStyle}
                />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleMenuClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="accModal-title"
                    aria-describedby="accModal-form"
                >
                    {ca ? 
                        <Box sx={style}>
                            <Typography id="accModal-title" variant="h3" component="h3" style={{textAlign: 'center', fontSize: '40px'}}>
                                Create account
                            </Typography>

                            <CaLogin props={ca} />

                            <Typography variant='p'component='p' style={{textAlign: 'center', marginTop: '10px'}} onClick={() => setCa(false)}>
                                Already a member? <Link to='/' style={{textDecoration: 'none'}}>Login</Link>
                            </Typography>

                        </Box>
                    : 
                        <Box sx={style}>
                            <Typography id="accModal-title" variant="h3" component="h2" style={{textAlign: 'center'}}>
                                Sign-In
                            </Typography>

                            <CaLogin props={ca}/>

                            <Typography variant='p'component='p' style={{textAlign: 'center', marginTop: '10px'}} onClick={() => setCa(true)}>
                                New here? <Link to='/' style={{textDecoration: 'none'}}>Create Account</Link>
                            </Typography>
                        </Box>
                    }
                </Modal>
            </div>
        </div>
    )
}

export default Nav