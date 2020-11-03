import React from 'react'
import Contact from './Contact';
import Realizations from './Realizations';
import HeroCarousel from './Carousel';
import './mediaquery.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            opacity: "50%",
            marginLeft: "40px",
            marginRight: "40px"
        }}
    />
);
const Home = () => {

    return (
        <div>
            <HeroCarousel />

            <div className="about-container">
                <h1 className="about-title">O firmie</h1>
                <div className="about-content">
                    <div className="left">
                        <p className="about-text">Przedsiębiorstwo Budowlane Bob Budowniczy istnieje od 1975 r. Początkowo profil działalności opierał się na budowie budynków mieszkalnych jednorodzinnych i remontach.</p>

                        <p className="about-text">Przez okres 45 lat firma sukcesywnie rozwijała się inwestując w maszyny budowlane, zatrudniając coraz większą liczbę pracowników, podejmując coraz większe wyzwania.</p>

                        <p className="about-text">Posiadamy duże doświadczenie praktyczne oraz bardzo dobre i nowoczesne zaplecze techniczne. Naszymi klientami są zarówno osoby prywatne jak i duże firmy. Do każdego zlecenia podchodzimy indywidualnie. Zapewniamy fachową pomoc w adaptacji wnętrz oraz doborze, zakupie i transporcie materiałów.

                            Gwarantujemy uczciwość (brak ukrytych opłat), terminowość oraz wysoką jakość wykonywanych usług przy jednoczesnym zachowaniu konkurencyjnych cen.</p>

                        <p className="about-text">Obecnie firma jest w stanie zrealizować duże inwestycje jak wielorodzinne budynki mieszkalne, budynki użyteczności publicznej itp. Świadczone usługi budowlane skierowane są głównie na rynki Węgorzewa, Giżycka, Rynu, Kętrzyna i okolic.</p>
                        <p className="about-text" style={{ textAlign: "center" }}>Zapraszamy! </p>
                    </div>
                    <div className="right">
                        <img className="about-image" src="tablica_unijna.jpg" alt="bshdavs" />
                    </div>
                </div>
            </div>

            <ColoredLine color="#747474" />
            <Realizations />
            <Contact />
        </div >
    )
}

export default Home
