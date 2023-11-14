function Items(props) {
    return(
        <div className="item__text">
            <img src={props.img}/>
            <p>{props.P}</p>
        </div>
    )
}
export default Items