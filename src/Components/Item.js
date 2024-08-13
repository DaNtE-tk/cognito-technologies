const Item = ({ img, alt, header, desc, hdsize }) => {
    return (
        <div className="item d-flex flex-column align-items-center gap-4 m-5">
            <div className="image-container">
                <img src={img} alt={alt} style={{
                    maxWidth : "100px"
                }}/>
            </div>
            <div className="text-content">
                <h2 style={{
                    textAlign: "center",
                    color: "var(--primary-optional-color) !important",
                    fontWeight: "500",
                    fontSize : hdsize || "1rem"
                }}>{header}</h2>
                <p className="text-center text-wrap text-secondary">{desc}</p>
            </div>
        </div>
    );
}

export default Item;