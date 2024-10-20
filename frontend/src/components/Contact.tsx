// import "../styles/biography.css"

export default function Contact() {
    return (
        <section>
            <h2>Kontakt</h2>
            <div className="container">
                <div className="contact-section">
                    <div className="icon-container">
                        {/*<Icon name="mdi:email-outline"/> */}
                    </div>
                    <div className="contact-details">
                        <p className="strong">Email</p>
                        <p>
                            <a className="description" href="kontakt@happybrainandbody.com"
                            >kontakt@happybrainandbody.com</a
                            >
                        </p>
                    </div>
                </div>
                <div className="contact-section">
                    <div className="icon-container">
                        {/*<Icon name="mdi:phone-outline"/>*/}
                    </div>
                    <div className="contact-details">
                        <p className="strong">Telefon</p>
                        <p>
                            <a className="description" href="tel:+4799797136"
                            >+47 99797136</a
                            >
                        </p>
                    </div>
                </div>
                <div className="contact-section">
                    <div className="icon-container">
                        {/* <Icon name="mdi:map-marker-outline"/>*/}
                    </div>
                    <div className="contact-details">
                        <p className="strong">Kontor</p>
                        <p>
                            <a
                                className="description"
                                target="_blank"
                                href="https://www.google.com/maps/place/Korsvoll+Terrasse+1B,+0881+Oslo/@59.9617355,10.7607864,17z/data=!3m1!4b1!4m6!3m5!1s0x464171e334986e47:0xd49a34f3aeb5e59!8m2!3d59.9617328!4d10.7633613!16s%2Fg%2F11c130xpyc?entry=ttu"
                            >Korsvoll terrasse 1 B, 0881 Oslo, Norway</a
                            >
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}