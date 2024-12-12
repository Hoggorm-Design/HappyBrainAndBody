import './index.css';
import Biography from "./components/Biography.tsx";
import ContentWithImage from "./components/ContentWithImage.tsx";
import hvaEqImg from "./assets/hvaeq.jpg";
import eqTerapiImg from "./assets/eqterapi.svg"
import foredragImg from "./assets/foredrag.jpg"
import placeholderImg from "./assets/placeholder.png";
import AMaleri from "./assets/AMaleri.jpg"
import Example from "./components/Example.tsx";
import Spotify from "./components/Spotify.tsx";
import Contact from "./components/Contact.tsx";

function App() {

    return (
        <>
            <main className="relative top-[-5px] w-screen">
                <section className="flex items-center justify-between px-[30px] py-[80px] 2xl:px-[100px] bg-white">
                    <div className="w-full md:w-1/2">
                        <img src={AMaleri} alt="Hva er EQ?" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                    <div className="w-full md:w-1/2 pl-[30px]">
                        <h2 className="text-xl font-bold mb-4">FORNØYD HJERNE & KROPP
                            Hvordan hjelpe deg selv</h2>
                        <p className="text-md">
                            Strever du? Føler deg kronisk feil, redd, avvist, utenfor? Indre smerte? Kanskje føler du deg syk? Eller flat? Jakter på løsninger? Ingen som skjønner? Been there!
                            <br/>
                            <br/>
                            Jeg er lege og EQ-terapeut, som tilbyr foredrag, EQ-terapi, og skriver selvhjelpsboka jeg skulle ønske fantes da jeg var ung. Utad «flink og vellykket», men inni føltes det vondt og skamfullt å være meg. Gjennom tre års EQ-terapistudier lærte jeg noe viktig, som verken medisinstudiet, legespesialisering,  doktorgrad, 31 års legeekspertise, eller min livserfaring kunne hjelpe for. Noe som ga et astronomisk løft i min livskvalitet, evne til selvhjelp, og legekompetanse. Dette ønsker jeg å lære videre.

                        </p>
                        <p className="text-md">
                            Jeg er spesialist i klinisk farmakologi (rus- og legemidler) og jobber til daglig ved Oslo universitetssykehus som overlege, rettstoksikolog (rus- og forgiftningsekspert for rettssystemet) og forsker.
                        </p>
                    </div>
                </section>

                <Biography />
                <ContentWithImage title={"Hva er EQ?"} imageSrc={hvaEqImg} imageAlt={"Hva er eq?"} reverse={false}
                                  bgColour={"white"}>
                    <p className="text">Visste du at de fleste handlinger styres av dine sanser/følelser, og hjernens
                        gjetting av betydning? Og at hjernens hovedoppgave er å bevare din energi og helse? Hvordan klarer
                        hjernen å gjette hva du trenger, når den ligger inni hodeskallen? Nettopp! Hjernen trenger godt
                        samarbeid med kroppens sanser/følelser.
                    </p>
                    <p className="text">Godt hjerne-kropp-samarbeid kalles emosjonell intelligens, EQ. Forskning og
                        erfaring viser at grad av EQ er avgjørende (og kanskje viktigere enn IQ) for hvordan det går med
                        oss i livet. </p>
                    <p className="text">Det er lett å øke din EQ. Og aldri for sent. Hvis du vil.</p>
                    <p className="text">Visste du at kronisk emosjonelt stress er en viktig underliggende årsak til mange
                        kroniske folkesykdommer? Og at Verdens Helseorganisasjon har definert dette som vår tids
                        helseepidemi?</p>
                </ContentWithImage>

                {/* Other sections */}
                <ContentWithImage title={"EQ-terapi"} imageSrc={eqTerapiImg} imageAlt={"EQ-terapi"} reverse={true}
                                  bgColour={"#F3F7F9"}>
                    <ul className="list-disc ml-5 mb-4 space-y-2 font-bold">
                        <li className={"text"}>Er du ubetinget glad i deg selv?</li>
                        <li className={"text"}>Er du der for deg selv når du trenger det?</li>
                        <li className={"text"}>Lengter du etter å ha det godt inni deg? Akkurat slik du er?</li>
                        <li className={"text"}>Raskere finne tilbake til energi, indre balanse og helse, når livet byr på
                            vonde hendelser?
                        </li>
                    </ul>

                    <p className={"text"}> Ved EQ-terapi møter du en trygg empatisk EQ-terapeut som møter deg der du er.
                        Som støtter deg mens du flytter oppmerksomheten fra hodet (tanker, de gjetter ofte feil) til
                        kroppen (sanser og følelser, dine fakta). Som lytter, uten å gi råd. Som ubetinget støtter deg,
                        mens du finner din vei. Du får øve på å skille kroppslige sensasjoner/følelser fra tanker, og
                        lærer å stille bedre spørsmål om hva kroppen din prøver å fortelle deg. </p>
                </ContentWithImage>

                <ContentWithImage title={"Foredrag"} imageSrc={foredragImg} imageAlt={"Foredrag"} reverse={false}
                                  bgColour={"white"}>
                    <p className={"text"}>Norge har ett av verdens beste helsevesen. Likevel går hundretusener av
                        pasienter rundt og lider, av kroniske "folkesykdommer" (se Figur 1), tross iverksatt behandling.
                        «Driver vi egentlig med symptomatisk overflatebehandling, og lar pasientene løpe på en ytrestyrt
                        offer-tredemølle på jakt etter helse?» spør overlege PhD spesialist i klinisk farmakologi Merete
                        Vevelstad. Hun anbefaler at pasienter får lære enkel og virkningsfull selvhjelp, som kan gjøre dem
                        i stand til selv å varig bedre både sin fysiske og psykiske helse, og sine relasjoner.</p>
                    <p className={"text"}> I mitt oversiktsforedrag "Fornøyd hjerne og kropp - hvordan hjelpe deg selv",
                        gis en forskningsbasert og allment forståelig oversikt over hvor genialt hjernen og kroppens
                        følelser/sanser samarbeider, for å bevare din helse, energi og livsglede. Og hvordan kroppen viser
                        veien til det du trenger. Og hvordan du selv kan bedre dette samarbeidet. Selvhjelpen er gratis,
                        uten bivirkninger, har god effekt, er lett å lære, kan gjøres hvor som helst, og det er aldri for
                        sent. </p>
                </ContentWithImage>
                <section className={"px-[30px] py-[80px] 2xl:px-[100px] bg-[#F3F7F9]"}>
                    <h2 className="header font-bold mb-7">Eksempler</h2>
                    <div className="grid 2xl:grid-cols-2 gap-20 grid-cols-1 ">
                        <Example
                            title="Foredrag Skøyen atrium 2024"
                            imageSrc={placeholderImg}
                            imageAlt="Foredrag Skøyen"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,
                        porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh.
                        Aliquam erat volutpat.
                        Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit
                        ultrices eu nec lorem.
                        Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec,
                        tempor neque."
                            buttonText="Se mer"
                            buttonLink="#"
                        />
                        <Example
                            title="Foredrag Skøyen atrium 2024"
                            imageSrc={placeholderImg}
                            imageAlt="Foredrag Skøyen"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,
                        porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh.
                        Aliquam erat volutpat.
                        Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit
                        ultrices eu nec lorem.
                        Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec,
                        tempor neque."
                            buttonText="Se mer"
                            buttonLink="#"
                        />
                        <Example
                            title="Foredrag Skøyen atrium 2024"
                            imageSrc={placeholderImg}
                            imageAlt="Foredrag Skøyen"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,
                        porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh.
                        Aliquam erat volutpat.
                        Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit
                        ultrices eu nec lorem.
                        Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec,
                        tempor neque."
                            buttonText="Se mer"
                            buttonLink="#"
                        />
                        <Spotify
                            title="Gjest hos Raushetspodden ved Tore Petterson"
                            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,
                        porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh.
                        Aliquam erat volutpat.
                        Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit
                        ultrices eu nec lorem.
                        Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec,
                        tempor neque."
                            buttonText="Se mer"
                            buttonLink="#"
                        />
                    </div>
                </section>
                <Contact />
            </main>
        </>
    );
}

export default App;
