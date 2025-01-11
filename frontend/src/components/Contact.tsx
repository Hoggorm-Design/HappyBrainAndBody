import { FiPhone, FiMail } from 'react-icons/fi';
import useContact from '../hooks/useContact';
import {ClientOnly} from "./ClientOnly";

const Contact = () => {
    const { contactData } = useContact();

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

            {/* Google Maps - Right */}
            <article className="flex-1">
                <ClientOnly fallback={<div>Loading map...</div>}>
                    <iframe
                        title="Google map"
                        className="w-full h-[500px] lg:h-[500px] rounded-lg shadow-lg bg-white"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2077.833107439263!2d10.758490393805086!3d59.96173539559648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464171e334986e47%3A0xd49a34f3aeb5e59!2sKorsvoll%20Terrasse%201B%2C%200881%20Oslo%2C%20Norway!5e1!3m2!1sen!2sus!4v1735414657658!5m2!1sen!2sus"
                        loading="lazy">
                    </iframe>
                </ClientOnly>


            </article>
        </section>
    );
};

export default Contact;
