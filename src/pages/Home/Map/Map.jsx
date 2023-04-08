import React from 'react';
import {BiMap} from 'react-icons/bi';
import {BiEnvelope} from 'react-icons/bi';
import {FaFacebookF} from 'react-icons/fa';
import {TbLetterB} from 'react-icons/tb';
import {BsYoutube} from 'react-icons/bs';
import {TiSocialInstagram} from 'react-icons/ti';


const Map = () => {
    return (
        <section className='map'>
            <div className="container">
                <div className="map__contacts">
                    <h2 className="map__title">CONTACTS</h2>
                    <div className="map__info">
                        <div className="map__row">
                            <BiMap style={{color: '#79B282' }}/>
                            <div className='map__info-address'>
                                <span>Our address:</span> <br />
                                MO, city district Krasnogorsk, village Ilyinkoe, <br />
                                Experimental street, 10
                            </div>
                        </div>
                        <div className="map__row">
                            <BiEnvelope style={{color: '#79B282' }}/>
                            <div className='map__info-email'>
                                <span>Our mail:</span> <br />
                                auto.wash@gmail.com
                            </div>
                        </div>

                    </div>
                    <div className="map__contact">
                        <div className="map__row map__contact-row">
                            <button className='map__contact-btn btn' type='button'>BOOK A TABLE</button>
                            <div className='map__contact-info'>
                                <a href='tel:+7 (917) 510-57-59' className='map__contact-link'>+7 (917) 510-57-59</a>
                                <p className='map__contact-text'>Call or leave a request</p>
                            </div>
                        </div>

                    </div>
                    <div className="map__social">
                            <h3 className='map__social-title'>We are in social networks:</h3>
                            <div className='map__social-icons'>
                                <a className='map__social-icon'>
                                    <FaFacebookF />
                                </a>
                                <a className='map__social-icon'>
                                    <TbLetterB/>
                                </a>
                                <a className='map__social-icon'>
                                    <BsYoutube/>
                                </a>
                                <a className='map__social-icon'>
                                    <TiSocialInstagram/>
                                </a>
                            </div>
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default Map;