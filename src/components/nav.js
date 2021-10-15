import { Link } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CaLogin from "./calogin";
import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false)
    const [ca, setCa] = useState(false)

    const handleOpen = _ => { setOpen(true) }
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
                <AccountCircleIcon
                    className='iconH40p-active'
                    style={{
                        fill: '#EB6123',
                        transform: 'scale(2.0)'
                    }}
                    onClick={handleOpen}
                />
                
                <AddShoppingCartIcon
                    className='iconH40p-active'
                    style={{
                        fill: '#EB6123',
                        transform: 'scale(2.0)'
                    }}
                />

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