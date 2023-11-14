import { Box, Button, Container, Grid } from "@mui/material"
import manu__blok from "../img/opoarat.png"
import svg from '../img/svg.png'
import Cart from "../int"

import img from '../img/oparat mini.png'
import img2 from '../img/image mini.png'
import img3 from '../img/video mini.png'

import grow from '../img/Group.png'

import galochka from '../img/galochka.png'

import Items from "./items"

import micraImg from '../img/image__micra.png'
import micraImg_2 from '../img/image (1)__micra.png'
import Shop from "./SHop__cart"

import cart__fon from '../img/img__left.png'

import svg__icon__img from '../img/svg__icon__img.png'
import svg__icon__img_2 from '../img/svg__icon__img_2.png'
import MiniCart from "./miniCart"

import telegram from '../img/telegram.png'
import whatsapp from '../img/whatsapp.png'
import map from '../img/map (1).png'


function Main() {

    return(
        <Container>
        <Box component={'main'}>
            <Box component={'div'} sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <div className="manu__blok">
                    <h2 className="h2__blok">оборудование <br /> для майнинга <br /> оптом</h2>
                    <p className="p__blok">с гарантией 12 месяцев</p>
                    <Button variant="contained">Перейти в каталог</Button>
                    <img className="img__blok" src={manu__blok} />
                </div>
                <div className="manu__span">
                    <h2 className="h2__item__v2 h2_2">выгодное предложение</h2>
                    <div className="item__list">
                        <h2 className="h2__item__v2 h2">-20%</h2>
                        <p className="p__item__v2">на все товары <br /> Antminer</p>
                    </div>
                    <img className="img__item__V2" src={svg} alt="" />
                </div>
            </Box>
            <p className="text__P">категории товаров</p>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
    <Cart title='Asic miners оптом' img={img}/>
  </Grid>
  <Grid item xs={4}>
  <Cart title='GPU фермы оптом' img={img2}/>
  </Grid>
  <Grid item xs={4}>
  <Cart title='Видеокарты оптом' img={img3}/>
  </Grid>
  <Grid item xs={4}>
  <Cart title='Аксессуары оптом' img={img3}/>
  </Grid>
  <Grid item xs={4}>
  <Cart title='Компьютерные' img={img2}/>
  </Grid>
  <Grid item xs={4}>
  <Cart title='Комплектующие для' img={img}/>
  </Grid>
</Grid>

        <Box component={'div'} sx={{
            height:'347px',
            display:'flex',
            marginTop:'80px ',
            background:'radial-gradient(98.19% 130.91% at -8.58% -1.44%, #42E8E0 0%, #40DDDA 1.57%, #3AAEC0 9.21%, #3484A9 17.3%, #2F6195 25.73%, #2B4486 34.58%, #282E79 44%, #180564 82.26%);',
            borderRadius:'15px',
            position:'relative',
            padding:"30px",
        }}>
            <div className="menu__textImg">
            <h2 className="h2__text">наши <br /> преимущества</h2>
            <img className="img__BoxDiv" src={grow}/>
            </div>
            <div className="menu__left__text">
                <Items img={galochka} P='Более 5 лет успешной работы'/>
                <Items img={galochka} P='Сотни положительных отзывов'/>
                <Items img={galochka} P='Работаем всей России'/>
                <Items img={galochka} P='Сотрудничество с производителем'/>
                <Items img={galochka} P='Гарантия на оборудование'/>
                <Items img={galochka} P='Собственный склад в Москве'/>
            </div>
        </Box>

        <h2 className="text__P">хиты продаж</h2>

        <Box component={"div"} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
        }}>
            <Shop img={micraImg} P='Antminer L7 8800 Mh/s'/>
            <Shop img={micraImg_2} P='Antminer S19j pro 110 Th/s'/>
            <Shop img={micraImg} P='Whatsminer M3x 12.5 Th/...'/>
            <Shop img={micraImg_2} P='Antminer Z15e 200 ksol'/>
            <Shop img={micraImg} P='Innosilicon A11 1500 Mh/s...'/>
        </Box>

        <Box component={"div"} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'80px 0 0'
        }}>
            <Box component={'div'} sx={{
                width:'650px',

            }}>
                <p className="text__P">о КОМПАНИИ</p>
                <p className="Text__info">С 2017 года Main-miner поставляет технику для майнинга на российский рынок оптом. За пять лет мы смогли укрепить свои позиции на рынке оборудования, вырастили персонал, прекрасно разбирающийся в каждом типе асиков и комплектующих <br /> <br /> .Если вы хотите купить асики оптом, то с нами можете быть уверены как в качестве техники, так и в надёжности сотрудничества. Лучше всего о нас говорит репутация!</p>
            </Box>
            <img src={cart__fon}/>
        </Box>

        <Box component={"div"} sx={{
            margin:'60px 0 0',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
        }}>
            <MiniCart img={svg__icon__img} P='Работаем без выходных – 7 дней в неделю'/>
            <MiniCart img={svg__icon__img_2} P='Прямое сотрудничество поставщиками'/>
            <MiniCart img={svg__icon__img} P='Быстрая авиадоставка от 14 дней '/>
            <MiniCart img={svg__icon__img_2} P='Предоплата за предзаказ от 30%'/>
            <MiniCart img={svg__icon__img} P='Официальный договор, полная средств'/>
            <MiniCart img={svg__icon__img_2} P='Видеопроверка для удаленных клиентов'/>
        </Box>

        <Box component={'div'} sx={{
            height:'320px',
            marginTop:'60px ',
            background:'radial-gradient(100% 100% at -10% 100%, #42E8E0 0%, #40DDDA 1.57%, #3AAEC0 9.21%, #3484A9 17.3%, #2F6195 25.73%, #2B4486 34.58%, #282E79 44%, #180564 82.26%);',
            borderRadius:'15px',
            position:'relative',
            padding:"30px",
        }}>
            <h2 className="I__h2">не нашли то, что искали? <br /> свяжитесь с нами, мы вам поможем!</h2>
            <p className="I__P">Заполните форму и мы свяжемся с Вами в ближайшее время</p>
            <div>
                <input type="text" className="I__input" placeholder="Ваше имя" />
                <input type="text" className="I__input"  placeholder="Ваш телефон" />
                <Button variant="contained">Отправить</Button>
            </div>
            <p className="I__P_2">Согласен на обработку персональных данных</p>
        </Box>

        <Box component={"div"} sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            margin:'60px 0 0'
        }}>
            <div>
                <p className="text__P">контакты</p>
                <p className="P_mini">г. Москва, ул. Покровка, 47А</p>
                <p className="P_mini">м. Курская</p>
                <p className="P_mini">mein@miner.com</p>
                <p className="P_mini">+7 (999) 999-99-99</p>
                <p className="P_mini">График работы: <br /> ежедневно с 9:00 до 20:00</p>
                <span className="tel__icon">
                    <img src={telegram}/>
                    <img src={whatsapp}/>
                </span>
            </div>
            <img src={map} alt="" />
        </Box>
        </Box>
        </Container>
    )
}
export default Main