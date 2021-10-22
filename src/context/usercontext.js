import { useState, createContext } from 'react'
import axios from 'axios'

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({})

    const fetchUser = () => {
        axios.post('http://localhost:3001/user/verify', {
            id: localStorage.getItem('uID')
        }).then(res => {
            console.log(res);
            setUser(res.data.user)
        }).catch(err => {
            console.log(err);
            localStorage.removeItem('uID')
        })

    }

    const state = {
        userState: [user, setUser],
        fetchUser: fetchUser
    }
    
    return(
        
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
        
        )
}

export { UserContext, UserProvider }