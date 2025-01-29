import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import useContact from "../hooks/useContact";
import useImageByContact from "../hooks/useImageByContact";
import { useLoading } from "../context/LoadingContext";

const Contact = () => {
  const { contactData } = useContact();
  const { imageData } = useImageByContact();
  const { isLoading } = useLoading();

  return (
    <>
      {!isLoading && contactData && imageData && (
        <section
          id="kontakt"
          className="flex flex-col lg:flex-row justify-between p-[30px] 2xl:px-[100px] pt-16 pb-32 h-auto gap-14"
        >
          {/* Contact Information - Left */}
          <article className="flex-1">
            <h2 className="header font-semibold mb-8 text-2xl">
              {contactData?.header || "Contact"}
            </h2>
            <h3 className="font-semibold">Nettsider</h3>
            <br />
            <div className="flex flex-col gap-4">
              <div className="flex items-start">
                <a
                  href="https://happybrainandbody.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactData?.website1link}
                </a>
              </div>
              {contactData?.website2link && (
                <div className="flex items-start">
                  <a
                    href="https://happybrainandbody.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Engelsk nettside: {contactData.website2link}
                  </a>
                </div>
              )}
              <h3 className="font-semibold">Telefon og mail</h3>
              <div className="flex items-start">
                <FiPhone className="mr-4 mt-0 sub-header" />

                <a
                  href={`tel:${contactData?.phonenumber}`}
                  className="underline text"
                >
                  {contactData?.phonenumber}
                </a>
              </div>
              <div className="flex items-start">
                <FiMail className="mr-4  mt-0 sub-header" />

                <a
                  href={`mailto:${contactData?.mail}`}
                  className="underline text"
                >
                  {contactData?.mail}
                </a>
              </div>
            </div>
            <br />
            <h3 className="font-semibold">Instagram</h3>
            <div className="flex items-start">
              <FiInstagram className="mr-4 mt-2 sub-header" />

              <a
                href="https://www.instagram.com/happybrainandbody?igsh=b213aTh0eXhjZzBo"
                className="underline text mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                happybrainandbody
              </a>
            </div>
          </article>
          {/* Image Section - Right */}
          {imageData && imageData.mainImage ? (
            <article className="flex-1 flex flex-col items-center justify-center">
              <img
                src={imageData.mainImage.asset.url}
                alt={imageData.alt || "Contact Image"}
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
              <p className="mt-4 text-center">{imageData.alt}</p>
            </article>
          ) : null}
        </section>
      )}
    </>
  );
};

export default Contact;
