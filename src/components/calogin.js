import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const CaLogin = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmP, setConfirmP] = useState('')
    const [eAlertPassMatch, setEAlertPassMatch] = useState(false)
    const [eCaIncorrect, setECaIncorrect] = useState(false)
    const [email, setEmail] = useState('')
    const [invalidLogin, setInvalidLogin] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if(props.props) {
            if(password === confirmP) {
                createAccount()
                setUsername('')
                setPassword('')
                setConfirmP('')
                setEmail('')
                setEAlertPassMatch(false)
            } else {
                setEAlertPassMatch(true)
                setPassword('')
                setConfirmP('')
            }
        } else {
            login()
        }
    }

    const createAccount = async () => {
        const res = await axios.post('http://localhost:3001/user/ca', {
            username: username,
            password: password,
            email: email
        })

        console.log(res);
        if(res.data.user !== undefined) {
            window.location.reload()
        } else {
            setECaIncorrect(true)
        }     
    }

    const login = async () => {
        const res = await axios.post('http://localhost:3001/user/login', {
            email: email,
            password: password
        })

        console.log(res);
        try {
            if(res.data.user.id) {
                window.location.reload()
            }
        } catch (error) {
            setInvalidLogin(true)
        }
    }

    return(
        <>
            <form className='caForm' onSubmit={handleSubmit}>
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="standard" 
                    spellCheck='false' 
                    autoComplete='off'
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    style={{
                        display: 'flex',
                        marginTop: '40px',
                    }}
                    required
                />
                {props.props ? 
                    <Typography variant='p' component='p' style={{color: '#EB6123', fontSize: '13px'}}>
                        Username must be atleast 5 characters
                    </Typography>
                :
                    null
                }

                    
                <TextField 
                    id="pass" 
                    label="Password" 
                    variant="standard" 
                    spellCheck='false' 
                    autoComplete='off' 
                    value={password}
                    type='password' 
                    onChange={e => setPassword(e.target.value)} 
                    style={{
                        display: 'flex',
                        marginTop: '40px'
                    }}
                    required
                    />

                {props.props ? 
                    <Typography variant='p' component='p' style={{color: '#EB6123', fontSize: '13px'}}>
                        Password must be atleast 8 characters
                    </Typography>
                :
                    null
                }

                {invalidLogin ? 
                   <Alert severity="error" onClose={() => {setEAlertPassMatch(false)}}>Invalid email or password!</Alert>
                :
                    null
                }

                {props.props ?
                    <>
                        <TextField 
                            id="confirmP" 
                            label="Confirm Password" 
                            variant="standard" 
                            spellCheck='false' 
                            autoComplete='off' 
                            value={confirmP}
                            type='password' 
                            onChange={e => setConfirmP(e.target.value)} 
                            style={{
                                display: 'flex',
                                marginTop: '40px'
                            }}
                            required
                            />

                        {eAlertPassMatch ?
                            <Alert severity="error" onClose={() => {setEAlertPassMatch(false)}}>Passwords do not match!</Alert>
                        :
                            null
                        }

                        <TextField 
                            id="email" 
                            label="Email" 
                            variant="standard" 
                            spellCheck='false' 
                            autoComplete='off' 
                            value={email}
                            type='Email' 
                            onChange={e => setEmail(e.target.value)} 
                            style={{
                                display: 'flex',
                                marginTop: '40px'
                            }}
                            required
                            />
                    </>
                : 
                    null
                }

                {props.props ? 
                    <Button variant="contained" style={{height: '60px', marginTop: '80px', backgroundColor:'#5F2B93'}} type='submit'>create Account</Button>
                : 
                    <Button variant="contained" style={{height: '60px', marginTop: '80px', backgroundColor:'#5F2B93'}} type='submit'>Sign-In</Button>
                }   

                {eCaIncorrect ?
                    <Alert severity="error" onClose={() => {setECaIncorrect(false)}}>There was an error! Please check your information and try again.</Alert>
                :
                    null
                }
            </form>
        </>
    )
}

export default CaLogin