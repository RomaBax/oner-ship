import { Box, Button } from "@mui/material"

function Footer() {
    return(
        <Box component={"footer"} sx={{
            margin:'60px 0 0 ',
            display:'flex',
            alignItems:'flex-start',
            justifyContent:'space-evenly',
        }}>
            <div>
                <h2>MEIN MINER</h2>
                <p>© Mein Miner, 2022</p>
            </div>
            <div>
                <h2>Покупателям</h2>
                <p>О компании</p>
                <p>Цены</p>
                <p>Калькулятор</p>
                <p>Доставка</p>
                <p>Отзывы</p>
                <p>Контакты</p>
            </div>
            <div>
                <h2>каталог товаров</h2>
                <p>Asic miners</p>
                <p>GPU фермы</p>
                <p>Видеокарты</p>
                <p>Аксессуары</p>
                <p>Компьютерные комплектующие</p>
                <p>Комплектующие для майнинга</p>
            </div>
            <div className="X_item">
                <Button variant="contained" >Заказать звонок</Button>
                <p>Публичная оферта <br />Политика конфиденциальности</p>
            </div>
        </Box>
    )
}
export default Footer