import { Button } from "react-bootstrap";

const ProdCard = ({ header, description, link, img }) => {
    return (
        <div className="prod-card d-flex px-3 py-3 justify-content-between">
            <div className="text-container d-flex flex-column justify-content-around flex-grow-1" style={{
                width: "59%",
                maxWidth: "50vw !important", 
            }}>
                <div>
                    <i style={{ fontSize: "1.5vw" }} className="fa-solid fa-grip-vertical"></i>
                    <h2 className="text-start d-inline" style={{
                        fontSize: "1.5vw", marginLeft: "15px", color: "var(--primary-color) !important"
                    }}>{header}</h2>
                    <p className="text-start" style={{ fontSize: "1.1vw", opacity: "0.75" }}>
                        {description}
                    </p>
                </div>
                <a href={link}>
                    <Button variant="dark rounded" style={{
                        fontSize: "1.1vw",
                    }}>
                        View Details <i className="fa-solid fa-list"></i>
                    </Button>
                </a>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center" style={{
                width: "40%",
            }}>
                <img className="w-100" src={img} alt="product"/>
            </div>
        </div>
    );
}

export default ProdCard;
