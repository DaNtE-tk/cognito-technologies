const Description = ({ lists, img, imgrev, rev }) => {
    return (
        <div className={"d-flex w-100 justify-content-center gap-2 py-4" + ` ${(imgrev ? "flex-row-reverse" : "flex-row")}`}>
            <div style={{width : "40%"}} className="d-flex justify-content-center align-items-center image-container">
                <img style={{ borderRadius: "20px" }} className="w-100 h-100" src={img} alt="services" />
            </div>
            <div className={"text-content w-50 px-2 d-flex justify-content-between" + ` ${(rev ? "flex-column-reverse" : "flex-column")}`}>
                <div style={{ height: "48%" }} className="main-content w-100 service-content">
                    <i style={{ fontSize: "1.5vw" }} className={lists[0].icon}></i> 
                    <h2 className="text-start d-inline" style={{ fontSize: "1.5vw", marginLeft : "5px", color : "var(--primary-optional-color) !important"
                     }}>{lists[0].header}</h2>
                    <p style={{ fontSize: "1.1vw", opacity : "0.75" }}>
                        {lists[0].description}
                    </p>
                </div>
                <div style={{ height: "48%" }} className="sub-content w-100 d-flex flex-row gap-2">
                    <div className="w-50 h-100 service-content">
                        <i style={{ fontSize: "1.5vw" }} className={lists[1].icon}></i> 
                        <h2 className="text-start d-inline" style={{ fontSize: "1.5vw", marginLeft : "5px", color : "var(--primary-optional-color) !important" }}>{lists[1].header}</h2>
                        <p style={{ fontSize: "1.1vw", opacity : "0.75" }}>
                            {lists[1].description}
                        </p>
                    </div>
                    <div className="w-50 h-100 service-content">
                        <i style={{ fontSize: "1.5vw" }} className={lists[2].icon}></i> 
                        <h2 className="text-start d-inline" style={{ fontSize: "1.5vw", marginLeft : "5px", color : "var(--primary-optional-color) !important" }}>{lists[2].header}</h2>
                        <p style={{ fontSize: "1.1vw", opacity : "0.75" }}>
                            {lists[2].description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;