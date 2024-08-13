const Card = ({img, alt, icon, header, desc}) => {
    return ( 
    <div className="card position-relative flex-shrink-0">
        <div className="image-container">
            <img className="w-100" src={img} alt={alt}/>
        </div>
        <div className="text-content position-absolute bottom-0">
            <h2
            className="text-left"
            style={{
                fontWeight : "500",
                fontSize : "1rem",
                textAlign : "left"
            }}><i style={{
                marginRight : "5px"
            }}
            className={icon}></i> {header}</h2>
            <p
            style={{
                lineHeight : "1.3"
            }}
            >{desc}</p>
        </div>
    </div> );
}
 
export default Card;