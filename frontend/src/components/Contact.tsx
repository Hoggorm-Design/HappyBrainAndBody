import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

export default function Contact() {
    return (
        <section className="flex flex-col justify-center p-[50px] 2xl:px-[100px] h-[80vh] lg:h-[35vh]">
            <h2 className="header font-bold mb-8 text-2xl">Kontakt</h2>

            <div className="flex flex-col lg:flex-row gap-14 lg:gap-8">
                <div className="flex flex-1">
                    <div className="mr-4 mt-0.5">
                        <FiMail className="sub-header" />
                    </div>
                    <div>
                        <p className="sub-header font-semibold">Email</p>
                            <a href="mailto:kontakt@happybrainandbody.com" className="underline text">
                                kontakt@happybrainandbody.com
                            </a>
                    </div>
                </div>

                <div className="flex flex-1 lg:justify-center">
                    <div className="mr-4 mt-0.5">
                        <FiPhone className="sub-header" />
                    </div>
                    <div>
                        <p className="sub-header font-semibold">Telefon</p>
                            <a href="tel:+4799797136" className="underline text">
                                +47 99797136
                            </a>
                    </div>
                </div>

                <div className="flex flex-1 lg:justify-end">
                    <div className="mr-4 mt-0.5">
                        <FiMapPin className="sub-header" />
                    </div>
                    <div>
                        <p className="sub-header font-semibold">Kontor</p>
                        <p>
                            <a
                                className="underline text"
                                target="_blank"
                                href="https://www.google.com/maps/place/Korsvoll+Terrasse+1B,+0881+Oslo/@59.9617355,10.7607864,17z/data=!3m1!4b1!4m6!3m5!1s0x464171e334986e47:0xd49a34f3aeb5e59!8m2!3d59.9617328!4d10.7633613!16s%2Fg%2F11c130xpyc?entry=ttu"
                                rel="noopener noreferrer"
                            >
                                Korsvoll terrasse 1 B, 0881 Oslo, Norway
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}