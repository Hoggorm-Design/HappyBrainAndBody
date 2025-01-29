import { useState, useEffect } from "react";
import sanityClient from "../client";

interface Contact {
  header: string;
  website1link?: string;
  website2link?: string;
  phonenumber: number;
  mail: string;
}

const useContact = () => {
  const [contactData, setContactData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data: Contact[] = await sanityClient.fetch(
          `*[_type=="contact"]{
                        header,
                        website1link,
                        website2link,
                        phonenumber,
                        mail
                    }`,
        );
        setContactData(data[0] || null);
      } catch (err) {
        setError("Failed to fetch contact data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);
  return { contactData, loading, error };
};

export default useContact;
