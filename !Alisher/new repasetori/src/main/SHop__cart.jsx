import { Box, Button } from "@mui/material"
import micrakar from '../img/корзина__micra.png'

function Shop(props) {
    return(
        <Box component={"div"} sx={{
            width:"220px",
            height:'350px',
            borderRadius:'10px',
            background:"#fff",
            boxShadow:'0 0 10px rgb(158, 158, 158)',
            padding:'10px 20px',
        }}>
            <img className="img__shop" src={props.img} alt="" />
            <p className="Rec__shop">{props.P}</p>
            <p className="Info__shop">В наличии</p>
            <div className="Item__shop">
                <p>615 000 ₽</p>
                <img src={micrakar}/>
            </div>
            <Button sx={{
                marginLeft:'5px',
            }} variant="contained">Купить в 1 клик</Button>
        </Box>
    )
}

export default Shop