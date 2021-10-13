import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const CaLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        console.log(username);
        console.log(password);

        setUsername('')
        setPassword('')
    }

    return(
        <form className='caForm' onSubmit={handleSubmit}>
            <TextField 
                id="username" 
                label="Username" 
                variant="standard" 
                spellCheck='false' 
                autoComplete='off'
                value={username} 
                onChange={e => setUsername(e.target.value)}
                style={{
                    display: 'flex',
                    marginTop: '40px'
                }} 
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
            />

            <Button variant="contained" style={{height: '60px', marginTop: '80px', backgroundColor:'#5F2B93'}} type='submit'>Sign-In</Button>
        </form>
    )
}

export default CaLogin