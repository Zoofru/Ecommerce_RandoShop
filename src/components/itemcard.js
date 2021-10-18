import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Link from '@mui/material/Link';

const ItemCard = props => {

    const style= {
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '15px',
        height: '250px',
        maxHeight: '250px', 
        overflowY: 'hidden',
        backgroundColor: 'white',
        maxWidth: '300px',
        minWidth: '300px',
        borderRadius: '0px',
        boxShadow: '0px 0px 8px black'
    }

    return(
        <div className='item'>
            <Link href={`/${props.props.id}`} underline="none">
                <Card sx={{ maxWidth: 345 }} style={style}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={props.props.image}
                            alt={props.props.itemname}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="p" component="p" style={{textAlign: 'left', fontWeight: 'bold'}}>
                                ${props.props.price}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h6" style={{textAlign: 'left'}}>
                                {props.props.itemname}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}

export default ItemCard