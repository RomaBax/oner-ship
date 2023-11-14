import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import foto from '../img/Фото.png'
import cco from '../img/избранное.png'
import isb from '../img/корзина.png'
import search from '../img/поиск.png'
import React from 'react';


function Heard() {

    return(
        <Box component={'header'} sx={{display: 'flex', alignItems:'center',justifyContent: 'space-around',}}>
            <img src={foto}/>
            <Box className='menu__nav' component={'nav'} sx={{display:'flex',alignItems:'center'}}>
                <select className='nav__option'>
                    <option>Каталог товаров</option>
                </select>
                <a className='nav__item' href="#">Цены</a>
                <a className='nav__item' href="#">Калькулятор</a>
                <a className='nav__item' href="#">Доставка</a>
                <a className='nav__item' href="#">Отзывы</a>
            </Box>
            <Box component={"nav"}  sx={{display:'flex',alignItems:'center', justifyContent: "center"}}>
            <Button sx={{
                margin: '0 60px 0 0',
            }} variant="contained">Contained</Button>
            <img className='img__item' src={cco}/>
            <img className='img__item' src={isb}/>
            <img className='img__item' src={search}/>
            </Box>
        </Box>
    )
}
export default Heard