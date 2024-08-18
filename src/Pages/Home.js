import { Button } from "react-bootstrap";
import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import HrScroller from "../Components/HrScroller";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const yourEmail = 'mail@cognitotechnologies.com'; 

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(yourEmail)}&body=${encodeURIComponent(`Subscription request from : ${userEmail}`)}`;

        window.open(mailtoLink, '_blank');
    };
    return (
        <>
            <PageTitle title={"Home"} />
            <section className="banner">
                <div className="main-container p-5 h-100 d-flex justify-content-between align-items-center ">
                    <div className="text-content">
                        <p
                            style={{
                                fontSize: "5vw",
                                lineHeight: "1.3",
                                fontFamily: "Sansation",
                                color: "var(--primary-color) !important"
                            }}
                        >Innovating<br />
                            Tomorrow, Today
                        </p>
                        <a href="#introduction"><Button variant="dark">Learn More</Button></a>
                    </div>
                    <div className="image-container w-50 flex-shrink-1">
                        <img className="w-100" src="/Home/banner.png" alt="Technology" />
                    </div>
                </div>
            </section>
            <Section ID={"introduction"} header={"Let’s Introduce Ourselves"}>
                <div className="d-flex justfiy-content-center align-items-center h-100 px-3">
                    <div className="image-container w-50">
                        <img className="w-75" src="/logo.png" alt="Logo" />
                    </div>
                    <div className="text-content w-50">
                        <p style={{
                            fontSize: "1.5vw",
                        }}>Cognito Technologies was established in April 2024 by two experienced IT veterans, bringing a wealth of knowledge and expertise to the startup.

                            The company specializes in the development of socio-technical products, integrating advanced technologies to create solutions that enhance social and technical interactions.

                            Cognito Technologies is dedicated to leveraging the latest advancements in technology, ensuring that their products are innovative and at the forefront of the industry.

                            With a strong foundation and a clear focus, Cognito Technologies is poised for rapid growth and continuous innovation in the socio-technical domain.</p>
                    </div>
                </div>
            </Section>
            <Section ID={"whatwedo"} header={"What We Do"}>
                <HrScroller>
                    <Card
                        img={"/Home/software.png"}
                        alt={"Software"}
                        header={"Custom Software Development"}
                        icon={"fa-solid fa-grip-vertical"}
                        desc={"We create custom software tailored to your business needs. Our expert developers build robust, scalable solutions that enhance user experience and operational efficiency."} />
                    <Card
                        img={"/Home/ai.png"}
                        alt={"AI"}
                        icon={"fa-solid fa-brain"}
                        header={"AI and Machine Learning Solutions"}
                        desc={"Supercharge your business with our AI solutions. We integrate machine learning to automate processes, predict trends, optimize decisions, giving you a competitive edge."}
                    />
                    <Card
                        img={"/Home/iot.png"}
                        alt={"IOT"}
                        icon={"fa-solid fa-wifi"}
                        header={"IoT Integration"}
                        desc={"Our IoT services connect your devices, enabling real-time data collection and automation. Transform your business with smart systems for enhanced efficiency and performance."}
                    />
                    <Card
                        img={"/Home/cloud.png"}
                        alt={"ai"}
                        icon={"fa-solid fa-cloud-arrow-up"}
                        header={"Cloud Services"}
                        desc={"Elevate your business with our cloud services. We offer scalable solutions for migration, management, and optimization, ensuring secure and efficient operations."}
                    />
                </HrScroller>
                <div className="w-100 d-flex"><Link className="mx-auto" to="/whatwedo"><Button variant="dark">Explore Our Services <i className="fa-solid fa-angle-right"></i></Button></Link></div>
            </Section>
            <Section header={"Keep yourself Updated"} ID={"newsletter"}>
                <div className="d-flex justify-content-around align-items-center position-relative flex-wrap overflow-hidden h-auto w-100 pb-5">
                    <div className="eclipse position-absolute"></div>
                    <div className="header-content d-flex flex-column justify-content-center"
                        style={{
                            height: "400px"
                        }}>
                        <h2
                            style={{
                                fontSize: "3.1rem",
                                color: "var(--passive-color) !important",
                                textAlign: "left !important"
                            }}>Join our Newsletter</h2>
                        <p style={{
                            color: "var(--passive-color) !important",
                            opacity: 0.5
                        }}>lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <label for="emailid" style={{
                                fontFamily: "Sansation", fontSize: "20px"
                            }}>Enter your email address</label><br />
                            <input
                                required
                                style={{
                                    width: "405px",
                                    height: "65px",
                                    fontSize: "24px",
                                    borderRadius: "10px",
                                    fontFamily: "Sansation"
                                }} id="emailid" type="email" placeholder="example@example.com" className="p-2" value={userEmail} onChange={e => setUserEmail(e.target.value)} /> <br /><br />

                            <Button style={{
                                fontSize: "1.2rem",
                                border : "1px solid white"
                            }} type="submit" variant="dark">Subscribe <i className="fa-solid fa-envelope"></i></Button>
                        </form>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Home;
