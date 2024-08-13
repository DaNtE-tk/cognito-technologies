const Polaroid = ({img, alt, position, name, spcpos}) => {
    return ( 
    <div className={`polaroid-${spcpos || "relative"} position-${spcpos || "relative"} p-1`}>
        <div style={{height : "80%"}} className="w-100">
            <img className="w-100 h-100 object-fit-cover" src={img} alt={alt}/>
        </div>
        <div>
            <p className="text-center">Our {position},<br />{name}</p>
        </div>
    </div> );
}
 
export default Polaroid;