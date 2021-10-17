import axios from 'axios'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import ItemCard from './itemcard';

const GetItemsByGenre = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItemsInGenres = async (gen) => {
            console.log(gen);
            const res = await axios.post(`http://localhost:3001/items/genre/all`, {
                genre: gen
            })
            setItems(res.data.items)
        }

        getItemsInGenres(props.genre)
    }, [props.genre])

    let itemC = items.map((item, i) => {
        return <ItemCard props={item} key={i} />
    })

    let genreName = props.genre.charAt(0).toUpperCase() + props.genre.slice(1)

    return(
        <div>
            <Typography gutterBottom variant='h2' component='h2' style={{textAlign: 'left', marginLeft: '50px', fontWeight: 'bold'}}>
                {genreName}
            </Typography>
            <div className='flex-row-jc-cen'>
                <div className='flex-row-jc-cen cardsHme'>
                    {itemC}
                </div>
            </div>
        </div>
    )
}

export default GetItemsByGenre