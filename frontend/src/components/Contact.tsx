import { FiPhone, FiExternalLink } from 'react-icons/fi';
import useContact from '../hooks/useContact';

const Contact = () => {
    const { contactData } = useContact();

    console.log(contactData);
    return (
        <section className="flex flex-col justify-center p-[50px] 2xl:px-[100px] h-[80vh] lg:h-[35vh]">
            <h2 className="header font-bold mb-8 text-2xl">{contactData?.header || 'Contact'}</h2>

            <div className="flex flex-col lg:flex-row gap-14 lg:gap-8">
                <div className="flex flex-1">
                    <FiExternalLink className="mr-4 mt-0.5 sub-header" />
                    <div>
                        <a href={contactData?.website1link} className="underline text" target="_blank" rel="noopener noreferrer">
                            {contactData?.website1link}
                        </a>
                    </div>
                </div>
                {contactData?.website2link && (
                    <div className="flex flex-1">
                        <FiExternalLink className="mr-4 mt-0.5 sub-header" />
                        <div>
                            <a href={contactData.website2link} className="underline text" target="_blank" rel="noopener noreferrer">
                                {contactData.website2link}
                            </a>
                        </div>
                    </div>
                )}

                <div className="flex flex-1 lg:justify-center">
                    <FiPhone className="mr-4 mt-0.5 sub-header" />
                    <div>
                        <a href={`tel:${contactData?.phonenumber}`} className="underline text">
                            {contactData?.phonenumber}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
