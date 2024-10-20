import useContact from '../hooks/useContact.ts';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';

export default function Contact() {
  const { contactData, loading, error } = useContact();

  return (
    <>
      {loading && <p>Contact data is loading...</p>}
      {error && <p>An error occurred: {error}</p>}

      <section>
        <div className='container'>
          {contactData.map(contact => (
            <div key={contact.slug.current}>
              <h2>{contact.header}</h2>

              <div className='contact-section'>
                <div className='icon-container'>
                  {/* <Icon name="mdi:email-outline" /> */}
                </div>
                <div className='contact-details'>
                  <MdOutlineEmail />
                  <p className='strong'>Email</p>
                  <p>
                    <a
                      className='description'
                      href='mailto:kontakt@happybrainandbody.com'
                    >
                      kontakt@happybrainandbody.com
                    </a>
                  </p>
                </div>
              </div>

              <div className='contact-section'>
                <div className='icon-container'>
                  {/* <Icon name="mdi:phone-outline" /> */}
                </div>
                <div className='contact-details'>
                  <MdOutlinePhone />
                  <p className='strong'>Telefon</p>
                  <p>
                    <a
                      className='description'
                      href={`tel:${contact.phonenumber}`}
                    >
                      {contact.phonenumber}
                    </a>
                  </p>
                </div>
              </div>

              <div className='contact-section'>
                <div className='icon-container'>
                  {/* <Icon name="mdi:map-marker-outline" /> */}
                </div>
                <div className='contact-details'>
                  <GrLocation />
                  <p className='strong'>Kontor</p>
                  <p>
                    <a
                      className='description'
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://www.google.com/maps/place/Korsvoll+Terrasse+1B,+0881+Oslo/@59.9617355,10.7607864,17z/data=!3m1!4b1!4m6!3m5!1s0x464171e334986e47:0xd49a34f3aeb5e59!8m2!3d59.9617328!4d10.7633613!16s%2Fg%2F11c130xpyc?entry=ttu'
                    >
                      Korsvoll terrasse 1 B, 0881 Oslo, Norway
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
