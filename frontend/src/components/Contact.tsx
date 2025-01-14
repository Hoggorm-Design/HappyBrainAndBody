import { FiPhone, FiMail } from 'react-icons/fi';
import useContact from '../hooks/useContact';
import useImageByContact from "../hooks/useImageByContact";

const Contact = () => {
    const { contactData } = useContact();
    const { imageData } = useImageByContact();

    console.log(contactData);
    return (
        <section className="flex flex-col lg:flex-row justify-between p-[30px] 2xl:px-[100px] py-32 h-auto gap-14">
            {/* Contact Information - Left */}
            <article className="flex-1">
                <h2 id="kontakt" className="header font-semibold mb-8 text-2xl">
                    {contactData?.header || 'Contact'}
                </h2>
                <h3 className="font-semibold">Nettsider</h3>
                <br/>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start">
                        <p>{contactData?.website1link}</p>
                    </div>
                    {contactData?.website2link && (
                        <div className="flex items-start">
                            <p>{contactData.website2link}</p>
                        </div>
                    )}
                    <h3 className="font-semibold">Telefon og mail</h3>
                    <div className="flex items-start">
                        <FiPhone className="mr-4 mt-0 sub-header"/>

                        <a
                            href={`tel:${contactData?.phonenumber}`}
                            className="underline text"
                        >
                            {contactData?.phonenumber}
                        </a>
                    </div>
                    <div className="flex items-start">
                        <FiMail className="mr-4 mt-0 sub-header"/>
                        <a
                            href={`mailto:${contactData?.mail}`}
                            className="underline text"
                        >
                            {contactData?.mail}
                        </a>
                    </div>
                    </div>
            </article>
            {/* Image Section - Right */}
            {imageData && imageData.mainImage ? (
                <article className="flex-1 flex items-center justify-center">
                    <img
                        src={imageData.mainImage.asset.url}
                        alt={imageData.alt || "Contact Image"}
                        className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                </article>
            ) : null}

        </section>
    );
};

export default Contact;
