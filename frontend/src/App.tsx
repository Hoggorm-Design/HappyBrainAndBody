import './index.css';
import Biography from "./components/Biography.tsx";
import ContentWithImage from "./components/ContentWithImage.tsx";
import placeholderImg from "./assets/placeholder.png";
import AMaleri from "./assets/AMaleri.jpg";
import Example from "./components/Example.tsx";
import Spotify from "./components/Spotify.tsx";
import usePost2 from "./hooks/useContent1.ts";
import usePost3 from "./hooks/useContent2.ts";
import useEvent from "./hooks/useEvent.ts";
import usePost4 from "./hooks/useContent3.ts";
import Navbar from "./components/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog.tsx";
import Header from "./components/Header.tsx";
import logo from "./assets/logo.png"
import Contact from "./components/Contact.tsx";

function App() {
    const { postData: post2Data } = usePost2();
    const { postData: post3Data } = usePost3();
    const { eventData } = useEvent();
    const { postData: post4Data } = usePost4();

    const firstPost = post2Data[0];
    const secondPost = post3Data;
    const fourthPost = post4Data;

    return (
        <>
            <main className="relative top-[-5px] w-screen">
                <Header logoSrc={logo} title="Happy Brain And Body" />
                <Navbar />
                <Routes>
                    <Route path="/blog" element={<Blog />} />

                    <Route path="/" element={
                        <div>
                            <section className="flex items-center justify-between px-[30px] py-[80px] 2xl:px-[100px] bg-white">
                                <div className="w-full md:w-1/2">
                                    <img src={AMaleri} alt="Hva er EQ?" className="w-full h-auto object-cover rounded-lg" />
                                </div>
                                <div className="w-full md:w-1/2 pl-[30px]">
                                    <h2 className="text-xl font-bold mb-4">FORNØYD HJERNE & KROPP Hvordan hjelpe deg selv</h2>
                                    <p className="text-md">
                                        Strever du? Føler deg kronisk feil, redd, avvist, utenfor? Indre smerte? Kanskje føler du deg syk? Eller flat? Jakter på løsninger? Ingen som skjønner? Been there!
                                        <br />
                                        <br />
                                        Jeg er lege og EQ-terapeut...
                                    </p>
                                    <p className="text-md">
                                        Jeg er spesialist i klinisk farmakologi...
                                    </p>
                                </div>
                            </section>
                            <Biography />
                            {firstPost && (
                                <ContentWithImage
                                    title={firstPost.title}
                                    imageSrc={firstPost.mainImage?.asset?.url || placeholderImg}
                                    imageAlt={firstPost.title}
                                    reverse={false}
                                    bgColour={"white"}
                                >
                                    <p className="text">{firstPost.body}</p>
                                </ContentWithImage>
                            )}

                            {secondPost && (
                                <ContentWithImage
                                    title={secondPost.title}
                                    imageSrc={secondPost.mainImage?.asset?.url || placeholderImg}
                                    imageAlt={secondPost.title}
                                    reverse={true}
                                    bgColour={"#F3F7F9"}
                                >
                                    <p className="text">{secondPost.body}</p>
                                </ContentWithImage>
                            )}

                            {fourthPost && (
                                <ContentWithImage
                                    title={fourthPost.title}
                                    imageSrc={fourthPost.mainImage?.asset?.url}
                                    imageAlt={fourthPost.title}
                                    reverse={false}
                                    bgColour={"white"}
                                >
                                    <p className="text">{fourthPost.body}</p>
                                </ContentWithImage>
                            )}

                            <section className={"px-[30px] py-[80px] 2xl:px-[100px] bg-[#F3F7F9]"}>
                                <h2 className="header font-bold mb-7">Eksempler</h2>
                                <div className="grid 2xl:grid-cols-2 gap-20 grid-cols-1">
                                    {eventData.map((post) => (
                                        <Example
                                            key={post.slug.current}
                                            title={post.title}
                                            imageSrc={post.image?.asset?.url || placeholderImg}
                                            imageAlt={post.title}
                                            info={post.textContent || "No content available."}
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
                            <Contact></Contact>
                        </div>
                    } />
                </Routes>
            </main>
        </>
    );
}

export default App;
