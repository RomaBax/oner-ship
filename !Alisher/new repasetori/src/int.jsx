import './style.css'

let Cart = (props) => {
    return(
        <div className='Cart'>
            <img src={props.img}/>
            <div>
                <p>{props.title}</p>
            </div>
        </div>
    )
}


export default Cart
