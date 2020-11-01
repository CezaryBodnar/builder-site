import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Realizations = () => {
    return (
        <div id={'realizations'} className="realisations-container">
            <h1 className="about-title">Realizacje</h1>
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
        </div>
    )
}

export default Realizations
