import Polaroid from "./Polaroid";

const MemberCard = ({img, name, position, desc, contact}) => {
    return ( 
    <div className="member-card d-flex gap-4">
        <div className="image-container h-100">
            <Polaroid img={img} alt={"members"} position={position} name={name}/> 
        </div>
        <div className="member-info">
            <h3 className="text-start">{name}</h3>
            <h6 style={{
                color: "var(--passive-color)",
                backgroundColor : "var(--primary-optional-color)",
                padding : "2px 6px",
                borderRadius : "50px",
                display : "inline-block"
            }}>{position}</h6>
            <p>
                {desc}
            </p>
            <ul className="d-flex w-100 p-0 gap-2" style={{listStyleType : "none"}}>
                {contact.map((item, index) => <li><a style={{
                    color : "var(--primary-color)",
                    fontSize : "20px"
                }} href={item.link || "/error"} target="_blank" rel="noreferrer"><i className={item.iconClass}></i></a></li>)}
            </ul>
        </div>
    </div> );
}
 
export default MemberCard;