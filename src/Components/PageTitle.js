import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({title}) => {
    const location = useLocation();
    useEffect(()=>{
        document.title = "Cognito Technologies | " + title;
    }, [title, location]);
}
 
export default PageTitle;