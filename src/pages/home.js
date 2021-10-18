import axios from "axios";
import { useEffect, useState } from "react";
import BgImage from "../components/bgimage";
import GetItemsByGenres from "../components/getitemsbygenre";

const Home = props => {
    const [items, setItems] = useState([])
    const GENRES = ['clothing', 'electronics', 'random']
    
    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get('http://localhost:3001/items/all')
            setItems(res.data.item)
        }
        
        getItems()
    }, [])

    let itemsByGenres = GENRES.map((g,i) => {
        return <GetItemsByGenres genre={g} key={i} />
    })



    return (
        <div>
            <BgImage />
            <div className='itmCont wrap'>
                <div style={{marginTop: '30vh'}}>
                    {itemsByGenres}
                </div>
            </div>
        </div>
    )
}


export default Home