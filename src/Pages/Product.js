import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";
import ProdCard from "../Components/ProdCard";
import { Button } from "react-bootstrap";

const Product = () => {
    return ( <>
    <PageTitle title={"Products"}/>
        <Section ID={"product_available"} header={"Our Products"}>
            <div className="d-flex flex-wrap justify-content-center align-items-center w-100 px-3 py-3 gap-2">
                <ProdCard header={"MindCare"} 
                description={"MindCare offers innovative solutions for dementia care, enhancing patient safety and caregiver peace of mind. Our IoT-based devices monitor patient movements, detect falls, and send real-time alerts to caregivers. With advanced sensors and seamless connectivity, MindCare ensures round-the-clock protection and support for those living with dementia."}
                img={"/Products/mindcare.jpg"}
                link={"/product/TWluZENhcmU="}
                />
                <ProdCard header={"MindEase"} 
                description={"MindEase is an AI-powered platform designed to enhance mental well-being. It offers personalized therapy tracks, real-time progress tracking, and seamless integration with therapists. Whether you're seeking self-care or professional guidance, MindEase supports your journey with empathy, evidence-based tools, and secure, user-friendly experiences. Embrace better mental health today."}
                img={"/Products/mindease.jpg"}
                link={"/product/TWluZEVhc2U="}
                />
                <ProdCard header={"SMAP"} 
                description={" SMAP (Social Media Automation Platform) streamlines your social media management by automating posts, monitoring engagement, and optimizing content across platforms. Ideal for businesses and influencers, SMAP helps you save time, grow your audience, and maintain a consistent online presence with minimal effort. Elevate your social media strategy effortlessly with SMAP."}
                img={"/Products/smap.jpg"}
                link={"/product/U01BUA=="}
                />
            </div>
            <div className="w-100 d-flex py-5"><a className="mx-auto" href="/contact"><Button variant="dark">Request a Demo{" "}<i className="fa-solid fa-gears"></i></Button></a></div>
        </Section>
    </> );
}
 
export default Product;
