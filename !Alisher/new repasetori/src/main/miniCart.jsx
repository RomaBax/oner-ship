function MiniCart(props) {
    return(
        <div className="menu__mini_cart">
                <img src={props.img}/>
                <p>{props.P}</p>
            </div>
    )
}
export default MiniCart