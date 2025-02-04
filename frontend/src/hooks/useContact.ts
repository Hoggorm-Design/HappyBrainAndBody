import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

interface Contact {
  header: string;
  website1link?: string;
  website2link?: string;
  phonenumber: number;
  mail: string;
}

const fetchContact = async (): Promise<Contact[]> => {
  const data = await sanityClient.fetch(
    `*[_type=="contact"]{
                  header,
                  website1link,
                  website2link,
                  phonenumber,
                  mail
              }`
  );
  return data;
};

const useContact = () => {
  return useQuery<Contact[], Error>({
    queryKey: ["contact"],
    queryFn: fetchContact,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
  });
};

export default useContact;
