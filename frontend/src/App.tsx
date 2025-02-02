import placeholderImg from "./assets/placeholder.png";
import Biography from "./components/Biography";
import ContentWithImage from "./components/ContentWithImage";
import Example from "./components/Example";
import Spotify from "./components/Spotify";
import "./index.css";

import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import ScrollToAnchor from "./components/ScrollToAnchor";

import GlobalLoading from "./components/shared/GlobalLoading";
import useHomeData from "./hooks/useHomeData";

function App() {
  const { data: homeData, error } = useHomeData();

  if (error) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        {error.message || "Failed to fetch homepage data"}
      </div>
    );
  }

  if (!homeData) return null;

  const { post1, post2, post3, landing, events } = homeData;

  const HomePage = () => (
    <div className="mt-20">
      {landing && (
        <section className="flex flex-col xl:flex-row items-start justify-between p-[30px] 2xl:px-[100px] pt-[100px] 2xl:pb-16 gap-20">
          <div className="w-full xl:w-1/2">
            <img
              src={landing.image?.asset?.url || placeholderImg}
              alt={landing.alt}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p>{landing.alt}</p>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="flex flex-col text-2xl font-bold mb-4">
              <h2 className="">{landing.header}</h2>
              <h3>{landing.subheader}</h3>
            </div>
            <p className="text-lg">{landing.introText}</p>
            <p className="text">{landing.additionalText}</p>
          </div>
        </section>
      )}

      <Biography />

      {post1.length > 0 && (
        <ContentWithImage
          title={post1[0].title}
          imageSrc={post1[0].mainImage?.asset?.url || placeholderImg}
          imageAlt={post1[0].alt}
          reverse={false}
          bgColour="white"
          id="hva-er-eq"
        >
          <p className="text">{post1[0].body}</p>
        </ContentWithImage>
      )}

      {post2 && (
        <ContentWithImage
          title={post2.title}
          imageSrc={post2.mainImage?.asset?.url || placeholderImg}
          imageAlt={post2.alt}
          reverse={true}
          bgColour="white"
          id="eq-terapi"
        >
          <p className="text">{post2.body}</p>
        </ContentWithImage>
      )}

      {post3 && (
        <ContentWithImage
          title={post3.title}
          imageSrc={post3.mainImage?.asset?.url}
          imageAlt={post3.alt}
          reverse={false}
          bgColour="white"
          id="foredrag"
        >
          <p className="text">{post3.body}</p>
        </ContentWithImage>
      )}

      <section className="px-[30px] py-[80px] 2xl:px-[100px] bg-white">
        <div id="eksempler" className="relative -mt-[120px] pt-[120px]">
          <h2 className="header font-bold mb-7">Eksempler</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-20 grid-cols-1">
          {events.map((post) => (
            <Example
              key={post.slug.current}
              title={post.title}
              imageSrc={post.image?.asset?.url || placeholderImg}
              imageAlt={post.alt}
              info={post.body || "No content available."}
              buttonText="Les mer"
              buttonLink={post.link || "#"}
            />
          ))}
          <Spotify />
        </div>
      </section>

      <Contact />
    </div>
  );

  return (
    <main className="relative top-[-5px] w-screen">
      {/*Display global loader if any query is still fetching*/}
      <GlobalLoading />
      <Navbar />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
