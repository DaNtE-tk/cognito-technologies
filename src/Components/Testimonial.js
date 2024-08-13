const Testimonial = ({img, name, position, desc}) => {
    return ( 
    <div className="test-card d-flex gap-4 flex-column px-2">
        <div className="member-info d-flex w-100 h-50 gap-2 align-items-center">
            <div className="image-container w-25">
                <img src={img} alt="profile"/>
            </div>
            <div className="role-container w-75">
            <h3 className="text-start">{name}</h3>
            <h6 style={{
                color: "var(--passive-color)",
                backgroundColor : "var(--primary-color)",
                padding : "2px 6px",
                borderRadius : "50px",
                display : "inline-block"
            }}>{position}</h6>
            </div>
        </div>
        <div className="member-desc h-50 w-100">
            <p>{desc}</p>
        </div>
            
      
    </div> );
}
 
export default Testimonial;