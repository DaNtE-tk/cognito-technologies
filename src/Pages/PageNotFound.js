const PageNotFound = () => {
    return ( 
    <div>
        <p style={{
            fontSize : "200px",
            color : "var(--primary-color)",
            textAlign : "center"
        }}>404</p>
        <p className="text-center" style={{
            fontSize : "20px",
            marginBottom : "15%"
        }}>Page not found!</p>
    </div> );
}
 
export default PageNotFound;