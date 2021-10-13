import axios from "axios"
import { useEffect } from "react";

const Home = () => {
    const test = async () => {
        const res = await axios.post('http://localhost:3001/user/ca', {
            username: 'hello',
            password: 'hoi'
        })
        console.log(res);
    }
    
    useEffect(() => {
        test()
    }, [])

    return (
        <div>
        </div>
    )
}


export default Home