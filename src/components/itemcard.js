import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { fontWeight, textAlign } from '@mui/system';

const ItemCard = props => {

    const style= {
        marginLeft: '10px',
        marginRight: '10px',
        height: '250px',
        maxHeight: '250px', 
        overflowY: 'hidden',
    }

    return(
        <div className='item'>
            <Card sx={{ maxWidth: 345 }} style={style}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.props.image}
                        alt="green iguana"
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
        </div>
    )
}

export default ItemCard