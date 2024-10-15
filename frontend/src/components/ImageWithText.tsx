// import "../styles/imagewithtext.css"
// import backgroundImage from "../assets/images/background.jpg";
// import backgroundImageMobile from "../assets/images/background_mobile.jpeg";

interface ImageWithTextProps {
    button1Link: string,
    button2Link: string
}


const ImageWithText = ({button1Link, button2Link}: ImageWithTextProps) => {
    return (
        <div className="container">
            {/*Bakgrunnsbilde for desktop */}
            {/*<img*/}
            {/*    src={backgroundImage}*/}
            {/*    alt="Background"*/}
            {/*    className="background-image desktop-bg"*/}
            {/*    loading="eager"*/}
            {/*/>*/}

            {/*<img*/}
            {/*    src={backgroundImageMobile}*/}
            {/*    alt="Background"*/}
            {/*    className="background-image mobile-bg"*/}
            {/*    loading="eager"*/}
            {/*/>*/}

            <div className="overlay">
                <div className="text-container">
                    <p><strong>FORNØYD HJERNE & KROPP</strong></p>
                    <h1>Hvordan hjelpe deg selv</h1>
                    <p>
                        Strever du? Føler deg kronisk feil, redd, avvist, utenfor? Indre
                        smerte? Kanskje føler du deg syk? Eller flat? Jakter på
                        løsninger? Ingen som skjønner? Been there!
                    </p>
                    <p>
                        Jeg er lege og EQ-terapeut, som tilbyr foredrag, EQ-terapi, og
                        skriver selvhjelpsboka jeg skulle ønske fantes da jeg var ung.
                        Utad «flink og vellykket», men inni føltes det vondt og
                        skamfullt å være meg. Gjennom tre års EQ-terapistudier lærte jeg
                        noe viktig, som verken medisinstudiet, legespesialisering,
                        doktorgrad, 31 års legeekspertise, eller min livserfaring kunne
                        hjelpe for. Noe som ga et astronomisk løft i min livskvalitet,
                        evne til selvhjelp, og legekompetanse. Dette ønsker jeg å lære
                        videre.
                    </p>
                    <p>
                        Jeg er spesialist i klinisk farmakologi (rus- og legemidler) og
                        jobber til daglig ved Oslo universitetssykehus som overlege,
                        rettstoksikolog (rus- og forgiftningsekspert for rettssystemet)
                        og forsker.
                    </p>
                </div>
                <div className="button-container">
                    <a href={button1Link}>
                        <button>Foredrag</button>
                    </a>
                    <a href={button2Link}>
                        <button>EQ-terapi</button>
                    </a>
                </div>
            </div>
        </div>

    )
}
export default ImageWithText;