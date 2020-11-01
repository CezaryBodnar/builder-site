import React from 'react'
import Contact from './Contact'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Construction = () => {
    return (
        <div>
            <h1 className="about-title">Budownictwo</h1>
            <div className="about-text" style={{ margin: "0px 50px 50px 50px" }}>Nasza firma wykonuje wszelkiego typu budynki mieszkalne oraz użytkowe. Najczęstszymi projektami, które wykonujemy to:
                    <br></br>
                    - Budownictwo mieszkalne wielorodzinne
                    <br></br>
                    - Budynki usługowo-mieszkalne
                    <br></br>
                    - Obiekty inżynierii lądowo-wodnej
                    <br></br>
                    - Obiekty użyteczności publicznej
                    <br></br>
                    - Budynki biurowe
                    <br></br>
                    - Budynki magazynowe
                    <br></br>
                    - Budynki garażowe
                    <br></br>
                    - Budynki przemysłowe
                    <br></br>
                    - Budynki kultu religijnego
                    <br></br>
                    - Budynki mieszkalne szeregowe
                    <br></br>
                    - Budynki jednorodzinne
                    <br></br>
                <br></br>

                    A także modernizacje, przebudowy, ocieplenia obiektów budowlanych, roboty ziemne. Jesteśmy w stanie wykonać dowolny

                    obiekt budowlany pod klucz w krótkim terminie wraz z: urządzeniem terenu, drogami dojazdowymi,

                    miejscami postojowymi, zielenią, placami zabaw dla dzieci itp.

            </div>
            <SimpleReactLightbox>
                <SRLWrapper>
                    <div className="realizations-content">
                        <img className="realization-image" src="3.jpg" alt="" />
                        <img className="realization-image" src="5.jpg" alt="" />
                        <img className="realization-image" src="6.jpg" alt="" />
                        <img className="realization-image" src="8.jpg" alt="" />
                        <img className="realization-image" src="9.jpg" alt="" />
                        <img className="realization-image" src="1.jpg" alt="" />
                    </div>
                </SRLWrapper>
            </SimpleReactLightbox>
            <Contact />
        </div>
    )
}

export default Construction
