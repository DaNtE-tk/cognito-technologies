import { useParams } from "react-router-dom";
import Section from "../Components/Section";

const ProductDetails = () => {
    const {productId} = useParams();
    const product_map = {
        'TWluZENhcmU=' : {
            name : 'MindCare',
            image : '/Products/mindcare.jpg',
            genoverview : 'MindCare is dedicated to enhancing the quality of life for dementia patients and providing peace of mind to their caregivers. Our flagship product is an advanced IoT-based fall prevention and patient monitoring system designed specifically for individuals with dementia. This system continuously monitors patient movements, detecting when they attempt to get out of bed or when a fall is imminent. By integrating cutting-edge sensors and real-time communication technology, MindCare ensures that caregivers are immediately alerted to any potential risks, allowing them to respond quickly and effectively.\nMindCare’s solution is easy to set up and use, requiring minimal intervention from the user. It seamlessly integrates into the daily routines of patients and caregivers, offering a reliable and unobtrusive safety net. With MindCare, families and healthcare providers can rest assured knowing that their loved ones are being monitored with the highest level of care and technology.'.split('\n'),
            techoverview : "MindCare's product leverages the power of the Internet of Medical Things (IoMT) to provide a comprehensive monitoring and alert system. At its core, the system uses a combination of advanced sensors:\nPressure Sensors: Installed under the mattress to detect changes in pressure, indicating when a patient is attempting to get out of bed.\nInfrared (IR) Sensors: Positioned around the bed, these sensors monitor leg movements and can detect when a patient is moving towards standing up.\nUltrasonic Sensors: These sensors measure the distance to the patient’s legs, detecting movements that suggest the patient is leaving the bed.\nWearable Accelerometers and Gyroscopes: Embedded in a wristband or anklet, these sensors monitor the patient’s orientation and movement, identifying potential falls.\nThe data from these sensors is processed in real-time by a central microcontroller, which uses algorithms to detect abnormal movements or conditions that could lead to a fall. When a potential risk is identified, the system sends immediate alerts to caregivers via a mobile application, SMS, or audible alarms. This ensures that caregivers can intervene promptly, reducing the risk of injury.\nMindCare’s solution is not just about monitoring—it’s about proactive care. By utilizing advanced sensor technology and real-time communication, MindCare offers a robust and reliable system for protecting the well-being of dementia patients.".split('\n')
        },
        'TWluZEVhc2U=' : {
            name : 'MindEase',
            image : '/Products/mindease.jpg',
            genoverview : 'MindEase is an innovative mental health platform designed to support both patients and therapists in their journey toward mental well-being. The platform harnesses the power of artificial intelligence (AI) to deliver personalized therapy tracks, facilitate real-time mood and progress tracking, and provide tools for self-care and mindfulness. MindEase is built to be user-friendly and empathetic, ensuring that users feel supported every step of the way. Whether a user is seeking to manage their mental health independently or is engaged in therapy sessions with a professional, MindEase offers the resources needed to make meaningful progress. The platform is designed to be flexible, catering to a wide range of mental health needs, from anxiety and depression to stress management and emotional resilience.'.split('\n'),
            techoverview : "MindEase is built using a robust and scalable technology stack designed to ensure reliability, security, and efficiency. The platform’s frontend is developed using React.js, providing a responsive and intuitive user interface that works seamlessly across devices. The backend is powered by Python, leveraging Flask for a lightweight and modular web framework. This combination allows for efficient processing of user inputs and dynamic interactions with the AI models.\nAt the heart of MindEase is its AI-powered engine, integrated with OpenAI’s GPT-3.5 for natural language processing and personalized response generation. This AI component analyzes user inputs, tracks progress over time, and offers tailored therapeutic suggestions. The platform also incorporates cloud-based services, particularly through Microsoft Azure, to ensure data security, scalability, and continuous deployment. This includes using Azure’s Cognitive Services for advanced features like speech-to-text and sentiment analysis, and Azure DevOps for continuous integration and continuous deployment (CI/CD) to streamline updates and maintain system integrity. MindEase is designed with data privacy in mind, adhering to strict compliance standards to ensure user confidentiality and trust.\nTogether, these technologies create a holistic and effective tool for mental health management, bridging the gap between AI innovation and compassionate care.".split('\n')
        },
        'U01BUA==' : {
            name : 'SMAP',
            image : '/Products/smap.jpg',
            genoverview : 'SMAP (Social Media Automation Platform) is a powerful tool designed to simplify and optimize the management of social media activities for businesses, influencers, and digital marketers. SMAP automates various aspects of social media management, including content scheduling, audience engagement, and performance analytics, enabling users to maintain a consistent online presence with minimal effort. The platform supports multiple social media channels, allowing users to manage all their accounts from a single dashboard. By leveraging automation, SMAP helps users save time, increase productivity, and focus on creating quality content and building their brand online.'.split('\n'),
            techoverview : "SMAP is built on a robust and scalable architecture that integrates seamlessly with major social media platforms through their APIs. The platform is designed with modularity in mind, allowing for easy updates and the addition of new features as social media trends evolve. SMAP’s backend is powered by a cloud-based infrastructure, ensuring high availability and reliability, while also providing the flexibility to scale according to the user’s needs.\nThe platform offers advanced features such as automated content scheduling, where users can plan and queue posts across different time zones, ensuring maximum engagement. SMAP also includes sophisticated algorithms for social listening, monitoring keywords, and hashtags to keep users informed about relevant conversations in their industry. Analytics and reporting tools within SMAP provide detailed insights into social media performance, tracking metrics like engagement rates, follower growth, and content reach, which help in refining social media strategies.\nSecurity is a top priority for SMAP, with built-in features like OAuth2 authentication for secure API connections and data encryption to protect user information. The platform’s user interface is intuitive and user-friendly, designed to cater to both beginners and experienced marketers, making it an essential tool for anyone looking to streamline their social media management and drive growth.".split('\n')
        }
    };
    const current_product = product_map[productId];
    return ( 
    <div className="prod-details" style={{
        fontSize : "22px"
    }}>
        <Section header={current_product.name} ID={"single-product-details"}>
            <div className="px-5">
                <img src={current_product.image} alt="product" style={{
                    float : "right",
                    maxWidth: "30vw",
                    minWidth : "200px"
                }}/>
                {current_product.genoverview.map(element => <p>{element}</p>)}
                {current_product.techoverview.map(element => <p>{element}</p>)}
            </div>
        </Section>
    </div> );
}
 
export default ProductDetails;