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
                { "icon": "fa-solid fa-clipboard", "header": "Description", "description": "We specialize in creating tailored software solutions that meet your unique business needs. From conceptualization to deployment, our expert developers ensure that your custom software is robust, scalable, and aligned with your goals, delivering seamless user experiences and operational efficiency." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": "Custom software development delivers a solution tailored to your business needs, enhancing efficiency and scalability. It offers unique features, better security, and integrates seamlessly with existing systems, often proving cost-effective over time despite higher initial costs." },
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": "SMAP (Social Media Automation Platform) streamlines social media management by automating posts, tracking engagement, and optimizing content across platforms. Ideal for businesses and influencers, it helps you save time, grow your audience, and maintain a consistent online presence effortlessly." },
            ]} />
        </Section>
        
        <Section ID={"ai-service"} header={"AI and Machine Learning Solutions"}>
            <Description imgrev={"reverse"} img={"/WhatWeDo/ai.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Overview", "description": "Unlock the power of AI with our advanced machine learning solutions. We help businesses automate processes, gain predictive insights, and enhance decision-making. Our AI services are designed to integrate smoothly into your existing systems, driving innovation and competitive advantage." },
                { "icon": "fa-solid fa-hands-holding", "header": "User Cases", "description": "Machine learning can forecast equipment failures, personalize customer recommendations, detect fraud, predict sales trends, automate customer support, optimize marketing strategies, assist in healthcare diagnostics, streamline supply chains, support financial analysis, and enhance HR recruitment." },
                { "icon": "fa-solid fa-pen-to-square", "header": "Examples", "description": "MindEase is an AI-powered platform that boosts mental well-being with personalized therapy, real-time progress tracking, and seamless therapist integration. It provides self-care and professional support through empathetic, evidence-based tools and secure, user-friendly features. Improve your mental health today with MindEase." },
            ]} />
        </Section>
        
        <Section ID={"iot-service"} header={"IoT Integration"}>
            <Description img={"/WhatWeDo/iot.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Explanation", "description": "Connect your devices and streamline operations with our IoT integration services. We provide end-to-end solutions that enable real-time data collection, analysis, and automation, helping you transform your business with smart, connected systems that enhance efficiency and performance." },
                { "icon": "fa-solid fa-hands-holding", "header": "Industry Applications", "description": "IoT integration services enhance industries with applications such as remote patient monitoring in healthcare, predictive maintenance in manufacturing, smart inventory management in retail, precision farming in agriculture, fleet tracking in logistics, smart infrastructure in cities, and energy management systems in the energy sector." },
                { "icon": "fa-solid fa-ranking-star", "header": "Examples", "description": "MindCare provides cutting-edge solutions for dementia care, focusing on patient safety and caregiver reassurance. Our IoT-enabled devices track patient movements, detect falls, and send instant alerts to caregivers. Featuring advanced sensors and seamless connectivity, MindCare delivers continuous protection and support for individuals living with dementia." },
            ]} />
        </Section>
        
        <Section ID={"cloud-service"} header={"Cloud Services"}>
            <Description imgrev={"reverse"} rev={"reverse"} img={"/WhatWeDo/cloud.png"} lists={[
                { "icon": "fa-solid fa-users-viewfinder", "header": "Definition", "description": "Leverage the scalability and flexibility of the cloud with our comprehensive cloud services. We offer cloud migration, management, and optimization solutions, ensuring your business can operate securely and efficiently from anywhere, with access to the latest technologies and resources." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits", "description": "Cloud services offer scalability, flexibility, cost efficiency, enhanced security, automatic updates, disaster recovery, and improved collaboration by providing adaptable, remote access to the latest technologies and resources." },
                { "icon": "fa-solid fa-cloud", "header": "Deployment Options", "description": "Cloud services can be deployed through public clouds (e.g., AWS), private clouds (e.g., VMware Cloud), hybrid clouds (e.g., Azure Hybrid), community clouds (e.g., GovCloud), and multi-clouds (e.g., AWS and Google Cloud)." },
            ]} />
        </Section>

        

        <div className="w-100 d-flex py-5"><a className="mx-auto" href="/error"><Button variant="dark">Get a Free Consultation{" "}<i className="fa-solid fa-user-check"></i></Button></a></div>


    </>);
}

export default WhatWeDo;
