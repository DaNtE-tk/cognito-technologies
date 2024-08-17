import PageTitle from "../Components/PageTitle";
import Section from "../Components/Section";

const Policy = () => {
    return (<> 
    <PageTitle title={"Cognito Solutions | Privacy & Policy"}/>
    <Section header={"Privacy & Policy"} ID={"pvcplc"}>
    <p className="p-5" style={{
        fontSize : "30px"
    }}>
        At Cognito Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
        Information Collection: We collect personal information such as name, email, and contact details when you interact with our website, subscribe to our newsletter, or use our products.
        Use of Information: Your information is used to enhance your experience, provide customer support, and improve our products. We may also use your data for marketing communications with your consent.
        Data Security: We employ robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, please be aware that no method of online data transmission is completely secure.
        Third-Party Sharing: We do not sell, trade, or share your personal information with third parties, except as necessary to provide our services or comply with legal obligations.
        Contact Us: If you have any questions or concerns about our privacy practices, please contact us at <strong className="text-primary"><a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=mail@cognitotechnologies.com&tf=cm">mail@cognitotechnologies.com</a></strong>.
    </p>
    </Section>
    </>);
}
 
export default Policy;