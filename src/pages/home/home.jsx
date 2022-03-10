import React from 'react';
import './home.css';
import {SiHandshakeProtocol} from 'react-icons/si';
import watches from '../../images/heroImg.png';
import watch from '../../images/watch.png';
import watch1 from '../../images/watch1.png';
import watch2 from '../../images/watch2.png';
import watch3 from '../../images/watch3.png';
import watch4 from '../../images/watch4.png';
import watch5 from '../../images/watch5.png';
import watch6 from '../../images/watch6.png';
import watch7 from '../../images/watch7.png';
import event from '../../images/event.jpeg';

export default function home() {
  return (
    <div>
        <section className='hero'>
            <div className="row">
                <div className="col-sm-6">
                    <h1 style={{"fontFamily": "var(--italic)"}} className="hero-title"><SiHandshakeProtocol />Vigilate</h1>
                    <br />
                    <button className='redBtn Btn'>Shop now</button> &nbsp;&nbsp;&nbsp;
                    <button className='whiteBtn Btn'>Explore more</button>
                </div>
                <div className="col-sm-6 mx-auto text-center">
                    <img src={watches} alt="watches" className='img-fluid' style={{"marginTop": "16%"}} />
                </div>
            </div>
        </section>

        <section className="offer">
            <div className="row">
                <div className="col-sm-6">
                    <h1>
                        Watch week special offer flat 50% off.
                    </h1>
                </div>
                <div className="col-sm-6 text-center mx-auto my-auto">
                    <button className='blackBtn Btn'>Sign up</button> &nbsp;&nbsp;
                    <button className='whiteBtn Btn'>Learn more</button>
                </div>
            </div>
        </section>


        <section className='marquee'>
            <marquee width="100%" direction="left" height="100px">
                <span className='fancy'>FLAUNT&nbsp;&nbsp; YOUR&nbsp;&nbsp; STYLE</span> &nbsp;&nbsp; 
                <span className='non-fancy'>FLAUNT YOUR STYLE</span> &nbsp;&nbsp; 
                <span className='fancy'>FLAUNT&nbsp;&nbsp; YOUR&nbsp;&nbsp; STYLE</span> &nbsp;&nbsp; 
                <span className='non-fancy'>FLAUNT YOUR STYLE</span>&nbsp; &nbsp;
                <span className='fancy'>FLAUNT&nbsp;&nbsp; YOUR&nbsp;&nbsp; STYLE</span>    &nbsp;&nbsp;  
                <span className='non-fancy'>FLAUNT YOUR STYLE</span> &nbsp;&nbsp; 
                <span className='fancy'>FLAUNT&nbsp;&nbsp; YOUR&nbsp;&nbsp; STYLE</span> &nbsp;&nbsp; 
                <span className='non-fancy'>FLAUNT YOUR STYLE</span>&nbsp; &nbsp;
                <span className='fancy'>FLAUNT&nbsp;&nbsp; YOUR&nbsp;&nbsp; STYLE</span>            
            </marquee>
        </section>
        
        <section className="best-sellers">
            <h1 className='section-header text-center'>BEST SELLERS.</h1>
            <div className="row">
                <div className="col-sm-4">
                <div class="card">
                    <img src={watch} class="card-img-top" alt="watch" />
                    <div class="card-body">
                        <h5 class="card-title">Torgeon Sports wear</h5>
                        <h5 className='text-muted'>$299 &nbsp; | &nbsp; Sports Wear</h5>
                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <div className='mx-auto text-center'>
                            <a href="#" class="Btn btn redBtn">Shop now</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watches} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Lexun smart watch combo</h5>
                            <h5 className='text-muted'>$999 &nbsp; | &nbsp; Duo Edition</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watch1} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Classic Vintage - Baige</h5>
                            <h5 className='text-muted'>$599 &nbsp; | &nbsp; Classic</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="event">
            <div className="row">
                <div className="col-sm-6 my-auto">
                    <h1>LIVE EVENT</h1>
                    <h1 className='text-black'>JOIN THE FITNESS WEEK</h1>
                    <button className="Btn whiteBtn">Join event</button> &nbsp; <button className='Btn blackBtn'>Buy watch</button>
                </div>
                <div className="col-sm-6">
                    <img src={event} alt="event" className='img-fluid' style={{"border-radius": "2rem"}} />
                </div>
            </div>
        </section>

        <section className="best-sellers">
            <h1 className='section-header text-center'>TRENDING.</h1>
            <div className="row">
                <div className="col-sm-4">
                <div class="card">
                    <img src={watch2} class="card-img-top" alt="watch" />
                    <div class="card-body">
                        <h5 class="card-title">Vigilate Smart Watch</h5>
                        <h5 className='text-muted'>$699 &nbsp; | &nbsp; Vigilate</h5>
                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <div className='mx-auto text-center'>
                            <a href="#" class="Btn btn redBtn">Shop now</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watch3} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Fitness smart watch</h5>
                            <h5 className='text-muted'>$899 &nbsp; | &nbsp; Fitness & Sports</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watch4} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Casual Police</h5>
                            <h5 className='text-muted'>$399 &nbsp; | &nbsp; Casual wear</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="best-sellers">
            <h1 className='section-header text-center'>FEATURED.</h1>
            <div className="row">
                <div className="col-sm-4">
                <div class="card">
                    <img src={watch5} class="card-img-top" alt="watch" />
                    <div class="card-body">
                        <h5 class="card-title">Fitnes Tracker - 988</h5>
                        <h5 className='text-muted'>$799 &nbsp; | &nbsp; Fitness & Sports</h5>
                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <div className='mx-auto text-center'>
                            <a href="#" class="Btn btn redBtn">Shop now</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watch6} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Matte Otter</h5>
                            <h5 className='text-muted'>$999 &nbsp; | &nbsp; Casual Wear</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. </p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="card">
                        <img src={watch7} class="card-img-top" alt="watch" />
                        <div class="card-body">
                            <h5 class="card-title">Sino mexel</h5>
                            <h5 className='text-muted'>$599 &nbsp; | &nbsp; Classic</h5>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                            <div className='mx-auto text-center'>
                                <a href="#" class="Btn btn redBtn">Shop now</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>



    </div>
  )
}
