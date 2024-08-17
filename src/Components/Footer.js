import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-around p-4 gap-1">
            <div className="quicklinks">
                <h5>Quick Links</h5>
                <ul>
                    <li><Link to="/policy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/career">Careers</Link></li>
                </ul>
            </div>
            
            <div className="vr"></div>
            <div className="contact-address">
                <h5>Contact</h5>
                <address>
                    <ul className="p-0">
                        <li><a style={{
                            opacity : "0.7"
                        }} target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=mail@cognitotechnologies.com&tf=cm">mail@cognitotechnologies.com</a></li>
                    </ul>
                </address>
            </div>
        </footer>
    );
}
 
export default Footer;