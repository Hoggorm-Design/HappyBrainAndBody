import './App.css'
// import ImageWithText from "./components/ImageWithText";
import ContentWithImage from "./components/ContentWithImage";
import Biography from "./components/Biography";
import Example from "./components/Example";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Spotify from "./components/Spotify";

// import foredragImg from "./assets/images/foredrag.jpg";
// import eqImg from "./assets/images/eq-terapi.png";
// import backgroundImg from "./assets/images/background.jpg";
// import foredragSkoyen from "./assets/images/foredrag-skoyen.png";
// import tittelFoto from "./assets/images/tittelfoto_vevelstad.webp";

function App() {


  return (
      <>
      {/*<ImageWithText button1Link="#foredrag" button2Link="#eq-terapi" />*/}
          <main>
              <section className="biography-container" id="biography">
                  <Biography/>
              </section>
              <div className="horizontalLine"></div>
              {/*<section className="content-with-image-container">*/}
              {/*    <ContentWithImage*/}
              {/*        title="Foredrag"*/}
              {/*        buttonText="Min fagbakgrunn"*/}
              {/*        buttonLink="#biography"*/}
              {/*        imageSrc={foredragImg}*/}
              {/*        imageAlt="foredrag"*/}
              {/*        reverse={false}*/}
              {/*        id="foredrag"*/}
              {/*    >*/}
              {/*        <p>*/}
              {/*            Norge har ett av verdens beste helsevesen. Likevel går*/}
              {/*            hundretusener av pasienter rundt og lider, av kroniske*/}
              {/*            "folkesykdommer", tross iverksatt behandling. «Driver vi*/}
              {/*            egentlig med symptomatisk overflatebehandling, og lar*/}
              {/*            pasientene løpe på en ytrestyrt offer-tredemølle på jakt*/}
              {/*            etter helse?» spør overlege PhD spesialist i klinisk*/}
              {/*            farmakologi Merete Vevelstad. Hun anbefaler at pasienter*/}
              {/*            får lære enkel og virkningsfull selvhjelp, som kan gjøre*/}
              {/*            dem i stand til selv å varig bedre både sin fysiske og*/}
              {/*            psykiske helse, og sine relasjoner.*/}
              {/*        </p>*/}

              {/*        <p>*/}
              {/*            I mitt oversiktsforedrag "Fornøyd hjerne og kropp -*/}
              {/*            hvordan hjelpe deg selv", gis en forskningsbasert og*/}
              {/*            allment forståelig oversikt over hvor genialt hjernen og*/}
              {/*            kroppens følelser/sanser samarbeider, for å bevare din*/}
              {/*            helse, energi og livsglede. Og hvordan kroppen viser*/}
              {/*            veien til det du trenger. Og hvordan du selv kan bedre*/}
              {/*            dette samarbeidet. Selvhjelpen er gratis, uten*/}
              {/*            bivirkninger, har god effekt, er lett å lære, kan gjøres*/}
              {/*            hvor som helst, og det er aldri for sent.*/}
              {/*        </p>*/}
              {/*    </ContentWithImage>*/}
              {/*</section>*/}
              {/*<div className="horizontalLine"></div>*/}
              {/*<section className="content-with-image-container">*/}
              {/*    <ContentWithImage*/}
              {/*        title="EQ-terapi"*/}
              {/*        buttonText="Hva er EQ?"*/}
              {/*        buttonLink="#hva-er-eq"*/}
              {/*        imageSrc={eqImg}*/}
              {/*        imageAlt="eq-terapi"*/}
              {/*        reverse={true}*/}
              {/*        id="eq-terapi"*/}
              {/*    >*/}
              {/*        <ul>*/}
              {/*            <li>Er du ubetinget glad i deg selv?</li>*/}
              {/*            <li>Er du der for deg selv når du trenger det?</li>*/}
              {/*            <li>*/}
              {/*                Lengter du etter å ha det godt inni deg? Akkurat*/}
              {/*                slik du er?*/}
              {/*            </li>*/}
              {/*            <li>*/}
              {/*                Raskere finne tilbake til energi, indre balanse og*/}
              {/*                helse, når livet byr på vonde hendelser?*/}
              {/*            </li>*/}
              {/*        </ul>*/}

              {/*        <p>*/}
              {/*            Ved EQ-terapi møter du en trygg empatisk EQ-terapeut som*/}
              {/*            møter deg der du er. Som støtter deg mens du flytter*/}
              {/*            oppmerksomheten fra hodet (tanker, de gjetter ofte feil)*/}
              {/*            til kroppen (sanser og følelser, dine fakta). Som*/}
              {/*            lytter, uten å gi råd. Som ubetinget støtter deg, mens*/}
              {/*            du finner din vei. Du får øve på å skille kroppslige*/}
              {/*            sensasjoner/følelser fra tanker, og lærer å stille bedre*/}
              {/*            spørsmål om hva kroppen din prøver å fortelle deg.*/}
              {/*        </p>*/}
              {/*    </ContentWithImage>*/}
              {/*</section>*/}
              {/*<div className="horizontalLine"></div>*/}
              {/*<section className="content-with-image-container">*/}
              {/*    <ContentWithImage*/}
              {/*        title="Hva er EQ?"*/}
              {/*        buttonText="EQ-terapi"*/}
              {/*        buttonLink="#eq-terapi"*/}
              {/*        imageSrc={backgroundImg}*/}
              {/*        imageAlt="hva er eq?"*/}
              {/*        reverse={false}*/}
              {/*        id="hva-er-eq"*/}
              {/*    >*/}
              {/*        <p>*/}
              {/*            Visste du at de fleste handlinger styres av dine*/}
              {/*            sanser/følelser, og hjernens gjetting av betydning? Og*/}
              {/*            at hjernens hovedoppgave er å bevare din energi og*/}
              {/*            helse? Hvordan klarer hjernen å gjette hva du trenger,*/}
              {/*            når den ligger inni hodeskallen? Nettopp! Hjernen*/}
              {/*            trenger godt samarbeid med kroppens sanser/følelser.*/}
              {/*        </p>*/}
              {/*        <p>*/}
              {/*            Godt hjerne-kropp-samarbeid kalles emosjonell*/}
              {/*            intelligens, EQ. Forskning og erfaring viser at grad av*/}
              {/*            EQ er avgjørende (og kanskje viktigere enn IQ) for*/}
              {/*            hvordan det går med oss i livet.*/}
              {/*        </p>*/}
              {/*        <p>*/}
              {/*            Det er lett å øke din EQ. Og aldri for sent. Hvis du*/}
              {/*            vil.*/}
              {/*        </p>*/}
              {/*        <p>*/}
              {/*            Visste du at kronisk emosjonelt stress er en viktig*/}
              {/*            underliggende årsak til mange kroniske folkesykdommer?*/}
              {/*            Og at Verdens Helseorganisasjon har definert dette som*/}
              {/*            vår tids helseepidemi?*/}
              {/*        </p>*/}
              {/*    </ContentWithImage>*/}
              {/*</section>*/}
              {/*<div className="horizontalLine"></div>*/}
              {/*<section className="examples-container">*/}
              {/*    <h2>Eksempler</h2>*/}
              {/*    <div className="examples-cards-container">*/}
              {/*        <Example*/}
              {/*            title="Foredrag Skøyen atrium 2024"*/}
              {/*            imageSrc={foredragSkoyen}*/}
              {/*            imageAlt="Foredrag Skøyen"*/}
              {/*            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce*/}
              {/*      consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,*/}
              {/*      porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh. Aliquam erat volutpat.*/}
              {/*      Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit ultrices eu nec lorem.*/}
              {/*      Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec, tempor neque."*/}
              {/*            buttonText="Se mer"*/}
              {/*            buttonLink="#"*/}
              {/*        />*/}
              {/*        <Example*/}
              {/*            title="Webinar 2023"*/}
              {/*            imageSrc={foredragSkoyen}*/}
              {/*            imageAlt="Foredrag Skøyen"*/}
              {/*            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce*/}
              {/*      consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,*/}
              {/*      porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh. Aliquam erat volutpat.*/}
              {/*      Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit ultrices eu nec lorem.*/}
              {/*      Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec, tempor neque."*/}
              {/*            buttonText="Se mer"*/}
              {/*            buttonLink="#"*/}
              {/*        />*/}
              {/*        <Example*/}
              {/*            title="Blogginnlegg Ekspertsykehuset Oslo universitetssykehus 2022"*/}
              {/*            imageSrc={tittelFoto}*/}
              {/*            imageAlt="Blå hjerne som løfter en tung vekt"*/}
              {/*            info="I følge nyere forskning er kronisk emosjonelt stress en viktig underliggende årsak til svært mange kroniske lidelser. Typisk er en langvarig følelse av mistrivsel, utilstrekkelighet, uro, skam og/eller frykt. Slikt kronisk følelsesmessig stress har ofte sitt utgangspunkt i negativt indre selvsnakk, knyttet til forestillinger vi har om fortid eller fremtid, og ikke til her-og-nå. Stresset er altså noe vi ubevisst påfører oss selv, og er ofte knyttet til lav egenkjærlighet."*/}
              {/*            buttonText="Les mer"*/}
              {/*            buttonLink="https://www.oslo-universitetssykehus.no/avdelinger/klinikk-for-laboratoriemedisin/avdeling-for-rettsmedisinske-fag/kroniske-helseplager-kan-enkel-hjernetrening-mot-stress-vere-en-missing-link/"*/}
              {/*        />*/}
              {/*        <Spotify*/}
              {/*            title="Gjest hos Raushetspodden med Tore Petterson"*/}
              {/*            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce*/}
              {/*      consequat laoreet orci ut aliquam. Donec dolor ipsum, pretium id erat id,*/}
              {/*      porttitor pharetra sapien. Duis laoreet ut nisi eu scelerisque. Morbi non blandit nibh. Aliquam erat volutpat.*/}
              {/*      Vestibulum et nunc at elit commodo posuere non ut dolor. Integer nec quam ut ex blandit ultrices eu nec lorem.*/}
              {/*      Praesent aliquet et erat non vestibulum. Integer non libero consequat, finibus elit nec, tempor neque."*/}
              {/*            buttonText="Hør mer"*/}
              {/*            buttonLink="https://open.spotify.com/episode/0Jis0INFCA33ffLmTxBwm8?si=wpmUTWrAT1-wOAQLcI_2lw"*/}
              {/*        />*/}
              {/*    </div>*/}
              {/*</section>*/}
              {/*<div className="horizontalLine"></div>*/}
              {/*<Contact />*/}
              {/*<div className="horizontalLine"></div>*/}

              {/*<section className="iframe-container">*/}
              {/*    <iframe*/}
              {/*        title="google maps"*/}
              {/*        className="iframe"*/}
              {/*        loading="lazy"*/}
              {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.216299624201!2d10.7607863772032!3d59.96173546023999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464171e334986e47%3A0xd49a34f3aeb5e59!2sKorsvoll%20Terrasse%201B%2C%200881%20Oslo!5e0!3m2!1sno!2sno!4v1724175755045!5m2!1sno!2sno"*/}
              {/*    ></iframe>*/}
              {/*</section>*/}
          </main>
          <Footer />
      </>
  )
}

export default App
