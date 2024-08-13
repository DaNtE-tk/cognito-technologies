import { Button } from "react-bootstrap";

const Roles = ({ header, description, link1, link2, img }) => {
    return (
        <div className="roles-card d-flex px-3 py-3 justify-content-between">
            <div className="text-container d-flex flex-column justify-content-around flex-grow-1" style={{
                width: "59%",
            }}>
                <div>
                    <i style={{ fontSize: "1.5vw" }} className="fa-solid fa-grip-vertical"></i>
                    <h2 className="text-start d-inline" style={{
                        fontSize: "1.5vw", marginLeft: "15px", color: "var(--primary-color) !important"
                    }}>{header}</h2>
                <p className="text-start" style={{ fontSize: "1.1vw", opacity : "0.75" }}>
                    {description}
                </p>
                </div>
                <div className="w-100 gap-2 d-flex">
                <a href={link1}>
                    <Button variant="dark rounded" style={{
                        fontSize : "1.1vw",
                    }}>
                        View Details <i className="fa-solid fa-list"></i>
                    </Button>
                </a>
                <a href={link2}>
                    <Button variant="dark rounded" style={{
                        fontSize : "1.1vw",
                    }}>
                        Apply <i className="fa-solid fa-user-check"></i>
                    </Button>
                </a>
                </div>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center" style={{
                width: "40%",
            }}>
                <img className="w-100" src={img} alt="product"/>
            </div>
        </div>
    );
}

export default Roles;