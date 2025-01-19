import "./index.css";
import Biography from "./components/Biography";
import ContentWithImage from "./components/ContentWithImage";
import placeholderImg from "./assets/placeholder.png";
import Example from "./components/Example";
import Spotify from "./components/Spotify";
import usePost2 from "./hooks/useContent1";
import usePost3 from "./hooks/useContent2";
import useEvent from "./hooks/useEvent";
import usePost4 from "./hooks/useContent3";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import useLanding from "./hooks/useLanding";
import ScrollToAnchor from "./components/ScrollToAnchor";

function App() {
  const { postData: post2Data } = usePost2();
  const { postData: post3Data } = usePost3();
  const { landingData } = useLanding();
  const { eventData } = useEvent();
  const { postData: post4Data } = usePost4();

  const firstPost = post2Data[0];
  const secondPost = post3Data;
  const fourthPost = post4Data;

  const HomePage = () => (
    <div className="mt-20">
      {landingData && (
        <section className="flex flex-col xl:flex-row items-start justify-between p-[30px] 2xl:px-[100px] pt-[100px] 2xl:pb-16 gap-20">
          <div className="w-full xl:w-1/2">
            <img
              src={landingData.image?.asset?.url || placeholderImg}
              alt={landingData.alt}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p>{landingData.alt}</p>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="flex flex-col text-2xl font-bold mb-4">
              <h2 className="">{landingData.header}</h2>
              <h3>{landingData.subheader}</h3>
            </div>
            <p className="text-lg">{landingData.introText}</p>
            <p className="text">{landingData.additionalText}</p>
          </div>
        </section>
      )}

      <Biography />

      {firstPost && (
        <ContentWithImage
          title={firstPost.title}
          imageSrc={firstPost.mainImage?.asset?.url || placeholderImg}
          imageAlt={firstPost.alt}
          reverse={false}
          bgColour={"white"}
          id="hva-er-eq"
        >
          <p className="text">{firstPost.body}</p>
        </ContentWithImage>
      )}

      {secondPost && (
        <ContentWithImage
          title={secondPost.title}
          imageSrc={secondPost.mainImage?.asset?.url || placeholderImg}
          imageAlt={secondPost.alt}
          reverse={true}
          bgColour={"white"}
          id="eq-terapi"
        >
          <p className="text">{secondPost.body}</p>
        </ContentWithImage>
      )}

      {fourthPost && (
        <ContentWithImage
          title={fourthPost.title}
          imageSrc={fourthPost.mainImage?.asset?.url}
          imageAlt={fourthPost.alt}
          reverse={false}
          bgColour={"white"}
          id="foredrag"
        >
          <p className="text">{fourthPost.body}</p>
        </ContentWithImage>
      )}

      <section className="px-[30px] py-[80px] 2xl:px-[100px] bg-white">
        <div id="eksempler" className="relative -mt-[120px] pt-[120px]">
          <h2 className="header font-bold mb-7">Eksempler</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-20 grid-cols-1">
          {eventData.map((post) => (
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
      <Navbar />
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
      </Routes>
    </main>
  );
}

export default App;
