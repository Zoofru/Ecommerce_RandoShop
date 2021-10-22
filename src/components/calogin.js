import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { UserContext } from '../context/usercontext';

const CaLogin = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmP, setConfirmP] = useState('')
    const [eAlertPassMatch, setEAlertPassMatch] = useState(false)
    const [eCaIncorrect, setECaIncorrect] = useState(false)
    const [email, setEmail] = useState('')
    const [invalidLogin, setInvalidLogin] = useState(false)
    const { userState } = useContext(UserContext)
    const [user, setUser] = userState

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
            localStorage.setItem('uID', res.data.user[0].id)
            setUser(res.data.user[0])
            setEmail('')
            setPassword('')
        } else {
            setECaIncorrect(true)
            setEmail('')
            setPassword('')
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
                setUser(res.data.user)
                localStorage.setItem('uID', res.data.user.id)
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
                            id="username" 
                            label="Username" 
                            variant="standard" 
                            spellCheck='false' 
                            autoComplete='off' 
                            value={username}
                            type='text' 
                            onChange={e => setUsername(e.target.value)} 
                            style={{
                                display: 'flex',
                                marginTop: '40px'
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