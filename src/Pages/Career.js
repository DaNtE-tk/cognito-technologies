import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import Description from "../Components/Description";

const Career = () => {
    return ( <><PageTitle title={"Career"}/>
    <Section ID={"career"} header={"Why Work With Us"}>
            <Description img={"/Career/culture.png"} lists={[
                { "icon": "fa-solid fa-clipboard", "header": "Our Company Culture", "description": "At Cognito Technologies, we foster innovation through collaboration and continuous learning. Our customer-focused approach drives us to create impactful solutions, guided by ethical responsibility. We embrace agility, diversity, and work-life balance, empowering our team to excel. Sustainability and open communication are key to our culture, as we strive to advance technology responsibly while nurturing creativity and personal growth." },
                { "icon": "fa-solid fa-scale-unbalanced-flip", "header": "Our Values", "description": "We innovate to empower people through ethical, human-centered technology. Our focus is on creating accessible, sustainable solutions that enhance connectivity and daily life. We collaborate and adapt to responsibly advance technology, aiming to improve society and individual well-being." },
                { "icon": "fa-solid fa-hands-holding", "header": "Benefits of Working With Us", "description": "At Cognito Technologies, you'll innovate with purpose in a collaborative startup environment. Create impactful AI and IoMT solutions while enjoying an ethical, diverse workplace that values learning, work-life balance, and your unique contributions to technology that improves lives." },
                ]} />
        </Section>      
        </> 
        
    );
}
export default Career;
