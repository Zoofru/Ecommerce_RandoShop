import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import ItemCard from './itemcard';
import Link from '@mui/material/Link';

const GetItemsByGenre = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItemsInGenres = async (gen, len=3) => {
            console.log(gen);
            const res = await axios.post(`http://localhost:3001/items/genre/all`, {
                genre: gen
            })
            setItems(res.data.items.splice(0, len))
        }

        getItemsInGenres(props.genre, 5)
    }, [props.genre])

    let itemC = items.map((item, i) => {
        return <ItemCard props={item} key={i} />
    })

    let genreName = props.genre.charAt(0).toUpperCase() + props.genre.slice(1)

    return(
        <div>
            <div className='flex-row'>
                <Typography gutterBottom variant='h2' component='h2' style={{textAlign: 'left', fontWeight: 'bold'}}>
                    {genreName}
                </Typography>
                <Link href={`/${genreName}`}>See More</Link>
            </div>
            <div className='flex-row-jc-cen'>
                <div className='flex-row-jc-cen cardsHme'>
                    {itemC}
                </div>
            </div>
        </div>
    )
}

export default GetItemsByGenre