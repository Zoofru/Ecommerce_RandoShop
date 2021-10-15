import axios from "axios";
import { useEffect, useState } from "react";
import ItemCard from "../components/itemcard";

const Home = props => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get('http://localhost:3001/items/all')
    
            console.log(res);
            setItems(res.data.item)
        }
        
        getItems()
    }, [])

    let itemCardsHtml = items.map((item, i) => {
        return <ItemCard props={item} key={i} />
    })

    return (
        <div className='itmCont wrap'>
            <div className='flex-row-jc-cen cardsHme'>
                {itemCardsHtml}
            </div>
        </div>
    )
}


export default Home