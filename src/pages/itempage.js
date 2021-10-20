import axios from "axios"
import { useState, useEffect } from "react"
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import CaLogin from "../components/calogin";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"

const ItemPage = props => {
    const [item, setItem] = useState({})
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

    useEffect(() => {
        const getItem = async () => {
            const res = await axios.get(`http://localhost:3001/items/${props.itemId}`)
            setItem(res.data.item)
            console.log(res);
        }
    
        getItem()
    }, [])

    const infoStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '70%'
    }

    const infoContainer = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
    }

    const itemPageDiv = {
        width: '100%',
        marginTop: '5vh',
    }

    const buttonDivStyle = {
        width: '70%',
        display: 'flex',
        height: '100%',
        marginTop: '10%',
        justifyContent: 'space-around'
    }

    const buttonStyleO = {
        height: '7vh',
        width: '10vw',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: '#EB6123',
        color: 'black',
        fontSize: 'large'
    }

    const buttonStyleB = {
        height: '7vh',
        width: '10vw',
        border: 'none',
        borderRadius: '10px',
        backgroundColor: 'black',
        color: '#EB6123',
        fontSize: 'large'
    }

    const grayBtmBorder = {
        borderBottom: '2px solid #5F2B93',
        width: '100%'
    }

    const imageStyle = {
        width: '80%', 
        borderRadius: '10px', 
        boxShadow: '0px 0px 10px #5F2B93',
    }

    console.log(window.location.href);
    
    return(
        <div className='flex-row-ali-cen' style={itemPageDiv}>
            <div style={{width: '50%'}}>
                <img src={item.image} style={imageStyle} alt='pumpkins'/>
            </div>
            <div style={infoContainer}>
                <div style={infoStyle}>
                    <div style={grayBtmBorder}>
                        <Typography gutterBottom variant='h3'component='h3'>
                            {item.itemname}
                        </Typography>
                    </div>
                    <div style={grayBtmBorder}>
                        <Typography gutterBottom variant='p' component ='p' style={{textAlign: 'left', marginLeft: '15px', width: '70%', marginBottom: '5%', marginTop: '5%'}}>
                            {item.description}
                        </Typography>

                    </div>
                    <Typography variant='h6' component='h6' style={{marginTop: '5%'}}>
                        Listing price: ${item.price}
                    </Typography>
                </div>
                <div style={buttonDivStyle}>
                    <Button style={buttonStyleB} variant='contained' onClick={handleOpen}>Add To Cart</Button>
                    <Button style={buttonStyleO} variant='contained' onClick={handleOpen}>Buy Now</Button>
                </div>
            </div>
                {/* MODAL USED TWICE IN NAV CAN MAKE COMPONENT ON REFACTOR */}
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
                                Already a member? <Link to={`/${props.itemId}`} style={{textDecoration: 'none'}}>Login</Link>
                            </Typography>

                        </Box>
                    : 
                        <Box sx={style}>
                            <Typography id="accModal-title" variant="h3" component="h2" style={{textAlign: 'center'}}>
                                Sign-In
                            </Typography>

                            <CaLogin props={ca}/>

                            <Typography variant='p'component='p' style={{textAlign: 'center', marginTop: '10px'}} onClick={() => setCa(true)}>
                                New here? <Link to={`/${props.itemId}`} style={{textDecoration: 'none'}}>Create Account</Link>
                            </Typography>
                        </Box>
                    }
                </Modal>
        </div>
    )
}

export default ItemPage