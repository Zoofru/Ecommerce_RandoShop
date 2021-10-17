import axios from "axios"
import { useState, useEffect } from "react"

const ItemPage = props => {
    const [item, setItem] = useState({})

    useEffect(() => {
        const getItem = async () => {
            const res = await axios.get(`http://localhost:3001/items/${props.itemId}`)
            setItem(res.data.item)
            console.log(res);
        }
    
        getItem()
    }, [])
    
    return(
        <div>
            {item.itemname}
        </div>
    )
}

export default ItemPage