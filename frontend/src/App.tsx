import './index.css';
import Biography from "./components/Biography.tsx";
import ContentWithImage from "./components/ContentWithImage.tsx";
import placeholderImg from "./assets/placeholder.png";
import Example from "./components/Example.tsx";
import Spotify from "./components/Spotify.tsx";
import usePost2 from "./hooks/useContent1.ts";
import usePost3 from "./hooks/useContent2.ts";
import useEvent from "./hooks/useEvent.ts";
import usePost4 from "./hooks/useContent3.ts";
import Navbar from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog.tsx";
import Contact from "./components/Contact.tsx";
import useLanding from "./hooks/useLanding.ts";
import ScrollToAnchor from "./components/ScrollToAnchor.tsx"; // Assuming this is your fade-in wrapper

function App() {
    const { postData: post2Data } = usePost2();
    const { postData: post3Data } = usePost3();
    const { landingData } = useLanding();
    const { eventData } = useEvent();
    const { postData: post4Data } = usePost4();

    const firstPost = post2Data[0];
    const secondPost = post3Data;
    const fourthPost = post4Data;

    return (
        <>
            <main className="relative top-[-5px] w-screen">
                <Navbar />
                <ScrollToAnchor />
                <Routes>
                    <Route path="/blog" element={<Blog />} />

                    <Route path="/" element={
                        <div className="mt-20">
                            {landingData && (
                                    <section
                                        className="flex flex-col xl:flex-row items-start justify-between px-[30px] xl:px-[50px] py-[80px] gap-20">
                                        <div className="w-full xl:w-1/2">
                                            <img
                                                src={landingData.image?.asset?.url || placeholderImg}
                                                alt={landingData.alt}
                                                className="w-full h-auto object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="w-full xl:w-1/2">
                                            <h1 className="sub-header font-semibold mb-4">{landingData.header}</h1>
                                            <p className="text">
                                                {landingData.introText}
                                            </p>
                                            <p className="text">
                                                {landingData.additionalText}
                                            </p>
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
                                        id="foredrag">
                                        <p className="text">{fourthPost.body}</p>
                                    </ContentWithImage>
                            )}

                                <section className="px-[30px] py-[80px] 2xl:px-[100px] bg-white">
                                    <div id="eksempler" className="relative -mt-[120px] pt-[120px]">
                                        <h2 className="header font-bold mb-7">Eksempler</h2>
                                    </div>
                                    <div className="grid 2xl:grid-cols-2 gap-20 grid-cols-1">
                                        {eventData.map((post) => (
                                            <Example
                                                key={post.slug.current}
                                                title={post.title}
                                                imageSrc={post.image?.asset?.url || placeholderImg}
                                                imageAlt={post.alt}
                                                info={post.body || "No content available."}
                                                buttonText="Se mer"
                                                buttonLink={post.link || "#"}

                                            />
                                        ))}
                                        <Spotify
                                            title="Gjest hos Raushetspodden ved Tore Petterson"
                                            info="Lorem ipsum dolor sit amet..."
                                            buttonText="Se mer"
                                            buttonLink="#"
                                        />
                                    </div>
                                </section>

                                <Contact />
                        </div>
                    } />
                </Routes>
            </main>
        </>
    );
}

export default App;
