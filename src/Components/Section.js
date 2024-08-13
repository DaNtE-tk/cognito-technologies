const Section = ({ID, header, children}) => {
    return (
    <section className="my-3 px-3 position-relative overflow-hidden" id={ID}>
        <div className="d-flex justify-content-center align-items-center gap-3 py-2">
            <hr className="flex-grow-1"/>
            <h1 className="m-0 text-center">{header}</h1>
            <hr className="flex-grow-1"/>
        </div>
        {children}
    </section>);
}
 
export default Section;