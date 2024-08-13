const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-around p-4 gap-1">
            <div className="quicklinks">
                <h5>Quick Links</h5>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="/error">Privacy Policy</a></li>
                    <li><a target="_blank" rel="noreferrer" href="/error">Terms of Service</a></li>
                    <li><a target="_blank" rel="next" href="/career">Careers</a></li>
                </ul>
            </div>
            <div className="vr"></div>
                <div className="social-media">
                    <h5>Follow us on</h5>
                    <address>
                        <ul className="d-flex justify-content-around p-0">
                            <li><a target="_blank" href="/error"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a target="_blank" href="/error"><i class="fa-brands fa-x-twitter"></i></a></li>
                            <li><a target="_blank" href="/error"><i class="fa-brands fa-facebook-f"></i></a></li>
                        </ul>
                    </address>
                </div>
            <div className="vr"></div>
            <div className="contact-address">
                <h5>Address</h5>
                <address>
                    <ul className="p-0">
                        <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    </ul>
                </address>
            </div>
        </footer>
    );
}
 
export default Footer;