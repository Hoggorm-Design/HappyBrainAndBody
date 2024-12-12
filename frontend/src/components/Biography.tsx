import pb from '../assets/pb.png';


export default function Biography() {


    return (
        <>
            <section className={"flex flex-col 2xl:flex-row gap-10 items-center justify-around bg-[#F3F7F9]  h-full w-full p-[30px] 2xl:px-[100px] pt-20"}>
            {/* Image div */}
                <div className={"w-full 2xl:w-auto flex justify-start items-center"}>
                <img src={pb} alt={"pb"} className="w-[30vw] max-w-[300px]"/>
                </div>

                {/* text flex wrapper div */}
                <div className={"flex flex-col justify-center gap-5  h-3/5 xl:h-full "}>
                    <div>
                        <h2 className={"header font-bold"}>Merete Vevelstad </h2>
                        <h3 className="sub-header">Overlege, PhD</h3>
                    </div>


                    <div className={"mt-5 text"}>
                        <p> Merete Vevelstad er overlege, PhD, spesialist i klinisk farmakologi,
                            med doktorgrad om risikofaktorer for dødelig
                            rusmiddelforgiftning. Utdannet lege i 1993 ved Universitetet i Oslo.
                            </p>
                        <p> Sykehuslege frem til 1998,
                            har siden jobbet fulltid som rus-, forgiftnings- og påvirkningsekspert for
                            rettssystemet, og med undervisning og veiledning. Stor interesse for hjernen,
                            bevissthet, følelser, relasjoner og mindfulness/meditasjon.</p>
                    </div>

                </div>
            </section>

        </>
    )
}