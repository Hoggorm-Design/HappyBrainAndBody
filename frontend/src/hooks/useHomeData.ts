import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

interface Post {
  title: string;
  slug?: { current: string };
  body: string;
  mainImage: {
    asset: { url: string };
  };
  alt: string;
}

interface Event {
  title: string;
  slug: { current: string };
  body: string;
  image: {
    asset: { url: string };
  };
  link: string;
  alt: string;
}

interface Landing {
  header: string;
  subheader: string;
  introText: string;
  additionalText: string;
  image: {
    asset: { url: string };
  };
  alt: string;
}

interface HomeData {
  post1: Post[];
  post2: Post | null;
  post3: Post | null;
  landing: Landing | null;
  events: Event[];
}
const fetchHomeData = async (): Promise<HomeData> => {
  const [post1, post2, post3, landing, events] = await Promise.all([
    sanityClient.fetch(
      `*[_type == "post2"]{ title, body, mainImage{ asset->{url} }, alt }`
    ),
    sanityClient.fetch(
      `*[_type == "post3"][0]{ title, body, mainImage{ asset->{url} }, alt }`
    ),
    sanityClient.fetch(
      `*[_type == "post4"][0]{ title, body, mainImage{ asset->{url} }, alt }`
    ),
    sanityClient.fetch(
      `*[_type == "landing"][0]{ header, subheader, introText, additionalText, image{ asset->{url} }, alt }`
    ),
    sanityClient.fetch(
      `*[_type == "event"]{ title, slug, body, image{ asset->{url} }, link, alt }`
    ),
  ]);
  return { post1, post2, post3, landing, events };
};

const useHomeData = () => {
  return useQuery<HomeData, Error>({
    queryKey: ["homeData"],
    queryFn: fetchHomeData,
    staleTime: 1000 * 60 * 5,
  });
};

export default useHomeData;
