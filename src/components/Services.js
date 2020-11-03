import React from 'react'
import Contact from './Contact'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import './mediaquery.css';

const Services = () => {
    return (
        <div>
            <h1 className="about-title">Usługi</h1>
            <p className="about-text" style={{ margin: "0px 0px 0px 20px" }}>Nasza firma poza działanością budowlaną oferuje szeroką gamę usług powiązanych z budownictwem. Poniżej znajduje się oferta.</p>

            <p className="title-services">Maszyny do prac ziemnych:</p>
            <p className="about-text" style={{ margin: "0px 50px 30px 50px" }}>
                – Koparko-ładowarka JCB 4cx
            <br></br>
            – KOPARKO – Ładowarka 3CX Super
            <br></br>
            – Ładowarka teleskopowa z wymiennym osprzętem: łyżka , podnośnik koszowy, pług, zamiatarka;
            <br></br>
            – Koparka gąsienicowa JCB 220LC
            <br></br>
            – Samochody ciężarowe trzyosiowe z napędem 6×6.
            <br></br>
            – Drogi systemowe do poruszania się i prowadzenia robót w trudnym terenie jak bagna, trzęsawiska. Drogi systemowe nie wymagają wykonywania kosztownych nasypów i wykonywania wymiany gruntu.</p>

            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="realizations-content">
                        <img className="realization-image" src="koparka.jpeg" alt="" />
                        <img className="realization-image" src="ciezarowka.jpg" alt="" />
                        <img className="realization-image" src="koparka-gasienicowa.jpg" alt="" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>

            <p className="title-services">Usługi dźwigowe:</p>
            <p className="about-text" style={{ margin: "0px 50px 30px 50px" }}>
                – Żuraw samojezdny TEREX AC35L o udźwigu max 35t
                <br></br>
                – Zuraw stacjonarny
            </p>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="realizations-content">
                        <img className="realization-image" src="Samojezdny-zuraw-wiezowy.jpg" alt="" />
                        <img className="realization-image" src="zuraw-budowlany.jpg" alt="" />
                        <img className="realization-image" src="zuraw-samojezdny.jpg" alt="" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>

            <div className="title-services">Usługi transportowe:</div>
            <p className="about-text" style={{ margin: "0px 50px 30px 50px" }}>
                – Transport maszyn niskopodłogowy do 25t.
            <br></br>
            – Transport samochodem ciężarowym skrzyniowym do 24t
            <br></br>
            – Transport kruszyw, ziemi, gruzu innych materiałów sypkich samochodami wywrotkami 6×6
            <br></br>
            – Transport mieszanek betonowych
            </p>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="realizations-content">
                        <img className="realization-image" src="transport1.jpg" alt="" />
                        <img className="realization-image" src="betoniarka.jpg" alt="" />
                        <img className="realization-image" src="transport2.jpg" alt="" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>

            <p className="title-services">Beton towarowy</p>
            <p className="about-text" style={{ margin: "0px 50px 30px 50px" }}>Oferujemy betony klas od B10 do B35 w atrakcyjnych cenach wraz z transportem oraz usługą pompowania.</p>
            <p className="title-services" style={{ fontSize: "18px" }}>Produkcja mieszanek betonowych:</p>

            <p className="about-text" style={{ margin: "0px 50px 30px 50px" }}>
                - wytwórnia mieszanek betonowych sterowana komputerowo – wagowe dozowanie - wszystkich składników     mieszanki betonowej- wydajność około 25 m3/h
<br></br>
- węzeł betoniarski sterowany półautomatycznie
<br></br>
- samochód ciężarowy „gruszka” do transportu betonu
<br></br>
- samochód ciężarowy „pompo-gruszka” do transportu betonu oraz pompowania - mieszanek betonowych
<br></br>
- prasa do badania wytrzymałości próbek betonowych na ściskanie MATEST
<br></br>
- zestaw sit do badania uziarnienia kruszyw budowlanych
            </p>

            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="realizations-content">
                        <img className="realization-image" src="beton2.jpg" alt="" />
                        <img className="realization-image" src="wylewanie-betonu.jpeg" alt="" />
                        <img className="realization-image" src="wylewanie-betonu2.jpg" alt="" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>

            <Contact />
        </div>
    )
}

export default Services
