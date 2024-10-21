import { useEffect, useState } from 'react';
import sanityClient from '../client.ts';

export interface Contact {
  header: string;
  slug: {
    current: string;
  };
  website1link: string;
  website2link: string;
  phonenumber: string;
}

const useContact = () => {
  const [contactData, setContactData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data: Contact[] = await sanityClient.fetch(
          `*[_type=="contact"]{
                        header,
                        slug,
                        website1link,
                        website2link,
                        phonenumber,
                  
                    }`,
        );
        setContactData(data);
      } catch (err) {
        setError('Failed to fetch data');
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
