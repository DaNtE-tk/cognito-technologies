import PageTitle from "../Components/PageTitle";
import Polaroid from "../Components/Polaroid";
import Section from "../Components/Section";
import Item from "../Components/Item";

const WhoWeAre = () => {
    return (<>
        <PageTitle title={"Who We Are"} />
        <Section ID={"history"} header={"Our Story"}>
            <div className="d-flex flex-row-reverse justify-content-center align-items-center gap-2 px-5">
                <div className="image-content d-flex justify-content-center align-items-center flex-shrink-1 w-50 position-relative">
                    <img className="w-75" src="/logo.png" alt="Logo" />
                    <Polaroid img={"/WhoWeAre/founder1.jpg"} alt={"founders"} position={"Founder"} name={"Mr. Aditya Sarkar"} spcpos={"absolute"} />
                    <Polaroid img={"/WhoWeAre/founder2.png"} alt={"founders"} position={"Co-founder"} name={"Mr. Prasun Talukdar"} spcpos={"absolute"} />
                </div>
                <div className="text-content w-50 flex-shrink-1">
                    <p style={{ fontSize: "1.5vw" }}>
                    Our Story

Cognito Technologies emerged from a vision to transform the intersection of technology and society. Founded by two seasoned IT professionals, we set out to create solutions that genuinely enhance lives. This drive led to innovations like MindEase for mental health support and MindCare for advanced healthcare connectivity. Our journey is marked by ethical innovation and a keen understanding of evolving digital needs. By harnessing AI and other cutting-edge technologies, we're forging meaningful connections and improving well-being. From revolutionary social media tools to groundbreaking socio-technical approaches, we're guided by a singular belief: thoughtfully applied technology can create a healthier, more connected world.
                    </p>
                </div>
            </div>
        </Section>
        <Section ID={"mission-and-vision"} header={"Our Mission & Vision"}>
            <div className="d-flex justify-content-center align-items-center gap-2 p-2 flex-wrap">
                <Item
                    img={"/WhoWeAre/mission.png"}
                    alt={"mission"}
                    header={"Mission"}
                    desc={"Our mission is to bridge the gap between society and technology by creating innovative solutions that enhance the quality of life and improve everyday interactions. We strive to empower individuals and communities through advanced technological products that address mental health, healthcare connectivity, and efficient digital communication."}
                    hdsize={"24px"}
                />
                <Item
                    img={"/WhoWeAre/vision.png"}
                    alt={"vision"}
                    header={"Vision"}
                    desc={"Our vision is to become a leading provider of socio-technical solutions that transform the way people live, communicate, and manage their well-being. We aim to be at the forefront of technological innovation, continually developing products that integrate seamlessly into daily life and contribute to a healthier, more connected world."}
                    hdsize={"24px"}
                />
                <Item
                    img={"/WhoWeAre/values.png"}
                    alt={"values"}
                    header={"Values"}
                    desc={"We champion innovation, empowerment, and integrity in our pursuit of human-centric technology. Committed to accessibility and well-being, we create sustainable solutions that foster connectivity and seamlessly enhance daily life. Our adaptable, collaborative approach drives us to responsibly advance technology for societal betterment."}
                    hdsize={"24px"}
                />
            </div>
        </Section>
    </>);
}

export default WhoWeAre;
