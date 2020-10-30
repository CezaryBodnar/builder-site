import React from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    width: "70vw",
    height: "70vh",
}

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
const Contact = () => {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDuJaa5c6bZznKQiE7UNKmqgLzuCG6glAI"
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading";

    return (
        <div id={'contact'} className="contact-container">
            <h1 className="about-title">KONTAKT</h1>
            <h3 style={{ textAlign: "center" }}>Prywatne przedsiębiorstwo budowlane Bob Budowniczy</h3>
            <div className="contact-content">
                <div className="contact-right-text">
                    <span className="title-bold">Adres:</span>
                    <span className="text-medium">ul. Uliczkowa 69</span>
                    <span className="text-medium">11-600 Węgorzewo</span>
                    <span className="text-medium">NIP: 811-120-21-37</span>

                    <span className="title-bold">Telefony:</span>
                    <span className="text-medium">48 427 11 23</span>
                    <span className="text-medium">697 169 129</span>

                    <span className="title-bold">E-mail:</span>
                    <span className="text-medium">xsimi01x@gmail.com</span>
                    <span className="text-medium">czareczek90@vp.pl</span>
                    <span className="text-medium">biuro@simi.com - księgowość, kadry</span>
                </div>
                <form className="contact-form">
                    <input className="contact-name" type="text" placeholder="Imie i nazwisko" />
                    <input className="contact-name" type="email" placeholder="E-mail" />
                    <textarea className="contact-textarea" name="" id="" cols="30" rows="10" placeholder="Treść wiadomości ..."></textarea>

                    <div className="klauzula"><input type="checkbox" style={{ marginRight: "5px" }} />Wyrażam zgodę na przesłanie oferty oraz przetwarzanie i przechowywanie moich danych osobowych w celach marketingowych, zgodnie z Ustawą o ochronie danych osobowych z dnia 29 sierpnia 1997 r. więcej...</div>
                    <button className="sendBtn">Wyślij</button>
                </form>
            </div>
            <ColoredLine color="#747474" />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={{ lat: 54.201063, lng: 21.748422 }}>
                    <Marker position={{ lat: 54.201063, lng: 21.748422 }} />
                </GoogleMap>
            </div>
        </div>
    )
}

export default Contact
