import Section from "../Components/Section";
import PageTitle from "../Components/PageTitle";

const Terms = () => {
    return (<>
    <PageTitle title={"Terms & Service"}/>
    <Section header={"Terms & Service"} ID={"trmsrv"}><p className="px-5" style={{
        fontSize : "30px"
    }}>
        <b>Introduction:</b> By accessing and using Cognito Technologies' website and services, you agree to comply with these Terms of Service.</p>
        <p className="px-5" style={{
            fontSize : "30px"
        }}><b>User Conduct:</b> You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of others. </p>
        <p className="px-5" style={{
            fontSize : "30px"
        }}><b>Intellectual Property:</b> All content on our website, including text, graphics, logos, and software, is the property of Cognito Technologies and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our permission.</p>
        <p className="px-5" style={{
            fontSize : "30px"
        }}><b>Service Availability:</b> We strive to maintain the availability and functionality of our website and services but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services without notice.</p>
        <p className="px-5" style={{
            fontSize : "30px"
        }}><b>Limitation of Liability:</b> Cognito Technologies is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our website or services.
        Privacy: Your use of our website is also governed by our Privacy Policy, which outlines how we collect and use your personal information.</p>
        <p className="px-5" style={{
            fontSize : "30px"
        }}><b>Changes to Terms:</b> We reserve the right to update these Terms of Service at any time. Your continued use of our services constitutes acceptance of the revised terms.
        Contact Us: For any questions regarding these terms, please contact us at mail@cognitotechnologies.com.
    </p></Section></>);
}

export default Terms;