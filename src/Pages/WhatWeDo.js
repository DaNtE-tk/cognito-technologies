import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import Description from "../Components/Description";


import { Button } from "react-bootstrap";


const WhatWeDo = () => {
    return (<>
        <PageTitle title={"What We Do"} />
        <Section ID={"overview"} header={"Overview"}>
            <div className="d-flex justify-content-center align-items-center gap-2 px-5 py-3">
                <div className="image-content d-flex justify-content-center align-item-center flex-shrink-1 w-50 position-relative">
                    <img className="w-75" src="/WhatWeDo/background.png" alt="background" />
                </div>
                <div className="text-content w-50 flex-shrink-1">
                    <p style={{ fontSize: "1.5vw" }}>
                    Cognito Technologies is an innovative IT startup founded in April 2024 by two experienced IT veterans. The company focuses on developing socio-technical products that enhance human interactions and well-being. Our portfolio includes solutions such as MindEase for mental health, MindCare for Internet of Medical Things (IoMT), and advanced social media automation tools. By leveraging cutting-edge technologies like AI and IoMT, Cognito Technologies aims to create impactful solutions that address the evolving needs of society.
                    </p>
                </div>
            </div>
        </Section>
        <Section ID={"software-service"} header={"Custom Software Development"}>
            <Description img={"/WhatWeDo/software.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Overview", "description": "Cognito Technologies specializes in custom software development, creating tailored solutions that align with clients' unique needs across various industries. Our team of experts leverages cutting-edge technologies to build scalable, secure, and user-friendly applications that solve complex challenges." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": <ul>
                    <li>Tailored Solutions: Custom-built software that fits specific business requirements.</li>
                    <li>Scalability: Designed to grow with your business, adapting to increasing demands.</li>
                    <li>Efficiency: Streamlines operations by automating processes and integrating seamlessly with existing systems.</li>
                </ul>},
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": <ul>
                    <li>Healthcare Applications: Custom platforms for patient management and IoMT integration.</li>
                    <li>Business Automation: Tailored software to enhance productivity and streamline workflows across different sectors.</li>
                </ul>},
            ]} />
        </Section>
        
        <Section ID={"ai-service"} header={"AI and Machine Learning Solutions"}>
            <Description imgrev={"reverse"} img={"/WhatWeDo/ai.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Overview", "description": "Cognito Technologies' AI and Machine Learning solutions are designed to enhance the functionality and effectiveness of socio-technical products. By integrating AI/ML algorithms, Cognito enables intelligent decision-making, personalized user experiences, and predictive analytics across its product offerings." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": <ul>
                    <li>Personalization: AI-driven insights tailor user experiences, improving engagement and outcomes.</li>
                    <li>Efficiency: Automated processes reduce manual effort and enhance productivity.</li>
                    <li>Predictive Analytics: AI models predict trends and behaviors, allowing for proactive decision-making.</li>
                </ul>},
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": <ul>
                    <li>MindEase: Utilizes AI to offer personalized mental health recommendations.</li>
                    <li>MindCare: Employs machine learning to detect movement patterns and prevent falls in patients with dementia.</li>
                </ul> },
            ]} />
        </Section>
        
        <Section ID={"iot-service"} header={"IoT Integration"}>
            <Description img={"/WhatWeDo/iot.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Overview", "description": "Cognito Technologies' IoT solution, MindCare, is designed specifically for fall prevention and movement tracking in dementia and Alzheimer’s patients. Utilizing advanced IoT sensors, MindCare monitors patients’ movements, providing real-time alerts and data to caregivers for prompt intervention." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": <ul>
                    <li>Fall Prevention: Early detection of falls reduces the risk of injury.</li>
                    <li>Movement Tracking: Continuous monitoring helps in understanding patient behavior and mobility patterns.</li>
                    <li>Caregiver Support: Real-time alerts and data enhance response times and care quality.</li>
                </ul>},
                { "icon": "fa-solid fa-ranking-star", "header": "Examples", "description": <ul>
                    <li>In-Home Monitoring: MindCare provides caregivers with continuous insights into patient movement at home.</li>
                    <li>Healthcare Facilities: Hospitals and care homes use MindCare to ensure patient safety and well-being.</li>
                </ul> },
            ]} />
        </Section>
        
        <Section ID={"cloud-service"} header={"Cloud Services"}>
            <Description imgrev={"reverse"} rev={"reverse"} img={"/WhatWeDo/cloud.png"} lists={[
                { "icon": "fa-solid fa-users-viewfinder", "header": "Overview", "description": "Cognito Technologies offers robust cloud-based solutions for all its socio-technical products, providing Software as a Service (SaaS) to customers. By leveraging the power of the cloud, Cognito ensures seamless access, scalability, and security for its mental health, IoMT, and social media automation tools." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": <ul>
                    <li>Scalability: Easily adjust resources based on demand, ensuring optimal performance.</li>
                    <li>Accessibility: Access tools anytime, anywhere, with just an internet connection.</li>
                    <li>Security: Advanced cloud security measures protect sensitive data.</li>
                </ul> },
                { "icon": "fa-solid fa-cloud", "header": "Examples", "description":<ul>
                    <li>MindEase: Provides real-time mental health support.</li>
                    <li>MindCare: Facilitates remote patient monitoring via IoMT.</li>
                    <li>Social Media Automation: Streamlines digital marketing efforts through cloud-hosted platforms.</li>
                </ul>  },
            ]} />
        </Section>

        

        <div className="w-100 d-flex py-5"><a className="mx-auto" href="/error"><Button variant="dark">Get a Free Consultation{" "}<i className="fa-solid fa-user-check"></i></Button></a></div>


    </>);
}

export default WhatWeDo;
